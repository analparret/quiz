const questions = [
  {
    question: "Quem foi o primeiro homem a pisar na Lua?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
    correct: "Neil Armstrong"
  },
  {
    question: "Qual missão Apollo foi famosa por enfrentar um grave problema técnico, mas conseguiu retornar em segurança à Terra?",
    answers: ["Apollo 8", "Apollo 12", "Apollo 13", "Apollo 15"],
    correct: "Apollo 13"
  },
  {
    question: "O Saturno V tinha capacidade de colocar um peso aproximado de quantas toneladas em órbita baixa da Terra (LEO)?",
    answers: ["50 toneladas", "85 toneladas", "118 a 130 toneladas", "200 toneladas"],
    correct: "118 a 130 toneladas"
  },
  {
    question: "A Apollo 8 foi a primeira missão tripulada a orbitar a Lua. Em que feriado ocorreu o seu lançamento histórico em 1968?",
    answers: ["Ação de Graças", "Véspera de Natal", "Páscoa", "Dia da Independência"],
    correct: "Véspera de Natal"
  },
  {
    question: "O primeiro estágio (S-IC) do Saturno V era propulsionado por quantos motores do tipo F-1?",
    answers: ["Quatro", "Cinco", "Seis", "Sete"],
    correct: "Cinco"
  },
  //{
    //question: "",
    //answers: ["", "", "", ""],
    //correct: ""
  //},
  {
    question: "Qual foi a missão que levou o homem à Lua pela primeira vez?",
    answers: ["Apollo 11", "Apollo 12", "Apollo 10", "Apollo 8"],
    correct: "Apollo 11"
  },
  {
    question: "Em que ano o homem pisou na Lua pela primeira vez?",
    answers: ["1969", "1971", "1968", "1972"],
    correct: "1969"
  },
  {
    question: "Quantas missões Apollo pousaram na Lua?",
    answers: ["6", "9", "12", "3"],
    correct: "6"
  },
  {
    question: "Qual era o nome do Módulo Lunar da missão Apollo 11?",
    answers: ["Columbia", "Odyssey", "Challenger", "Eagle"],
    correct: "Eagle"
  },
  {
    question: "Qual astronauta ficou orbitando a Lua durante o pouso da Apollo 11?",
    answers: ["Michael Collins", "Buzz Aldrin", "Neil Armstrong", "John Glenn"],
    correct: "Michael Collins"
  }
];

let shuffledQuestions, currentQuestionIndex, selectedAnswer, score;
let fireworksLoopId; 
let fireworkInterval;

// Audio
const bgMusic = document.getElementById("bgMusic");
const sfxCorrect = document.getElementById("sfxCorrect");
const sfxIncorrect = document.getElementById("sfxIncorrect");

// Volume
bgMusic.volume = 0.2; // Volume da trilha de fundo ajustado
sfxCorrect.volume = 0.6; 
sfxIncorrect.volume = 0.6; 

// Trilha
const backgroundTrack = "audio/trilha2.mp3"; 

const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const confirmButton = document.getElementById("confirmButton");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const restartButton = document.getElementById("restartButton");
const quiz = document.getElementById("quiz");
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");
const finalMessage = document.getElementById("finalMessage"); 
const animatedTitle = document.getElementById("animatedTitle"); 
const mainTitle = document.getElementById("mainTitle"); 
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function animateTitleLetters(elementId, text) {
  const element = document.getElementById(elementId);
  if (!element) return;  
  let newHTML = '';
  let colors = ['color-blue', 'color-cyan', 'color-aqua', 'color-purple', 'color-light-blue']; 
  colors = shuffleArray(colors); 
  let colorIndex = 0;
  const rotations = [-1.5, 0.5, 1, -0.8, 1.2, -0.3, 0.6, -1];
  let rotationIndex = 0;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === ' ' || char === ':') {
      newHTML += char === ' ' ? '&nbsp;' : char;
    } else {
      const colorClass = colors[colorIndex % colors.length];
      const rotation = rotations[rotationIndex % rotations.length];
      
      newHTML += `<span class="${colorClass}" style="display: inline-block; transform: rotate(${rotation}deg);">${char}</span>`;
      colorIndex++;
      rotationIndex++;
    }
  }
  element.innerHTML = newHTML;
}

function resizeCanvas() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function playBackgroundMusic() {
  bgMusic.src = backgroundTrack;
  bgMusic.currentTime = 0; 
  bgMusic.play().catch(e => console.log("Música não iniciada automaticamente.", e));
}

startButton.addEventListener("click", () => {
    
    startScreen.classList.add('d-none'); 
    quizContainer.classList.remove('d-none'); 
    
    playBackgroundMusic();
    startQuiz();
});

function startQuiz() {
  
  if (bgMusic.paused) {
      playBackgroundMusic();
  }

  animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");

  finalMessage.textContent = ""; 
  finalMessage.classList.remove("neon-glow-purple"); 

  clearInterval(fireworkInterval);
  cancelAnimationFrame(fireworksLoopId);
  particles = []; 
  ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  
  quiz.classList.remove("d-none");
  result.classList.add("d-none");
  
  progressBar.style.width = "0%";
  
  nextQuestion();
}

function nextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  updateProgress(); 
}

function showQuestion(q) {
  questionText.textContent = q.question;
  const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
  answerButtons.innerHTML = ''; 
  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    
    button.classList.add("btn-answer");
    
    button.addEventListener("click", () => {
        selectAnswer(button, answer);
    });
    answerButtons.appendChild(button);
  });
}

function resetState() {
  confirmButton.disabled = true;
  answerButtons.innerHTML = "";
  selectedAnswer = null;
}

function selectAnswer(button, answer) {
  selectedAnswer = answer;
  Array.from(answerButtons.children).forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
  confirmButton.disabled = false;
  button.blur();
}

confirmButton.addEventListener("click", () => {
    if (!selectedAnswer) return;
    
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;

    if (isCorrect) {
        score++;
        sfxCorrect.currentTime = 0;
        sfxCorrect.play();
    } else {
        sfxIncorrect.currentTime = 0;
        sfxIncorrect.play();
    }

    Array.from(answerButtons.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("selected");
        
        if (btn.textContent === currentQuestion.correct) {
            btn.classList.add("correct");
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add("incorrect");
        }
    });
    
    confirmButton.disabled = true;    

    setTimeout(() => {
        const progressAfterAnswer = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progressAfterAnswer}%`;
    }, 100); 

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            nextQuestion();
        } else {
            showResult();
        }
    }, 1500); 
});

function updateProgress() {
  const progress = (currentQuestionIndex / shuffledQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResult() {
    quiz.classList.add("d-none");
    result.classList.remove("d-none");
    
    resultText.innerHTML = `Você acertou <strong>${score}</strong> de ${shuffledQuestions.length} perguntas! 🚀`;
    
    launchFireworks(); 

    const textToType = "FIM DE JOGO";
    
    finalMessage.textContent = textToType;
    finalMessage.classList.add("neon-glow-purple"); 
}

restartButton.addEventListener("click", () => {
    startQuiz(); 
});

//Fogos
let particles = [];
function launchFireworks() {
  clearInterval(fireworkInterval);
  cancelAnimationFrame(fireworksLoopId);
  particles = [];
  
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * fireworksCanvas.width,
      y: Math.random() * fireworksCanvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 6,
      speedY: (Math.random() - 1) * 6,
      life: 200
    });
  }
  if (particles.length > 0) requestAnimationFrame(animateFireworks);
}

function animateFireworks() {
  ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  
  particles = particles.filter(p => p.life > 0);
  
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;
  });

  if (particles.length > 0) {
      fireworksLoopId = requestAnimationFrame(animateFireworks);
  } else {
      ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
      cancelAnimationFrame(fireworksLoopId);
  }
}

animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");
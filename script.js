// =========================================================
// 🚀 PERGUNTAS ORGANIZADAS POR NÍVEL
// =========================================================
const allQuestions = {
    easy: [
        { question: "Em que ano o homem pisou na Lua pela primeira vez?", answers: ["1969", "1971", "1968", "1972"], correct: "1969" },
        { question: "Por quantos estágios o foguete Saturno V era composto?", answers: ["Dois", "Três", "Quatro", "Cinco"], correct: "Três" },
        { question: "Após a queima e separação, qual era o destino do primeiro estágio (S-IC) do Saturno V?", answers: ["Queimar na atmosfera", "Entrar em órbita", "Ser recuperado", "Cair no Oceano"], correct: "Cair no Oceano" },
        { question: "Que instrumento científico, ainda operacional, foi deixado pelos astronautas da Apollo para medir a distância da Terra à Lua?", answers: ["Sismógrafos", "Bússola", "Câmera", "Retrorrefletores"], correct: "Retrorrefletores" },
        { question: "Quem foi o principal arquiteto do projeto do foguete Saturno V?", answers: ["Robert Goddard", "Sergei Korolev", "Wernher von Braun", "Max Faget"], correct: "Wernher von Braun" },
        { question: "Quem foi o primeiro homem a pisar na Lua?", answers: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"], correct: "Neil Armstrong" },
        { question: "A Apollo 8 foi a primeira missão tripulada a orbitar a Lua. Em que feriado ocorreu o seu lançamento histórico em 1968?", answers: ["Ação de Graças", "Véspera de Natal", "Páscoa", "Dia da Independência"], correct: "Véspera de Natal" },
        { question: "O primeiro estágio do Saturno V era propulsionado por quantos motores do tipo F-1?", answers: ["Quatro", "Cinco", "Seis", "Sete"], correct: "Cinco" },
        { question: "Qual foi a missão que levou o homem à Lua pela primeira vez?", answers: ["Apollo 11", "Apollo 12", "Apollo 10", "Apollo 8"], correct: "Apollo 11" },
        { question: "Quantas missões Apollo pousaram na Lua?", answers: ["6", "9", "12", "3"], correct: "6" },
        { question: "Qual era o nome do Módulo Lunar da missão Apollo 11?", answers: ["Columbia", "Odyssey", "Challenger", "Eagle"], correct: "Eagle" },
        { question: "Quantos astronautas morreram no teste da Apollo 1?", answers: ["1", "2", "3", "4"], correct: "3" },
        { question: "Em que ano ocorreu o incêndio fatal da Apollo 1?", answers: ["1965", "1967", "1968", "1961"], correct: "1967" },
        { question: "Antes do voo, os módulos lunares foram testados em simulações na Terra. Um dos protótipos caiu e explodiu durante teste de pouso em 1968. Quem pilotava?", answers: ["Buzz Aldrin", "Neil Armstrong", "Pete Conrad", "Michael Collins"], correct: "Neil Armstrong" },
        { question: "As missões Apollo deixaram instrumentos na Lua para medir atividades científicas. Qual desses foi realmente instalado lá?", answers: ["Detector de radiação", "Sismógrafo", "Medidor de vento", "Barômetro"], correct: "Sismógrafo" },
        { question: "Enquanto em órbita lunar, a nave experimenta:", answers: ["Gravidade zero", "Peso terrestre", "Microgravidade", "Peso 1/6 do terrestre"], correct: "Microgravidade" },
        { question: "Durante a Apollo 17, a tripulação capturou uma imagem famosa da Terra nascendo sobre a Lua. Como ela ficou conhecida?", answers: ["Earthrise", "Blue Marble", "Moonrise", "Terra Nova"], correct: "Earthrise" },
        { question: "Quem foi o último humano a pisar na Lua?", answers: ["Harrison Schmitt", "Gene Cernan", "Buzz Aldrin", "Neil Armstrong"], correct: "Gene Cernan" },
        { question: "Quem foi uma das matemáticas responsáveis pelos cálculos de trajetória da Apollo 11, garantindo o pouso seguro na Lua?", answers: ["Katherine Johnson", "Sally Ride", "Margaret Hamilton", "Valentina Tereshkova"], correct: "Katherine Johnson" },
        { question: "Quantos dias durou a missão Apollo 11 do lançamento ao retorno?", answers: ["4 dias", "8 dias", "10 dias", "14 dias"], correct: "8 dias" }
    ],
    hard: [
        { question: "Qual era o nome da missão que fez o primeiro voo tripulado do Saturn V?", answers: ["Apollo 4", "Apollo 8", "Apollo 10", "Apollo 1"], correct: "Apollo 8" },
        { question: "Qual missão Apollo foi famosa por enfrentar um grave problema técnico, mas conseguiu retornar em segurança à Terra?", answers: ["Apollo 8", "Apollo 12", "Apollo 13", "Apollo 15"], correct: "Apollo 13" },
        { question: "O Saturno V tinha capacidade de colocar um peso aproximado de quantas toneladas em órbita baixa da Terra (LEO)?", answers: ["50 toneladas", "85 toneladas", "118 a 130 toneladas", "200 toneladas"], correct: "118 a 130 toneladas" },
        { question: "Qual astronauta ficou orbitando a Lua durante o pouso da Apollo 11?", answers: ["Michael Collins", "Buzz Aldrin", "Neil Armstrong", "John Glenn"], correct: "Michael Collins" },
        { question: "Qual material predominante foi trazido pelas missões Apollo?", answers: ["Granito", "Basalto", "Arenito", "Calcário"], correct: "Basalto" },
        { question: "Qual era a força de empuxo aproximada do primeiro estágio do Saturno V no lançamento?", answers: ["5.000 kN", "12.000 kN", "34.000 kN", "50.000 kN"], correct: "34.000 kN" },
        { question: "Para sair da gravidade da Terra, a nave Apollo precisava atingir aproximadamente qual velocidade de escape?", answers: ["7,9 km/s", "9,8 km/s", "11,2 km/s", "13,0 km/s"], correct: "11,2 km/s" },
        { question: "A aceleração da gravidade na Terra é 9,8 m/s². Na Lua, ela é aproximadamente:", answers: ["3,2 m/s²", "2,7 m/s²", "1,6 m/s²", "9,8 m/s²"], correct: "1,6 m/s²" },
        { question: "Sabendo que a Lua está a 384.000km da Terra e que a velocidade da luz é 300.000km/s, quanto tempo o feixe de laser leva para ir e voltar até a Lua?", answers: ["0,64 segundos", "1,28 segundos", "2,56 segundos", "3,84 segundos"], correct: "2,56 segundos" },
        { question: "Qual era a velocidade aproximada do módulo de comando em órbita baixa lunar?", answers: ["0,8 km/s", "1,6 km/s", "3,0 km/s", "7,7 km/s"], correct: "1,6 km/s" },
        { question: "Durante testes na Terra, um astronauta quase morreu ao sofrer um vazamento de oxigênio em um traje pressurizado. Quem foi?", answers: ["Neil Armstrong", "John Young", "Jim LeBlanc", "Alan Bean"], correct: "Jim LeBlanc" },
        { question: "As missões Apollo trouxeram cerca de quantos kg de rochas lunares?", answers: ["15", "60", "382", "1.000"], correct: "382" },
        { question: "Com as amostras lunares, os cientistas puderam confirmar que a Lua tem cerca de qual fração da massa da Terra?", answers: ["1/2", "1/4", "1/6", "1/81"], correct: "1/81" },
        { question: "Um dos experimentos das Apollo media a temperatura abaixo da superfície lunar. Para que?", answers: ["Estudar o núcleo da Lua", "Calcular a energia solar refletida", "Estudar variação térmica", "Testar sensores de calor"], correct: "Estudar variação térmica" },
        { question: "A Apollo 11 orbitava a Terra a cerca de 7,7 km/s. A energia cinética por unidade de massa era aproximadamente:", answers: ["15 MJ/kg", "30 MJ/kg", "50 MJ/kg", "60 MJ/kg"], correct: "30 MJ/kg" },
        { question: "Para entrar em órbita lunar, a Apollo realizava manobras de correção chamadas:", answers: ["Hohmann", "Mid-course corrections", "Gravitational slingshot", "Retro-thrust orbiting"], correct: "Mid-course corrections" },
        { question: "A Apollo 17 foi lançada em dezembro de 1972. Quem era o comandante da missão?", answers: ["Neil Armstrong", "Gene Cernan", "Harrison Schmitt", "Eugene Aldrin"], correct: "Gene Cernan" },
        { question: "A Apollo 17 marcou a primeira missão com um cientista profissional na tripulação. Quem era ele?", answers: ["Harrison Schmitt", "Michael Collins", "Buzz Aldrin", "Jim Lovell"], correct: "Harrison Schmitt" },
        { question: "Quem liderou a equipe que desenvolveu o software de bordo do Apollo Guidance Computer?", answers: ["Mary Jackson", "Margaret Hamilton", "Annie Easley", "Carolyn Porco"], correct: "Margaret Hamilton" },
        { question: "Além de Katherine Johnson e Margaret Hamilton, quem recebeu reconhecimento por apoiar cálculos e simulações das Apollo?", answers: ["Mary Jackson", "Sally Ride", "Valentina Tereshkova", "Ellen Ochoa"], correct: "Mary Jackson" }
    ]
};

// =========================================================
// VARIÁVEIS DE ESTADO E CONSTANTES
// =========================================================
let shuffledQuestions, currentQuestionIndex, selectedAnswer, score;
let fireworksLoopId; 
let fireworkInterval;

let currentLevel = null; 
const QUESTIONS_PER_GAME = 10; 

// =========================================================
// REFERÊNCIAS AO DOM
// =========================================================
// Audio
const bgMusic = document.getElementById("bgMusic");
const sfxCorrect = document.getElementById("sfxCorrect");
const sfxIncorrect = document.getElementById("sfxIncorrect");

// Quiz Elements
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const confirmButton = document.getElementById("confirmButton");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const quiz = document.getElementById("quiz");
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");
const finalMessage = document.getElementById("finalMessage"); 
const animatedTitle = document.getElementById("animatedTitle"); 
const mainTitle = document.getElementById("mainTitle"); 
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quizContainer");

// REFERÊNCIAS AOS BOTÕES DE INÍCIO
const easyStartButton = document.getElementById("easyStartButton");
const hardStartButton = document.getElementById("hardStartButton");

// =========================================================
// CONFIGURAÇÕES INICIAIS
// =========================================================
bgMusic.volume = 0.2; 
sfxCorrect.volume = 0.6; 
sfxIncorrect.volume = 0.6; 
const backgroundTrack = "audio/trilha2.mp3"; 

// =========================================================
// FUNÇÕES AUXILIARES
// =========================================================

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

function playBackgroundMusic() {
    bgMusic.src = backgroundTrack;
    bgMusic.currentTime = 0; 
    bgMusic.play().catch(e => console.log("Música não iniciada automaticamente.", e));
}

// =========================================================
// LÓGICA DE INÍCIO E NÍVEIS
// =========================================================
function initializeListeners() {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Event listeners para os novos botões de início
    if (easyStartButton) easyStartButton.addEventListener("click", () => startLevel('easy'));
    if (hardStartButton) hardStartButton.addEventListener("click", () => startLevel('hard'));
    
    // Listener para o botão de confirmação
    if (confirmButton) confirmButton.addEventListener("click", handleConfirmClick);
    
    // Animação inicial
    animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");
}

function startLevel(level) {
    currentLevel = level; // Define o nível escolhido ('easy' ou 'hard')
    
    // 1. Troca a tela
    if (startScreen) startScreen.classList.add('d-none');
    if (quizContainer) quizContainer.classList.remove('d-none');
    
    // 2. Inicia a música
    playBackgroundMusic();
    
    // 3. Inicia o quiz com a lógica de sorteio
    startQuiz();
}

function startQuiz() {
    // Garante que a música está tocando (em caso de reinício)
    if (bgMusic.paused) {
        playBackgroundMusic();
    }

    animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");

    // Limpa efeitos de resultado anterior
    if (finalMessage) {
        finalMessage.textContent = ""; 
        finalMessage.classList.remove("neon-glow-purple"); 
    }

    clearInterval(fireworkInterval);
    cancelAnimationFrame(fireworksLoopId);
    particles = []; 
    if (ctx) ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    // Lógica Central: Seleção, Embaralhamento e Limitação
    // 1. Pega todas as perguntas do nível atual
    const availableQuestions = allQuestions[currentLevel];
    if (!availableQuestions || availableQuestions.length === 0) {
        console.error("Não há perguntas disponíveis para este nível.");
        return; 
    }
    
    // 2. Embaralha todas as perguntas disponíveis no nível
    const tempShuffled = availableQuestions.sort(() => Math.random() - 0.5); 
    
    // 3. Pega APENAS as primeiras 10 perguntas para a partida
    shuffledQuestions = tempShuffled.slice(0, QUESTIONS_PER_GAME); 
    
    currentQuestionIndex = 0;
    score = 0;
    
    if (quiz) quiz.classList.remove("d-none");
    if (result) result.classList.add("d-none");
    
    if (progressBar) progressBar.style.width = "0%";
    
    nextQuestion();
}

function nextQuestion() {
    resetState();
    // Verifica se ainda há perguntas no array Sorteado (shuffledQuestions)
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateProgress();
    } else {
        showResult();
    }
}

function showQuestion(q) {
    if (questionText) questionText.textContent = q.question;
    const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);
    if (answerButtons) answerButtons.innerHTML = ''; 
    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        
        button.classList.add("btn-answer");
        
        button.addEventListener("click", () => {
            selectAnswer(button, answer);
        });
        if (answerButtons) answerButtons.appendChild(button);
    });
}

function resetState() {
    if (confirmButton) confirmButton.disabled = true;
    if (answerButtons) answerButtons.innerHTML = "";
    selectedAnswer = null;
}

function selectAnswer(button, answer) {
    selectedAnswer = answer;
    Array.from(answerButtons.children).forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    if (confirmButton) confirmButton.disabled = false;
    button.blur();
}

function handleConfirmClick() {
    if (!selectedAnswer) return;
    
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;

    if (isCorrect) {
        score++;
        if (sfxCorrect) { sfxCorrect.currentTime = 0; sfxCorrect.play(); }
    } else {
        if (sfxIncorrect) { sfxIncorrect.currentTime = 0; sfxIncorrect.play(); }
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
    
    if (confirmButton) confirmButton.disabled = true;    

    setTimeout(() => {
        const progressAfterAnswer = ((currentQuestionIndex + 1) / QUESTIONS_PER_GAME) * 100; // Usa QUESTIONS_PER_GAME
        if (progressBar) progressBar.style.width = `${progressAfterAnswer}%`;
    }, 100); 

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS_PER_GAME) { // Usa QUESTIONS_PER_GAME
            nextQuestion();
        } else {
            showResult();
        }
    }, 1500); 
}

function updateProgress() {
    // Ajusta o progresso para o total de perguntas da partida (10)
    const progress = (currentQuestionIndex / QUESTIONS_PER_GAME) * 100; 
    if (progressBar) progressBar.style.width = `${progress}%`;
}

// LÓGICA DA TELA DE RESULTADO (COM AS NOVAS CORES E TEXTOS)
function showResult() {
    if (quiz) quiz.classList.add("d-none");
    if (result) result.classList.remove("d-none");
    
    // 1. Limpa a div de resultado ANTES de adicionar os novos elementos
    if (result) result.innerHTML = ''; 

    // 2. Cria o TÍTULO final
    const finalMessageElement = document.createElement('h3');
    finalMessageElement.id = 'finalMessage';
    finalMessageElement.textContent = "FIM DE JOGO";
    finalMessageElement.classList.add("neon-glow-purple"); 
    
    // 3. Cria o PLACAR de texto
    const resultTextElement = document.createElement('p');
    resultTextElement.id = 'resultText';
    resultTextElement.innerHTML = `Você acertou <strong>${score}</strong> de ${QUESTIONS_PER_GAME} perguntas! 🚀`;

    // 4. ANEXA o TÍTULO e o PLACAR
    if (result) {
        result.appendChild(finalMessageElement);
        result.appendChild(resultTextElement);
    }
    
    launchFireworks(); 

    // Botão 1: Jogar Novamente (Mesmo Nível)
    const restartSameLevelButton = document.createElement("button");
    // === MUDANÇA AQUI: Remove a indicação do nível do texto do botão
    restartSameLevelButton.textContent = `JOGAR NOVAMENTE`; 
    restartSameLevelButton.classList.add("btn-restart");
    // Mantém a cor original do nível
    restartSameLevelButton.classList.add(currentLevel === 'easy' ? 'btn-easy' : 'btn-hard'); 
    restartSameLevelButton.addEventListener("click", () => startLevel(currentLevel));
    if (result) result.appendChild(restartSameLevelButton);

    // Botão 2: Mudar de Nível
    const changeLevelButton = document.createElement("button");
    changeLevelButton.textContent = "MUDAR DE NÍVEL";
    changeLevelButton.classList.add("btn-restart");
    // === MUDANÇA AQUI: Cor Laranja
    changeLevelButton.style.backgroundColor = '#ff8c00'; // Laranja
    changeLevelButton.style.boxShadow = '0 5px 15px rgba(255, 140, 0, 0.4)';
    changeLevelButton.style.animation = 'none'; 
    changeLevelButton.addEventListener("click", showStartScreen);
    if (result) result.appendChild(changeLevelButton);
}

// NOVA FUNÇÃO: Voltar para a tela inicial
function showStartScreen() {
    if (quizContainer) quizContainer.classList.add('d-none');
    if (startScreen) startScreen.classList.remove('d-none');
    if (bgMusic) bgMusic.pause(); 
    
    // Limpa os fogos
    clearInterval(fireworkInterval);
    cancelAnimationFrame(fireworksLoopId);
    particles = []; 
    if (ctx) ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
}


// =========================================================
// FOGOS DE ARTIFÍCIO
// =========================================================
let particles = [];
function launchFireworks() {
    if (!fireworksCanvas || !ctx) return; 

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
    if (!ctx) return;
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

// Inicializa a lógica principal ao carregar o DOM
document.addEventListener('DOMContentLoaded', initializeListeners);

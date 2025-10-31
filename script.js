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
        {
          question: "Em que ano o Programa Apollo foi oficialmente anunciado pela NASA?",
          answers: ["1959", "1961", "1963", "1965"],
          correct: "1961"
        },
        {
          question: "Qual presidente dos EUA anunciou a meta de levar o homem à Lua antes do fim da década de 1960?",
          answers: ["Richard Nixon", "Dwight Eisenhower", "John F. Kennedy", "Lyndon Johnson"],
          correct: "John F. Kennedy"
        },
        {
          question: "Qual era o nome do foguete usado nas missões Apollo tripuladas para a Lua?",
          answers: ["Atlas", "Titan II", "Saturn V", "Delta"],
          correct: "Saturn V"
        },
        {
          question: "O módulo que ficava em órbita da Lua enquanto o outro pousava era o:",
          answers: ["Lunar Module", "Command Module", "Booster Stage", "Return Capsule"],
          correct: "Command Module"
        },
        {
          question: "Quem foi o primeiro diretor do Programa Apollo na NASA?",
          answers: ["Wernher von Braun", "Sam Phillips", "Gene Kranz", "Deke Slayton"],
          correct: "Sam Phillips"
        },
        {
          question: "Onde ficava o principal centro de lançamento do Programa Apollo?",
          answers: ["Houston", "Cabo Canaveral", "Huntsville", "Edwards"],
          correct: "Cabo Canaveral"
        },
        {
          question: "A Apollo 7 foi a primeira missão americana a transmitir:",
          answers: ["Imagens coloridas da Lua", "Vídeo ao vivo do espaço", "Voz via satélite", "Telemetria em 4K"],
          correct: "Vídeo ao vivo do espaço"
        },
        {
          question: "Após o sucesso da Apollo 10, a NASA aprovou:",
          answers: ["missão de acoplamento extra", "primeiro pouso lunar", "revoo de teste", "cancelamento parcial"],
          correct: "primeiro pouso lunar"
        },
        {
          question: "O módulo de comando da Apollo 11 chamava-se:",
          answers: ["Columbia", "Odyssey", "Yankee Clipper", "Casper"],
          correct: "Columbia"
        },
        {
          question: "Qual país transmitiu a imagem do primeiro passo lunar ao vivo para o mundo?",
          answers: ["EUA", "Austrália", "Reino Unido", "França"],
          correct: "Austrália"
        },
        {
          question: "A Apollo 15 foi a primeira missão a usar o:",
          answers: ["módulo lunar ampliado", "traje pressurizado", "rover lunar", "radar de penetração"],
          correct: "rover lunar"
        },
        {
          question: "O módulo lunar da Apollo 15 chamava-se:",
          answers: ["Falcon", "Orion", "Challenger", "Antares"],
          correct: "Falcon"
        },
        {
          question: "O módulo lunar da Apollo 17 chamava-se:",
          answers: ["Challenger", "America", "Orion", "Falcon"],
          correct: "Challenger"
        },
        {
          question: "O Módulo Lunar pesava cerca de:",
          answers: ["5 toneladas", "10 toneladas", "1 tonelada", "20 toneladas"],
          correct: "10 toneladas"
        },
        {
          question: "Quantos segundos de combustível restavam no tanque da Apollo 11 no momento do pouso?",
          answers: ["30 s", "20 s", "40 s", "10 s"],
          correct: "20 s"
        },
        {
          question: "O solo lunar (regolito) contém grande quantidade de:",
          answers: ["ferro e titânio", "enxofre e zinco", "cromo e cobre", "silício e nitrogênio"],
          correct: "ferro e titânio"
        },
        {
          question: "A velocidade máxima registrada de um rover lunar foi de:",
          answers: ["9 km/h", "11 km/h", "13 km/h", "15 km/h"],
          correct: "11 km/h"
        },
        {
          question: "A Apollo 17 foi a única missão lançada:",
          answers: ["ao pôr do sol", "à noite", "ao meio-dia", "no inverno lunar"],
          correct: "à noite"
        },
        {
          question: "Qual é a teoria mais famosa sobre a filmagem da ida à Lua?",
          answers: ["Foi filmada em Marte", "Feita em estúdio de Hollywood", "Foi uma animação soviética", "Foi feita por Spielberg"],
          correct: "Feita em estúdio de Hollywood"
        },
        {
          question: "A tragédia da Apollo 1 aconteceu durante:",
          answers: ["o lançamento", "um teste em solo", "o retorno", "o pouso"],
          correct: "um teste em solo"
        },
        {
          question: "Qual foi o problema que causou o incêndio da Apollo 1?",
          answers: ["Válvula de combustível", "Curto elétrico", "Motor principal", "Bateria superaquecida"],
          correct: "Curto elétrico"
        },
        {
          question: "A frase “We’ll see you on the other side” foi dita quando a Apollo 8:",
          answers: ["entrou em órbita lunar", "pousou na Lua", "retornou à Terra", "perdeu comunicação com Houston"],
          correct: "entrou em órbita lunar"
        },
        {
          question: "A frase “Houston, Tranquility Base here. The Eagle has landed” foi dita por:",
          answers: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Gene Kranz"],
          correct: "Neil Armstrong"
        },
        {
          question: "O principal objetivo da Apollo 12 era:",
          answers: ["Alunissagem precisa", "Coletar gelo lunar", "Buscar vida", "Testar novo traje"],
          correct: "Alunissagem precisa"
        },
        {
          question: "A Apollo 12 quase falhou por causa de:",
          answers: ["pane elétrica após raio", "falta de combustível", "motor travado", "perda de comunicação"],
          correct: "pane elétrica após raio"
        },
        {
          question: "A Apollo 13 ficou famosa por:",
          answers: ["pousar na Lua", "não conseguir pousar", "encontrar gelo", "quebrar recorde de duração"],
          correct: "não conseguir pousar"
        },
        {
          question: "Alan Shepard ficou famoso na Apollo 14 por:",
          answers: ["jogar golfe na Lua", "correr maratona lunar", "plantar uma bandeira gigante", "cair em uma cratera"],
          correct: "jogar golfe na Lua"
        },
        {
          question: "Qual missão trouxe a maior quantidade de rochas lunares?",
          answers: ["Apollo 11", "Apollo 15", "Apollo 11", "Apollo 14"],
          correct: "Apollo 15"
        },
        {
          question: "O nome “Apollo” foi escolhido por:",
          answers: ["John F. Kennedy", "Um engenheiro da NASA", "Neil Armstrong", "O Congresso"],
          correct: "Um engenheiro da NASA"
        },
        {
          question: "O segundo homem a pisar na Lua foi:",
          answers: ["Michael Collins", "Buzz Aldrin", "Gene Cernan", "Alan Bean"],
          correct: "Buzz Aldrin"
        },
        {
          question: "Qual era o tempo médio de viagem até a Lua?",
          answers: ["1 dia", "3 dias", "5 dias", "7"],
          correct: "3 dias"
        },
        {
          question: "Os astronautas deixaram na Lua:",
          answers: ["lixo, bandeiras e equipamentos", "apenas a bandeira", "nada", "um carro"],
          correct: "lixo, bandeiras e equipamentos"
        },
        {
          question: "Quantas bandeiras dos EUA foram deixadas na Lua?",
          answers: ["3", "6", "10", "12"],
          correct: "6"
        },
        {
          question: "O traje espacial era feito principalmente de:",
          answers: ["alumínio", "nylon e teflon", "ferro", "chumbo"],
          correct: "nylon e teflon"
        },
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
        {
          question: "Antes do Apollo, qual programa testou as cápsulas tripuladas em órbita?",
          answers: ["Gemini", "Mercury", "Skylab", "Pioneer"],
          correct: "Gemini"
        },
        {
          question: "Quantos astronautas eram normalmente treinados por missão Apollo?",
          answers: ["3", "6", "8", "9"],
          correct: "3"
        },
        {
          question: "Qual teste importante simulou uma missão lunar completa sem tripulação?",
          answers: ["Apollo 1", "Apollo 4", "Apollo 5", "Apollo 6"],
          correct: "Apollo 4"
        },
        {
          question: "Quais astronautas morreram no incêndio da Apollo 1?",
          answers: ["White, Chaffee, Grissom", "Armstrong, Aldrin, Collins", "Shepard, Cooper, Slayton", "Young, Mattingly, Swigert"],
          correct: "White, Chaffee, Grissom"
        },
        {
          question: "O incêndio da Apollo 1 ocorreu durante:",
          answers: ["lançamento", "teste de pressurização", "reentrada", "acoplamento"],
          correct: "teste de pressurização"
        },
        {
          question: "A missão Apollo 5 testou pela primeira vez o:",
          answers: ["Módulo de Comando", "Módulo Lunar", "Saturn V", "traje espacial"],
          correct: "Módulo Lunar"
        },
        {
          question: "Quem foi o comandante da Apollo 7?",
          answers: ["Neil Armstrong", "Wally Schirra", "Frank Borman", "Jim Lovell"],
          correct: "Wally Schirra"
        },
        {
          question: "A Apollo 7 foi lançada com qual foguete?",
          answers: ["Saturn V", "Saturn IB", "Saturn I", "Titan II"],
          correct: "Saturn IB"
        },
        {
          question: "Em que órbita específica a Apollo 7 permaneceu?",
          answers: ["180 km circular", "230 km elíptica", "160 km circular", "310 km elíptica"],
          correct: "230 km elíptica"
        },
        {
          question: "O sistema de suporte de vida do Módulo de Comando foi testado durante a Apollo 7 por quantos dias?",
          answers: ["5", "8", "10", "12"],
          correct: "10"
        },
        {
          question: "Qual falha menor ocorreu nos motores do módulo de serviço da Apollo 7?",
          answers: ["vibração excessiva", "superaquecimento", "perda de pressão", "falha elétrica"],
          correct: "vibração excessiva"
        },
        {
          question: "O principal objetivo da Apollo 7 foi:",
          answers: ["testar o módulo lunar", "testar o módulo de comando em órbita", "fotografar a Lua", "simular pouso"],
          correct: "testar o módulo de comando em órbita"
        },
        {
          question: "Quem foi o comandante da Apollo 8?",
          answers: ["Frank Borman", "Jim Lovell", "Neil Armstrong", "Tom Stafford"],
          correct: "Frank Borman"
        },
        {
          question: "A famosa leitura do Gênesis transmitida do espaço foi feita durante:",
          answers: ["Apollo 7", "Apollo 8", "Apollo 9", "Apollo 10"],
          correct: "Apollo 8"
        },
        {
          question: "A icônica foto “Earthrise” foi tirada por:",
          answers: ["Borman", "Lovell", "Anders", "Stafford"],
          correct: "Anders"
        },
        {
          question: "O módulo lunar da Apollo 9 foi chamado de:",
          answers: ["Eagle", "Spider", "Snoopy", "Falcon"],
          correct: "Spider"
        },
        {
          question: "Qual altitude mínima o módulo lunar Snoopy da Apollo 10 atingiu sobre a Lua antes de retornar?",
          answers: ["15 km", "25 km", "35", "50"],
          correct: "15 km"
        },
        {
          question: "O principal objetivo da Apollo 10 foi:",
          answers: ["pousar na Lua", "testar acoplamento lunar", "testar reentrada", "realizar EVA"],
          correct: "testar acoplamento lunar"
        },
        {
          question: "Onde a Apollo 11 pousou na Lua?",
          answers: ["Mare Serenitatis", "Mare Tranquillitatis", "Oceanus Procellarum", "Mare Imbrium"],
          correct: "Mare Tranquillitatis"
        },
        {
          question: "Quanto tempo a Apollo 11 ficou pousada na superfície lunar?",
          answers: ["12h", "21h", "24h", "48h"],
          correct: "21h"
        },
        {
          question: "A Apollo 12 pousou em qual região lunar?",
          answers: ["Oceanus Procellarum", "Mare Imbrium", "Mare Tranquillitatis", "Montes Apenninus"],
          correct: "Oceanus Procellarum"
        },
        {
          question: "A Apollo 12 foi a primeira missão a:",
          answers: ["filmar em cores na Lua", "usar radar de pouso", "realizar EVA de 10h", "fazer três pousos simulados"],
          correct: "filmar em cores na Lua"
        },
        {
          question: "A Apollo 13 teve seu voo abortado devido a:",
          answers: ["falha no motor", "explosão de tanque de oxigênio", "problema de comunicação", "erro de navegação"],
          correct: "explosão de tanque de oxigênio"
        },
        {
          question: "A Apollo 14 marcou o retorno bem-sucedido à Lua com qual comandante?",
          answers: ["Alan Shepard", "Edgar Mitchell", "Stuart Roosa", "John Young"],
          correct: "Alan Shepard"
        },
        {
          question: "O módulo lunar da Apollo 14 chamava-se:",
          answers: ["Falcon", "Orion", "Antares", "Challenger"],
          correct: "Falcon"
        },
        {
          question: "O principal objetivo da Apollo 14 foi:",
          answers: ["teste de reentrada", "coleta geológica extensa", "observação solar", "radar de penetração lunar"],
          correct: "coleta geológica extensa"
        },
        {
          question: "Qual experimento foi deixado na Lua pela Apollo 15?",
          answers: ["LRRR", "ALSEP", "LEM-4", "SEQ Bay"],
          correct: "ALSEP"
        },
        {
          question: "A Apollo 15 trouxe de volta a famosa “pedra gênese”, uma amostra de:",
          answers: ["basalto", "anortosito", "olivina", "gabrro"],
          correct: "anortosito"
        },
        {
          question: "A potência total do Saturn V ao decolar era equivalente a quantos aviões a jato comerciais juntos?",
          answers: ["500", "1.000", "10.000", "20.000"],
          correct: "10.000"
        },
        {
          question: "Qual era o tipo de combustível usado no segundo e terceiro estágios do Saturn V?",
          answers: ["RP-1 e LOX", "LH₂ e LOX", "Hidrazina e N₂O₄", "Metano e oxigênio"],
          correct: "LH₂ e LOX"
        },
        {
          question: "O sistema de computador do módulo de comando usava qual tipo de memória?",
          answers: ["RAM magnética", "Memória de núcleo de ferrite", "Memória óptica", "Cartões perfurados"],
          correct: "Memória de núcleo de ferrite"
        },
        {
          question: "Quantas instruções o computador Apollo Guidance Computer (AGC) podia executar por segundo?",
          answers: ["500", "2.000", "85.000", "120.000"],
          correct: "85.000"
        },
        {
          question: "O tempo médio de atraso na comunicação entre a Lua e a Terra era de:",
          answers: ["1,2 s", "2,5 s", "3,8 s", "0,9 s"],
          correct: "1,2 s"
        },
        {
          question: "Em que ano a NASA desligou o último transmissor ALSEP na Lua",
          answers: ["1974", "1976", "1979", "1982"],
          correct: "1976"
        },
        {
          question: "O sistema ALSEP permanecia ativo após a partida dos astronautas por:",
          answers: ["alguns dias", "meses", "anos", "apenas durante a missão"],
          correct: "anos"
        },
        { question: "Além de Katherine Johnson e Margaret Hamilton, quem recebeu reconhecimento por apoiar cálculos e simulações das Apollo?", answers: ["Mary Jackson", "Sally Ride", "Valentina Tereshkova", "Ellen Ochoa"], correct: "Mary Jackson" }
    ]
};

let shuffledQuestions, currentQuestionIndex, selectedAnswer, score;
let fireworksLoopId; 
let fireworkInterval;

let currentLevel = null; 
const QUESTIONS_PER_GAME = 10; 

const bgMusic = document.getElementById("bgMusic");
const sfxCorrect = document.getElementById("sfxCorrect");
const sfxIncorrect = document.getElementById("sfxIncorrect");

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

const easyStartButton = document.getElementById("easyStartButton");
const hardStartButton = document.getElementById("hardStartButton");

bgMusic.volume = 0.2; 
sfxCorrect.volume = 0.6; 
sfxIncorrect.volume = 0.6; 
const backgroundTrack = "audio/trilha2.mp3"; 

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

function initializeListeners() {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    if (easyStartButton) easyStartButton.addEventListener("click", () => startLevel('easy'));
    if (hardStartButton) hardStartButton.addEventListener("click", () => startLevel('hard'));
    
    if (confirmButton) confirmButton.addEventListener("click", handleConfirmClick);
    
    animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");
}

function startLevel(level) {
    currentLevel = level;
    
    if (startScreen) startScreen.classList.add('d-none');
    if (quizContainer) quizContainer.classList.remove('d-none');
    
    playBackgroundMusic();
    
    startQuiz();
}

function startQuiz() {
    if (bgMusic.paused) {
        playBackgroundMusic();
    }

    animateTitleLetters('animatedTitle', "QUIZ: MISSÕES APOLLO");

    if (finalMessage) {
        finalMessage.textContent = ""; 
        finalMessage.classList.remove("neon-glow-purple"); 
    }

    clearInterval(fireworkInterval);
    cancelAnimationFrame(fireworksLoopId);
    particles = []; 
    if (ctx) ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    const availableQuestions = allQuestions[currentLevel];
    if (!availableQuestions || availableQuestions.length === 0) {
        console.error("Não há perguntas disponíveis para este nível.");
        return; 
    }
    
    const tempShuffled = availableQuestions.sort(() => Math.random() - 0.5); 
    
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
        const progressAfterAnswer = ((currentQuestionIndex + 1) / QUESTIONS_PER_GAME) * 100;
        if (progressBar) progressBar.style.width = `${progressAfterAnswer}%`;
    }, 100); 

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUESTIONS_PER_GAME) {
            nextQuestion();
        } else {
            showResult();
        }
    }, 1500); 
}

function updateProgress() {
    const progress = (currentQuestionIndex / QUESTIONS_PER_GAME) * 100; 
    if (progressBar) progressBar.style.width = `${progress}%`;
}

function showResult() {
    if (quiz) quiz.classList.add("d-none");
    if (result) result.classList.remove("d-none");
    
    if (result) result.innerHTML = ''; 

    const finalMessageElement = document.createElement('h3');
    finalMessageElement.id = 'finalMessage';
    finalMessageElement.textContent = "FIM DE JOGO";
    finalMessageElement.classList.add("neon-glow-purple"); 
    
    const resultTextElement = document.createElement('p');
    resultTextElement.id = 'resultText';
    resultTextElement.innerHTML = `Você acertou <strong>${score}</strong> de ${QUESTIONS_PER_GAME} perguntas! 🚀`;

    if (result) {
        result.appendChild(finalMessageElement);
        result.appendChild(resultTextElement);
    }
    
    launchFireworks(); 

    const restartSameLevelButton = document.createElement("button");
    restartSameLevelButton.textContent = `JOGAR NOVAMENTE`; 
    restartSameLevelButton.classList.add("btn-restart");
    restartSameLevelButton.classList.add(currentLevel === 'easy' ? 'btn-easy' : 'btn-hard'); 
    restartSameLevelButton.addEventListener("click", () => startLevel(currentLevel));
    if (result) result.appendChild(restartSameLevelButton);

    const changeLevelButton = document.createElement("button");
    changeLevelButton.textContent = "MUDAR DE NÍVEL";
    changeLevelButton.classList.add("btn-restart");
    changeLevelButton.style.backgroundColor = '#ff8c00'; // Laranja
    changeLevelButton.style.boxShadow = '0 5px 15px rgba(255, 140, 0, 0.4)';
    changeLevelButton.style.animation = 'none'; 
    changeLevelButton.addEventListener("click", showStartScreen);
    if (result) result.appendChild(changeLevelButton);
}

function showStartScreen() {
    if (quizContainer) quizContainer.classList.add('d-none');
    if (startScreen) startScreen.classList.remove('d-none');
    if (bgMusic) bgMusic.pause(); 
    
    clearInterval(fireworkInterval);
    cancelAnimationFrame(fireworksLoopId);
    particles = []; 
    if (ctx) ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
}

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

document.addEventListener('DOMContentLoaded', initializeListeners);

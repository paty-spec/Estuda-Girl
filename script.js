function login() {
  const userName = document.getElementById("userName").value;
  if (userName) {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".dashboard").style.display = "block";
    document.getElementById("userDisplay").innerText = userName;
  } else {
    alert("Por favor, insira seu nome.");
  }
}

function getMood() {
  const moods = ["Focada", "Animada", "Cansada", "Ansiosa", "Motivada"];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];

  let response = "";

  if (randomMood === "Focada") {
    response = "Ótimo! Vamos aprender algo novo hoje!";
  } else if (randomMood === "Animada") {
    response = "Energia positiva! Aproveite seu aprendizado!";
  } else if (randomMood === "Cansada") {
    response = "Desacelere e foque no que você consegue agora!";
  } else if (randomMood === "Ansiosa") {
    response = "Respire fundo. Vamos com calma e sem pressa!";
  } else {
    response = "Você está pronta para conquistar mais!";
  }

  document.getElementById("moodResponse").innerText = `Humor: ${randomMood} - ${response}`;
}

const trilhas = [
  "Introdução à Lógica de Programação",
  "HTML Básico: Estrutura de uma Página",
  "CSS: Estilizando seu primeiro site",
  "O que é um Sistema de Informação?",
  "Banco de Dados: conceitos iniciais",
  "O que é Front-end e Back-end?"
];

const humores = [
  "😄 Animada para estudar!",
  "😌 Tranquila e focada",
  "🥱 Um pouco cansada, mas vou tentar",
  "😖 Ansiosa, mas quero aprender",
  "🤩 Me sentindo poderosa hoje!"
];

function mostrarTrilha() {
  const trilha = trilhas[Math.floor(Math.random() * trilhas.length)];
  document.getElementById("studyTopic").innerText = "📌 " + trilha;
}

function mostrarHumor() {
  const humor = humores[Math.floor(Math.random() * humores.length)];
  document.getElementById("humordehoje").innerText = humor;
}

function responderPergunta(pergunta) {
  const p = pergunta.toLowerCase();
  if (p.includes("html")) return "HTML é a base da estrutura de uma página web.";
  if (p.includes("css")) return "CSS define o estilo visual da sua página.";
  if (p.includes("lógica")) return "Lógica de programação te ajuda a pensar como um sistema.";
  if (p.includes("front-end")) return "Front-end é a parte visual que o usuário interage.";
  return "Ainda estou aprendendo isso! Tente outra pergunta 😅";
}

function mostrarResposta() {
  const pergunta = document.getElementById("pergunta").value;
  const resposta = responderPergunta(pergunta);
  document.getElementById("respostaTutor").innerText = resposta;
}

function marcarComoConcluida() {
  const msg = document.getElementById("mensagemConclusao");
  const botao = document.querySelector("button[onclick='marcarComoConcluida()']");
  msg.textContent = "✨ Trilha concluída com sucesso! Parabéns! ✨";
  msg.classList.add("show");

}

let pomodoroTimer;
let tempoRestante = 25 * 60; // 25 minutos em segundos

function formatarTempo(segundos) {
    const min = String(Math.floor(segundos / 60)).padStart(2, '0');
    const sec = String(segundos % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

function iniciarFoco() {
    clearInterval(pomodoroTimer); // Evita múltiplos timers
    tempoRestante = 25 * 60;

    const mensagem = document.getElementById("mensagemPomodoro");
    mensagem.classList.add("show");

    pomodoroTimer = setInterval(() => {
        mensagem.textContent = `⏳ Tempo restante: ${formatarTempo(tempoRestante)}`;
        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(pomodoroTimer);
            mensagem.textContent = "🎉 Ciclo concluído! Faça uma pausa merecida!";
            setTimeout(() => {
                mensagem.classList.remove("show");
                mensagem.textContent = "";
            }, 5000);
        }
    }, 1000); // atualiza a cada segundo
}

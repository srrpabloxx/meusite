function responder(proximaPergunta) {

    // Esconde a pergunta atual
    document.querySelector(".ativa").classList.remove("ativa");

    // Mostra a próxima pergunta
    document
        .getElementById(proximaPergunta)
        .classList.add("ativa");
}

function mostrarFinal() {

    document
        .querySelector(".ativa")
        .classList.remove("ativa");

    document
        .getElementById("final")
        .classList.add("ativa");

    const musica = document.getElementById("musicaFinal");

    musica.play();
}


function alternarMusica() {

    const musica = document.getElementById("musicaFinal");
    const botao = document.getElementById("botaoMusica");

    if (musica.paused) {

        musica.play();
        botao.textContent = "🔊 Música";

    } else {

        musica.pause();
        botao.textContent = "🔇 Música";

    }
}

const botao = document.getElementById("botaoNaoAceito");

botao.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - botao.offsetWidth;
    const maxY = window.innerHeight - botao.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;

});
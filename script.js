let musicas = [
    {
        titulo: 'Sorte E Azar', artista: 'Barão Vermelho', src: 'musicas/musica1.mp3',
        img: 'imagens/barão.jpg'
    },
    {
        titulo: 'Vida Real', artista: 'Engenheiros do Hawaii', src: 'musicas/musica2.mp3',
        img: 'imagens/engenheiros.jpg'
    },
    {
        titulo: 'Kiss on My List', artista: 'Hall & Oates', src: 'musicas/musica3.mp3',
        img: 'imagens/kiss.jpg'
    }
];


let musica = document.querySelector('audio');
let indexMusica = 0
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeMusica = document.querySelector('.descricao h2');
let nomeCantor = document.querySelector('.descricao i');
renderizarMusica(indexMusica);

// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);
musica.addEventListener('loadedmetadata', () => {
    duracaoMusica.textContent =
        segundosParaMinutos(Math.floor(musica.duration));
});
document.querySelector('.pause').addEventListener('click', pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);
document.querySelector('.seta-e').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
})
document.querySelector('.seta-d').addEventListener('click', () => {
    indexMusica++;
       if(indexMusica > 2){
        indexMusica = 0;
    }
    
    renderizarMusica(indexMusica);
})


//Funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeCantor.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
    })
}

function tocarMusica() {
    musica.play();
    document.querySelector('.pause').style.display = "block";
    document.querySelector('.play').style.display = "none";

}

function pausarMusica() {
    musica.pause();
    document.querySelector('.play').style.display = "block";
    document.querySelector('.pause').style.display = "none";

}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundo = (segundos % 60);
    if (campoSegundo < 10) {
        campoSegundo = '0' + campoSegundo;
    }
    return campoMinuto + ":" + campoSegundo;
}





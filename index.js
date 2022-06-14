const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibePopulares() {
    let divPopulares = document.getElementById("Populares");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    console.log(dados);
    for (i = 0; i < 4; i++) {
        let populares = dados.results[i];
        console.log(populares);

        texto =
            texto +
            `
            <div class="col-xl-3 col-md-6 col-lg-6 col-sm-6">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${populares.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${populares.title}</b> <br> <b>Data de lançamento:</b> ${populares.release_date}<br> <b>Nº de votos:</b> ${populares.vote_count} - <b>Avaliação:</b> ${populares.vote_average}</p>
                    <a href="detalhes+.html?id=${populares.id}" id="btn-populares" class="btn btn-primary">Detalhes</a>
                </div>
            </div>
        </div>`;
    }
    divPopulares.innerHTML = texto;
}
const xhrPop = new XMLHttpRequest();
xhrPop.onload = exibePopulares;
xhrPop.open(
    "GET",
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
);
xhrPop.send();

document.addEventListener("load", exibePopulares);


function exibeCategorias() {
    let divCategorias = document.getElementById("Categorias");
    let texto = `<select id="Categorias" class="form-select" aria-label="Default select example">
    <option selected>CATEGORIAS: Todos</option>`;

    let dados = JSON.parse(this.responseText);

    console.log(dados);

    for (i = 0; i < dados.genres.length; i++) {
        let categorias = dados.genres[i];

        console.log(categorias);

        texto =
            texto +
            `
            <option value="${categorias.id}">${categorias.name}</option>
            `;
    }
    texto += `</select>`
    divCategorias.innerHTML = texto;
}

const xhrCat = new XMLHttpRequest();
xhrCat.onload = exibeCategorias;
xhrCat.open(
    "GET", `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
);
xhrCat.send();

document.addEventListener("load", exibeCategorias);

// function exibeNoticias() {
//     let divNoticias = document.getElementById("Noticia");
//     let texto = ` <div id="Noticias" class="container-fluid">
//     <div class="row">
//         <div class="col-12 col-xl-8">
//             <h1 class="titulo5">Novidades</h1>`;

//     let dados = JSON.parse(this.responseText);

//     console.log(dados);

//     for (i = 0; i < dados.genres.length; i++) {
//         let noticias = dados.genres[i];

//         console.log(noticias);

//         texto =
//             texto +
//             `
//             <div class="d-md-flex">
//             <img class="imagensfinais" src="imgs/noticiabatman.jpg">
//             <a href="https://www.omelete.com.br/batman/danny-devito-collin-farrell-pinguim" style="text-decoration:none">
//                 <h1 class="titulontfinal"> DeVito elogia Pinguim de Colin Farrell, mas prefere Batman de Tim Burton</h1>
//                 <p class="paragrafontfinal">O astro Danny DeVito elogiou a atuação de Colin Farrell como Pinguim no Batman de Matt Reeves, mas disse que ainda prefere o filme de Tim Burton, Batman: O Retorno. "Sim eu fiz. Achei que Colin fez um ótimo trabalho”, disse
//                     DeVito ao The Wrap. “Certamente um meio diferente. Eu acho que foi um Batman mais ousado, sério e gângster. Você tira o chapéu para qualquer um que fica sentado na cadeira de maquiagem por tanto tempo. Eu fiz isso com
//                     o Pinguim e adorei.”
//                     <br>
//                     <br>
//                     <button type="button" class="rounded-pill btn btn-primary btn-sm">Filmes</button>
//                     <button type="button" class="rounded-pill btn btn-success btn-sm">Batman</button>
//                     <button type="button" class="rounded-pill btn btn-danger btn-sm">Elogio</button>
//                 </p>

//             </a>

//         </div>
//             `;
//     }
//     texto += ` `
//     divNoticias.innerHTML = texto;
// }
// const xhrNot = new XMLHttpRequest();
// xhrNot.onload = exibeNoticias;
// xhrNot.open(
//     "GET",
//     `
//     https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
// );
// xhrNot.send();

// document.addEventListener("load", exibeNoticias);

function exibeAvaliacoes() {
    let divAvaliacoes = document.getElementById("Avaliacoes");
    let texto = `<div id="Avaliacoes" class="container-fluid d-flex flex-wrap cards">
    <div class="card-deck">
        <div class="row">
            <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6"> `;

    let dados = JSON.parse(this.responseText);

    console.log(dados);

    for (i = 0; i < dados.results.length; i++) {
        let avaliacoes = dados.results[i];

        texto =
            texto +
            `
            <div class="card">
            <img class="card-img-top2" src="imgs/unnamed.png" alt="Imagem de capa do card">
            <div class="card-body">
                <h5 class="card-title">${avaliacoes.author}</h5>
                <div class="overflow-auto">
                <p class="card-text">${avaliacoes.content}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-neutral" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z"/>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
              </svg>

                <p class="card-text"><small class="text-muted"><b>Sobre: </b>Batman: O cavaleiro das trevas - Postado em 02/03/2022</small></p>
            </div>
        </div>
            `;
    }
    texto += ` `
    divAvaliacoes.innerHTML = texto;
}
const xhrAva = new XMLHttpRequest();
xhrAva.onload = exibeAvaliacoes;
xhrAva.open(
    "GET",
    `https://api.themoviedb.org/3/movie/338953/reviews?api_key=${API_KEY}`
);
xhrAva.send();

document.addEventListener("load", exibeAvaliacoes);
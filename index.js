const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibePopulares() {
    let divPopulares = document.getElementById("Populares");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 4; i++) {
        let populares = dados.results[i];

        texto =
            texto +
            `
            <div class="col-xl-3 col-md-6 col-lg-6 col-sm-6">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${populares.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${populares.title}</b> <br> <b>Data de lançamento:</b> ${populares.release_date}<br> <b>Nº de votos:</b> ${populares.vote_count} - <b>Avaliação:</b> ${populares.vote_average}</p>
                    <a href="detalhes+.html" id="btn-populares" class="btn btn-primary">Detalhes</a>
                </div>
            </div>
        </div>`;
    }
    divPopulares.innerHTML = texto;
}
let xhr = new XMLHttpRequest();
xhr.onload = exibePopulares;
xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
);
xhr.send();

addEventListener("load", exibePopulares);


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

xhr.onload = exibeCategorias;
xhr.open(
    "GET",
    `
    https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
);
xhr.send();

addEventListener("load", exibeNoticias);

function exibeNoticias() {
    let divCategorias = document.getElementById("Noticia");
    let texto = ` <div id="Noticias" class="container-fluid">
    <div class="row">
        <div class="col-12 col-xl-8">
            <h1 class="titulo5">Novidades</h1>`;

    let dados = JSON.parse(this.responseText);

    console.log(dados);

    for (i = 0; i < dados.genres.length; i++) {
        let categorias = dados.genres[i];

        console.log(categorias);

        texto =
            texto +
            `   
            <div class="d-md-flex">
            <img class="imagensfinais" src="imgs/noticiabatman.jpg">
            <a href="https://www.omelete.com.br/batman/danny-devito-collin-farrell-pinguim" style="text-decoration:none">
                <h1 class="titulontfinal">Danny DeVito elogia Pinguim de Colin Farrell, mas prefere Batman de Tim Burton</h1>
                <p class="paragrafontfinal">O astro Danny DeVito elogiou a atuação de Colin Farrell como Pinguim no Batman de Matt Reeves, mas disse que ainda prefere o filme de Tim Burton, Batman: O Retorno. "Sim eu fiz. Achei que Colin fez um ótimo trabalho”, disse
                    DeVito ao The Wrap. “Certamente um meio diferente. Eu acho que foi um Batman mais ousado, sério e gângster. Você tira o chapéu para qualquer um que fica sentado na cadeira de maquiagem por tanto tempo. Eu fiz isso com
                    o Pinguim e adorei.”
                    <br>
                    <br>
                    <button type="button" class="rounded-pill btn btn-primary btn-sm">Filmes</button>
                    <button type="button" class="rounded-pill btn btn-success btn-sm">Batman</button>
                    <button type="button" class="rounded-pill btn btn-danger btn-sm">Elogio</button>
                </p>

            </a>

        </div>
            `;
    }
    texto += ` `
    divCategorias.innerHTML = texto;
}

xhr.onload = exibeNoticias;
xhr.open(
    "GET",
    `
    https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
);
xhr.send();

addEventListener("load", exibeNoticias);
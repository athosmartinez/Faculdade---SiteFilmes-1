const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibeCarousel() {
    let divCarousel = document.getElementById("carouselExampleIndicators");
    let texto = ` <section class="main1">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> `;

    let dados = JSON.parse(this.responseText);
    console.log(dados);
    for (i = 0; i < 4; i++) {
        let carousel = dados.results[i];
        console.log(carousel);

        texto =
            texto +
            `<div id="carousel" class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-xl-6 col-md-12 col-lg-12">
                        <iframe class="videomain1" width="830" height="330" src="https://www.youtube.com/embed/YA_T5kar83Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div id="textomain1" class="col-xl-6 col-md-12 col-lg-12">
                        <h2>As aventuras de PI</h2>
                        <div class="textoPI">
                            <p><b>Sinopse:</b> Pi e sua família decidem ir para o Canadá depois de fechar o zoológico da família. A embarcação deles naufraga, e o jovem sobrevive junto com alguns animais, incluindo um temível tigre de Bengala, com
                                o qual desenvolve uma ligação.</p>
                            <p><b>Diretor:</b> Ang Lee | <b>Roteirista:</b> Yann Martel | <b>Estreia:</b> 2012</p>

                            <p><b>Elenco:</b> Suraj Sharma | Irrfan Khan | Tabu | Gautam Belur</p>
                            <p><b> Se você já assistei deixe sua avaliação:</b></p>
                        </div>
                        <div class="estrelas">
                            <input type="radio" id="cm_star-empty" name="fb" value="" checked/>
                            <label for="cm_star-1"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-1" name="fb" value="1" />
                            <label for="cm_star-2"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-2" name="fb" value="2" />
                            <label for="cm_star-3"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-3" name="fb" value="3" />
                            <label for="cm_star-4"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-4" name="fb" value="4" />
                            <label for="cm_star-5"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-5" name="fb" value="5" />
                        </div>
                    </div>
                </div>
            </div>
            
           `;
    }
    texto += ` <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class=" rounded-pill btn-dark danger carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class=" rounded-pill btn-dark danger carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button> 
    </div>
        </section> `
    divCarousel.innerHTML = texto;
}
const xhrCar = new XMLHttpRequest();
xhrCar.onload = exibeCarousel;
xhrCar.open(
    "GET",
    `https://api.themoviedb.org/3/movie/550/videos?api_key=${API_KEY}&language=pt-BR`
);
xhrCar.send();

document.addEventListener("load", exibeCarousel);
//DIVISAO
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
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
);
xhrPop.send();

document.addEventListener("load", exibePopulares);

//DIVISAO

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

function exibeCategorias() {
    let divCategorias = document.getElementById("categoriasmain2");
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
    "GET", `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
);
xhrCat.send();

document.addEventListener("load", exibeCategorias);
//DIVISAO
function exibeAvaliacoes() {
    let divAvaliacoes = document.getElementById("Avaliacoes");
    let texto = `<div class="row">
             `;

    let dados = JSON.parse(this.responseText);

    console.log(dados);

    for (i = 0; i < 3; i++) {
        let avaliacoes = dados.results[i];

        texto =
            texto +
            
            `
            
            <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6">
            <div class="card">
                <img class="card-img-top2" src="https://image.tmdb.org/t/p/w500/${avaliacoes.avatar_path}" alt="Imagem de capa do card">
                <div class="card-body">
                    <h5 class="card-title">${avaliacoes.author}</h5>
                    <div class="overflow-auto">
                    <a href="${avaliacoes.url}" style="text-decoration:none">
                    <p class="card-text">${avaliacoes.content}</p>
                    </a>
                   </div>
                   

                    <p class="card-text"><small class="text-muted"><b></b>Posted: ${avaliacoes.created_at}</small></p>
                </div>
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

//DIVISAO

function exibeEntrevistas() {
    let divEntrevistas = document.getElementById("entrevistas");
    let texto = `<div class="row"> `;

    let dados = JSON.parse(this.responseText);

    console.log(dados);

    for (i = 0; i < 3; i++) {
        let entrevistas = dados.results[i];

        texto =
            texto +
            `
            
            <div class="col-xl-8 col-md-12 col-xxl-4">
                <iframe class="videomain3" width="400" height="315" src="https://www.youtube.com/embed/1UqzCP2xK9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="entrevistas"><b>TITULO VIDEO</b></p>
                <p class="diretor"><b>Diretor: </b>Christopher Nolan | <b> Estreia: </b>2008</p>
            </div>
            
        
            `;
    }
    texto += ` `
    divEntrevistas.innerHTML = texto;
}
const xhrEnt = new XMLHttpRequest();
xhrEnt.onload = exibeEntrevistas;
xhrEnt.open(
    "GET",
    `    https://api.themoviedb.org/3/movie/550/videos?api_key=${API_KEY}&language=en-US`
);
xhrEnt.send();

document.addEventListener("load", exibeEntrevistas);
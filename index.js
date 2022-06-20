const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

const xhrCar = new XMLHttpRequest();
xhrCar.onload = carregaLancamentos;
xhrCar.open( "GET", `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
xhrCar.send();

async function carregaLancamentos() {
  const dados = JSON.parse(this.responseText);
  
  let i=0;
  while(i<3) {
    const filme = dados.results[i];

    const urlTrailer = await fetch(`https://api.themoviedb.org/3/movie/${filme.id}/videos?api_key=${API_KEY}&language=pt-BR`)
    .then((body) => body.json()).then((data) => { return data.results.length>0 ? data.results[0].key : null });

    const creditos = await carregaCreditos(filme.id);
   

    $('#filmesLancamento').append(
      `<div class="carousel-item pb-5 ${i==0 ? 'active' : ''}">
          <div>
              <div class="row">
                <iframe class="col-lg-5 col-md-6 col-12" width="560" height="350" src="https://www.youtube.com/embed/${urlTrailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  <div class="col-lg-7 col-md-6 col-12">
                      <h2 class="my-mb-0 my-3">${filme.title}</h2>
                      <p><b>Sinopse: </b>${filme.overview}</p>
                      <p><b>Diretor:</b> ${filterCrew(creditos[0].crew, 'Director')} | <b>Roteirista:</b> ${filterCrew(creditos[0].crew, 'Screenplay')} <p><b>Estreia:</b> ${filme.release_date} </p>

                      <p><b>Elenco:</b> ${filterCast(creditos[0].cast)}</p>
                  </div>
              </div>
          </div>
        </div>`);
    i++;
  }
}

//DIVISAO

function exibePopulares() {
  let divPopulares = document.getElementById("Populares");
  let texto = " ";

  let dados = JSON.parse(this.responseText);

  for (i = 0; i < 4; i++) {
    let populares = dados.results[i];

    texto =
      texto +
      `<div class="col-xl-3 col-md-6 col-lg-6 col-sm-6">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${populares.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${populares.title}</b> <br> <b>Data de lançamento:</b> ${populares.release_date}<br> <b>Nº de votos:</b> ${populares.vote_count} - <b>Avaliação:</b> ${populares.vote_average}</p>
                    <a href="detalhesmais.html?id=${populares.id}" id="btn-populares" class="btn btn-primary">Detalhes</a>
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


//DIVISAO
function exibeAvaliacoes() {
  let divAvaliacoes = document.getElementById("Avaliacoes");
  let texto = `<div class="row">
             `;

  let dados = JSON.parse(this.responseText);

  for (i = 0; i < 3; i++) {
    let avaliacoes = dados.results[i];

    texto =
      texto +
      `
            <div class="col-xl-4 col-md-6 col-lg-6 col-sm-6">
            <div class="card">
                <img class="card-img-top2" src="${avaliacoes.author_details.avatar_path.substr(
                  1
                )}" alt="Imagem de capa do card">
                <div class="card-body">
                    <h5 class="card-title">${avaliacoes.author}</h5>
                    <div class="overflow-auto">
                    <a href="${avaliacoes.url}" target="_blank" style="text-decoration:none">
                    <p class="card-text">${avaliacoes.content}</p>
                    </a>
                   </div>
                    <p class="card-text"><small class="text-muted"><b></b>Posted: ${
                      avaliacoes.created_at
                    }</small></p>
                </div>
            </div>
        </div>
            `;
  }
  texto += ` `;
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


  for (i = 0; i < 3; i++) {
    let entrevistas = dados.results[i];
    texto =
      texto +
      `
            <div class="col-xl-8 col-md-12 col-xxl-4">
                <iframe class="videomain3" width="400" height="315" src="https://www.youtube.com/embed/${entrevistas.key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="entrevistas"><b>${entrevistas.name}</b></p>
                <p class="diretor"><b></b> <b>Publicado em: ${entrevistas.published_at}</b></p>
            </div>
            `;
  }
  texto += ` `;
  divEntrevistas.innerHTML = texto;
}
const xhrEnt = new XMLHttpRequest();
xhrEnt.onload = exibeEntrevistas;
xhrEnt.open(
  "GET",
  `    https://api.themoviedb.org/3/movie/338953/videos?api_key=${API_KEY}&language=en-US`
);
xhrEnt.send();

document.addEventListener("load", exibeEntrevistas);

async function carregaCreditos(idFilme) {
  const credits = [];
  await $.ajax(`https://api.themoviedb.org/3/movie/${idFilme}/credits?api_key=${API_KEY}&language=pt-BR`)
  .then((data) => { credits.push(data) });
  return credits;
}

function filterCrew(list, filter) {
  let result = "";
  list.map((c) => { if(c.job == filter) result += result.length>0 ? ", "+c.name : c.name });
  return result;
}

function filterCast(list) {
  let result = "";
  list.map((c) => { if(c.order <7) result += result.length>0 ? ", "+c.name : c.name });
  return result;
}
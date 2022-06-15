const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibeCategorias() {
    let divCategorias = document.getElementById("categoriasmain2");
    let texto = `<select id="Categorias" class="form-select" aria-label="Default select example">
      <option selected>CATEGORIAS: Todos</option>`;
  
    let dados = JSON.parse(this.responseText);
  
    for (i = 0; i < dados.genres.length; i++) {
      let categorias = dados.genres[i];
  
      texto =
        texto +
        `
              <option value="${categorias.id}">${categorias.name}</option>
              `;
    }
    texto += `</select>`;
    divCategorias.innerHTML = texto;
  }
  
  const xhrCat = new XMLHttpRequest();
  xhrCat.onload = exibeCategorias;
  xhrCat.open(
    "GET",
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
  );
  xhrCat.send();
  
  document.addEventListener("load", exibeCategorias);


//DIVISAO

function exibeDetalhes() {
    let divDetalhes = document.getElementById("Detalhes");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let detalhes = dados.results[i];

        texto =
            texto +
            `
       
                <div class="col-xl-6 col-md-12 col-lg-8 col-sm-12">
                    <div class="card border-white mb-3" style="max-width: 680px;">
                        <div class="row">
                            <div class="">
                                <img src="https://image.tmdb.org/t/p/w500/${detalhes.backdrop_path}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="">
                                <div class="card-body">
                                    <h5 class="card-title">${detalhes.title}</h5>
                                    <p class="card-text"><b>Sinopse:</b> ${detalhes.overview}</p>
                                    <p><b>Popularidade:</b> ${detalhes.popularity}</p>
                                    <p><b>Nº de votos:</b> ${detalhes.vote_count} - <b>Avaliação:</b> ${detalhes.vote_average}</p>
                                    <p class="card-text"><small class="text-muted">Data lançamento: ${detalhes.release_date}</small></p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            `;
    }

    divDetalhes.innerHTML = texto;
}

let xhr = new XMLHttpRequest();
xhr.onload = exibeDetalhes;
xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
);
xhr.send();

addEventListener("load", exibeDetalhes);
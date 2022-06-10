const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibeDetalhesP() {
    let divDetalhes = document.getElementById("Detalhes+");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 1; i++) {
        let detalhes = dados.results[i];

        texto =
            texto +
            `
            <div class="col-xl-4 col-md-12 col-lg-12 col-sm-12">
            <div class="card mb-3" style="max-width: 500px;">
                <div class="row">
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w500/${detalhes.poster_path}" class="img-fluid rounded-start" alt="...">
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
        
            `;
    }

    divDetalhes.innerHTML = texto;
}

let xhr = new XMLHttpRequest();
xhr.onload = exibeDetalhesP;
xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
);
xhr.send();

addEventListener("load", exibeDetalhesP);
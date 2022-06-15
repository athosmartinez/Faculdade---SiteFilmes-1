const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibeDetalhesP() {
    let divDetalhes = document.getElementById("Detalhesmais");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    console.log(dados);

    texto =
        texto +
        `
            <div class="col-xl-4 col-md-12 col-lg-12 col-sm-12">
            <div class="card mb-3" style="max-width: 500px;">
                <div class="row">
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w500/${dados.poster_path}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="">
                        <div class="card-body">
                        <h5 class="card-title">${dados.title}</h5>
                        <p class="card-text"><b>Sinopse:</b> ${dados.overview}</p>
                        <p><b>Popularidade:</b> ${dados.popularity}</p>
                        <p><b>Nº de votos:</b> ${dados.vote_count} - <b>Avaliação:</b> ${dados.vote_average}</p>
                        <p class="card-text"><small class="text-muted">Data lançamento: ${dados.release_date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            `;

    divDetalhes.innerHTML = texto;
}
let idMovie = new URL(window.location.href).searchParams.get("id");
console.log(idMovie);

let xhr = new XMLHttpRequest();
xhr.onload = exibeDetalhesP;
xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=pt-BR`
);
xhr.send();

addEventListener("load", exibeDetalhesP);
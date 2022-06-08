const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibePopulares() {
    let divPopulares = document.getElementById("Populares");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let populares = dados.results[i];

        texto =
            texto +
            `
            <div class="col-xl-3 col-md-6 col-lg-6 col-sm-6">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${populares.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${populares.title}</b> <br> <b>Data de lançamento:</b> ${populares.release_date}<br> <b>Nº de votos:</b> ${populares.vote_count} - <b>Avaliação:</b> ${populares.vote_average}</p>
                    <a href="detalhes.html" id="btn-populares" class="btn btn-primary">Detalhes</a>
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
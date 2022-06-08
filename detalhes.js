const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

function exibeDetalhes() {
    let divDetalhes = document.getElementById("Detalhes");
    let texto = " ";

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.results.length; i++) {
        let detalhes = dados.results[i];

        texto =
            texto +
            `
            <div class="col-xl-3 col-md-6 col-lg-6 col-sm-6">
            <div class="card" style="width: 18rem;">
                <img src="https://image.tmdb.org/t/p/w500/${detalhes.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${detalhes.title}</b> <br> <b>Data de lançamento:</b> ${detalhes.release_date}<br> <b>Nº de votos:</b> ${detalhes.vote_count} - <b>Avaliação:</b> ${detalhes.vote_average} - </p>
                    <a href="detalhes.html" id="btn-populares" class="btn btn-primary">Detalhes</a>
                </div>
            </div>
        </div>`;
    }

    divDetalhes.innerHTML = texto;
}



let xhr = new XMLHttpRequest();
xhr.onload = exibeDetalhes;
xhr.open(
    "GET",
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
);
xhr.send();

addEventListener("load", exibeDetalhes);
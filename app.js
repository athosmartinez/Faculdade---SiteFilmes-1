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
                <img src="${populares.poster_path}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text1"><b>${populares.title}</b> <br> Release date: ${populares.release_date}<br> Vote count: ${populares.vote_count}  - Rate: ${populares.vote_average}</b></p>
                    <a href="" id="btn-populares" class="btn btn-primary">Detalhes</a>
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
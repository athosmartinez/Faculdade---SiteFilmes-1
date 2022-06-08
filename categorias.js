const API_KEY = "4fcc4590f648e11f5b9030e8b5746e6e";

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
            <option value="1">${categorias.name}</option>
            <option value="2"></option>
            <option value="3"></option>
        
            `;
    }
    texto += `</select>`
    divCategorias.innerHTML = texto;
}

let xhr = new XMLHttpRequest();
xhr.onload = exibeCategorias;
xhr.open(
    "GET",
    `
    https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
);
xhr.send();

addEventListener("load", exibeCategorias);
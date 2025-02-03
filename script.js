const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`  // URL da API
    fetch(url)  // Fazendo a requisição
        .then((response) => response.json())  // Convertendo a resposta para JSON
        .then((result) => displayResults(result))  // Exibindo os resultados
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach((element) => {  // Iterando sobre os resultados
        artistName.innerText = element.name;  // Adicionando o nome do artista
        artistImage.src = element.urlImg;  // Adicionando a imagem do artista
    });

    resultArtist.classList.remove('hidden');  // Removendo a classe 'hidden' para mostrar o elemento
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');  // Adicioando a classe 'hidden' para esconder o elemento
        resultArtist.classList.remove('hidden');  // Removendo a classe 'hidden' para mostrar o elemento
        return;
    }
    
    requestApi(searchTerm);
})
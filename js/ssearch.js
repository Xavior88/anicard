const API_URL = 'https://api.jikan.moe/v4/seasons';
function getAnimeData(){
    const YEAR = document.getElementById('year').value;
    const SEASON = document.getElementById('season').value;

    fetch(`${API_URL}/${YEAR}/${SEASON}`)
    .then(response => response.json())
    .then(data => {
   data.data.forEach(item => {
const anime = item;
const imageUrl = item.images;
const aired = item.aired;
const broadcast = item.broadcast;
const genres = item.genres[0];
const animeDataDiv = document.createElement('div');
animeDataDiv.innerHTML = `
      <p></p>
        <img src ="${imageUrl.jpg.image_url}"><p></p>
        <text id="rcorners2"> ${anime.title}</text><br>
        <p>
        <b>Japanese Title:</b><text> ${anime.title_japanese}</text> <br>
        <b>Type and Source:</b><text> ${anime.type}, ${anime.source}</text> <br>
        <b>Synopsis:</b> <text>${anime.synopsis}</text><br>
        <b>Airing Timings and Dates:</b><text> ${broadcast.string},  ${aired.string}</text> <br>
        <b>Total Episodes:</b><text> ${anime.episodes}</text> <br>
        <b>Duration:</b><text> ${anime.duration}</text> <br>
        <b>Status:</b><text> ${anime.status}</text> <br>
        <b>Genre and Age Rating:</b><text> ${genres.name}, ${anime.rating}</text> <br>

      `;

document.getElementById('anime-data').appendChild(animeDataDiv);
})
});
}

document.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
clearcontent();
}
});    
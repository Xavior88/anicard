const API_URL = 'https://api.jikan.moe/v4';
    function getAnimeData() {
      const animeName = document.getElementById('anime-name').value;
      fetch(`${API_URL}/anime?q=${animeName}`)
        .then(response => response.json())
        .then(data => {
       data.data.forEach(item => {
    const anime = item;
    const imageUrl = item.images;
    const animeDataDiv = document.createElement('div');
    animeDataDiv.innerHTML = `
          <p></p>
            <img src ="${imageUrl.jpg.image_url}"><p></p>
            <b>Title:</b> <text> ${anime.title}</text><br>
            <b>Local Name:</b><text> ${anime.title_japanese}</text> <br>
            <b>Synopsis:</b> <text>${anime.synopsis}</text><br>
            <b>Type:</b><text> ${anime.type}</text> <br>
            <b>Total Episodes:</b><text> ${anime.episodes}</text> <br>
          
          `;

    document.getElementById('anime-data').appendChild(animeDataDiv);
    })
  });
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    getAnimeData();
  }
});

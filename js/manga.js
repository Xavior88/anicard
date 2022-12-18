const API_URL = 'https://api.jikan.moe/v4';
    function getAnimeData() {
      const animeName = document.getElementById('anime-name').value;
      fetch(`${API_URL}/manga?q=${animeName}`)
        .then(response => response.json())
        .then(data => {
       data.data.forEach(item => {
    const manga = item;
    const imageUrl = item.images;
    const broadcast = item.broadcast;
    const animeDataDiv = document.createElement('div');
    animeDataDiv.innerHTML = `
          <p></p>
            <img src ="${imageUrl.jpg.image_url}"><p></p>
             <text id="rcorners2"> ${manga.title}</text><br>
             <p>
            <b>Japanese Title:</b><text> ${manga.title_japanese}</text> <br>
            <b>Synopsis:</b> <text>${manga.synopsis}</text><br>
            <b>Total Chapters:</b><text> ${manga.chapters}</text> <br>
            <b>Total Volumes:</b><text> ${manga.volumes}</text> <br>
            <b>Status:</b><text> ${manga.status}</text> <br>

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

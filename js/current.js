    function getAnimeData() {
      fetch('https://api.jikan.moe/v4/seasons/now')
        .then(response => response.json())
        .then(data => {
       data.data.forEach(item => {
    const anime = item;
    const imageUrl = item.images;
    const broadcast = item.broadcast;
    const animeDataDiv = document.createElement('div');
    animeDataDiv.innerHTML = `
          <p></p>
            <img src ="${imageUrl.jpg.image_url}"><p></p>
            <text id="rcorners2"> ${anime.title}</text><br>
            <p>
            <b>Japanese Title:</b><text> ${anime.title_japanese}</text> <br>
            <b>Type and Source:</b><text> ${anime.type}, ${anime.source}</text> <br>
            <b>Synopsis:</b> <text>${anime.synopsis}</text><br>
            <b>Airing Timings:</b><text> ${broadcast.string}</text> <br>

          `;

    document.getElementById('anime-data').appendChild(animeDataDiv);
    })
  });
}

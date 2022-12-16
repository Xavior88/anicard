function getAnimeData() {
    fetch('https://api.jikan.moe/v4/top/anime')
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
          <b>Japanese Title:</b><text> ${anime.title_japanese}</text> <br>
          <b>Type and Source:</b><text> ${anime.type}, ${anime.source}</text> <br>
          <b>Synopsis:</b> <text>${anime.synopsis}</text><br>

        `;

  document.getElementById('anime-data').appendChild(animeDataDiv);
  })
});
}

function getAnimeData() {
  const query = document.getElementById('anime-name').value;
  fetch(`https://api.jikan.moe/v4/anime/${query}/full`)
    .then(response => response.json())
    .then(data => {
      const anime = data.data;
      const imageUrl = data.data.images;
      const trailer = data.data.trailer.embed_url;
      const animeDataDiv = document.createElement('div');
      animeDataDiv.innerHTML = `
      <p></p>
        <img height= 400 width = 280  src ="${imageUrl.jpg.image_url}">
        <H2> Trailer </H2>
        <iframe width="560" height="315" src="${trailer}&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <H2> Basic Info </H2>
        <p><b>Romaji Title:</b> ${anime.title}</p>
        <p><b>Japanese Title:</b> ${anime.title_japanese} <p>
        <p><b>English Title:</b> ${anime.title_english} <p>
        <p><b>Synopsis:</b> ${anime.synopsis}</p>
        <p><b>Type and Source:</b> ${anime.type}, ${anime.source}</p>
        <p><b>Season and Broadcast Timings:</b> ${anime.season} ${anime.year}, ${anime.broadcast.string}</p>
        <p><b>Total Episodes:</b> ${anime.episodes}</p>
        <p><b>Status:</b> ${anime.status}</p>
        <p><b>Studios:</b> ${anime.studios[0].name} </p>
        <p><b>Aired from and to:</b> ${anime.aired.prop.from.day}.${anime.aired.prop.from.month}.${anime.aired.prop.from.year} - ${anime.aired.prop.to.day}.${anime.aired.prop.to.month}.${anime.aired.prop.to.year} </p>
        <p><b>Duration:</b> ${anime.duration}</p>
        <p><b>Rank, Age Rating and Score:</b> ${anime.rank}, ${anime.rating}, ${anime.score}</p>
        <H2> Opening and Endings </H2>
        <h3> Openings </h3>
        ${anime.theme.openings} 
        <h3> Endings </h3>
        ${anime.theme.endings}

      `;
      
      document.getElementById('anime-data').appendChild(animeDataDiv);
  })
};


document.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
  clearcontent();
}
});
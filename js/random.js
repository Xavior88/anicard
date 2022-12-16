function getAnimeData() {
    fetch(`https://api.jikan.moe/v4/random/anime`)
      .then(response => response.json())
      .then(data => {
        const anime = data.data;
        const imageUrl = data.data.images;
        const animeDataDiv = document.createElement('div');
        animeDataDiv.innerHTML = `
        <p></p>
          <img src ="${imageUrl.jpg.image_url}">
          <p><b>Title:</b> ${anime.title}</p>
          <p><b>Local Name:</b> ${anime.title_japanese} <p>
          <p><b>Synopsis:</b> ${anime.synopsis}</p>
          <p><b>Type:</b> ${anime.type}</p>
          <p><b>Total Episodes:</b> ${anime.episodes}</p>
        `;
        
        document.getElementById('anime-data').appendChild(animeDataDiv);
      });
  }

const API_URL = 'https://api.jikan.moe/v4';
    function getAnimeData() {
      const charaName = document.getElementById('anime-name').value;
      fetch(`${API_URL}/characters?q=${charaName}`)
        .then(response => response.json())
        .then(data => {
       data.data.forEach(item => {
    const chara = item;
    const imageUrl = item.images;
    const animeDataDiv = document.createElement('div');
    animeDataDiv.innerHTML = `
          <p></p>
            <img src ="${imageUrl.jpg.image_url}"><p></p>
            <b>Character Name:</b> <text> ${chara.name}</text><br>
            <b>Japanese Name:</b><text> ${chara.name_kanji}</text> <br>
            <b>About:</b> <text>${chara.about}</text><br>

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

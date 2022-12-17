const API_URL = 'https://api.jikan.moe/v4';
    function getAnimeData() {
      const peopleName = document.getElementById('anime-name').value;
      fetch(`${API_URL}/people?q=${peopleName}`)
        .then(response => response.json())
        .then(data => {
       data.data.forEach(item => {
    const people = item;
    const imageUrl = item.images;
    const animeDataDiv = document.createElement('div');
    animeDataDiv.innerHTML = `
          <p></p>
            <img src ="${imageUrl.jpg.image_url}"><p></p>
            <b>Character Name:</b> <text> ${people.name}</text><br>
            <b>Given Name:</b><text> ${people.given_name}</text> <br>
            <b>Family Name:</b><text> ${people.family_name}</text> <br>
            <b>Birthday:</b> <text>${people.birthday}</text><br>
            <b>Website URL:</b> <text>${people.website_url}</text><br>
            <b>About:</b> <text>${people.about}</text><br>

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

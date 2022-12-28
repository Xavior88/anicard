function getData()
{
const url = document.getElementById('anime-name').value;
fetch(`https://api.trace.moe/search?anilistInfo&url=${url}`)
.then(response => response.json())
.then(data => {
data.result.forEach(item => {
const anime = item;
const title = item.anilist;
const anilist = item.anilist.id;
const getanimeF = item.from
const getanimefR = parseFloat(getanimeF)
const getanimefrom = (getanimefR/60).toFixed(2)
const getanimeT = item.to
const getanimett = parseFloat(getanimeT)
const getanimeto = (getanimett/60).toFixed(2)
const animeDataDiv = document.createElement('div');
animeDataDiv.innerHTML = `
<p></p>
<p>
<video width="500" height="300" controls autoplay muted>
  <source src="${anime.video}" controls preload="none" type="video/mp4"> </video> <p></p>
  <h1 id="jpfont"> <a href ="https://anilist.co/anime/${anilist}"> ${title.title.native} </a> </h1>
  <h2> ${title.title.romaji} </h2> 
<h2> Episode: ${anime.episode} </h2>
<h2> Duration: ${getanimefrom} - ${getanimeto} </h2>

<hr id="yes">
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
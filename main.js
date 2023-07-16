
function selectGenre(gn) {
  const generiFilm = document.getElementsByClassName('col');
  console.log(generiFilm);
  for (var i = 0; i < generiFilm.length; i++) {
    let cardGenre = generiFilm[i].getAttribute("data-genre");
    console.log(cardGenre);
    if (cardGenre !== gn) {
      generiFilm[i].classList.toggle("d-none");
    } 
  }
}









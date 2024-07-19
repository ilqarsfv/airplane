let round = document.getElementById("round");
let road = document.getElementById("road");
let sky = document.getElementById("sky");

round.onclick = () => {
  round.classList.toggle("move");
  road.classList.toggle("fadeIn");
  sky.classList.toggle("fadeIn");
  if (
    round.className != "move" &&
    sky.className != "fadeIn" &&
    road.className != "fadeIn"
  ) {
    round.classList.toggle("moveLeft");
    sky.classList.toggle("fadeOut");
    road.classList.toggle("fadeOut");
  }
};

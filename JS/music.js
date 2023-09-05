
const pages = document.getElementsByTagName("body")[0];
const page = document.getElementById("bgm");
const gamePage = document.getElementById("gameBgm");
const audio = document.getElementsByTagName("audio")[0];

if (page !== null) {
  page.addEventListener("click", function () {
    audio.volume = 0.05;
    audio.loop = true;
    audio.play();
  })
  page.oncontextmenu = function () {
    audio.pause();
    return false;
  }
} else {
  gamePage.addEventListener("click", function () {
    audio.volume = 0.01;
    audio.loop = true;
    audio.play();
  })
  gamePage.oncontextmenu = function () {
    audio.pause();
    return false;
  }
}

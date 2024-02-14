function clickBox() {
  const perspective = document.querySelector(".perspective");
  const box = document.querySelector(".box");

  perspective.addEventListener("click", (evt) => {
    box.style.animation = "rotate 15s linear infinite";

    const top1 = document.querySelector(".top-1");
    top1.style.animation = "open-1 1.5s linear both";

    const top2 = document.querySelector(".top-2");
    top2.style.animation = "open-2 1.5s linear both";
  });
}

function clickAlbum() {
  const album = document.querySelector(".album");
  const audio = document.getElementById("myboo");

  album.addEventListener("click", (evt) => {
    if (album.classList == "album paused") {
      album.animationPlayState = "running";
      album.classList = "album";
      audio.play();
    } else {
      album.classList = "album paused";
      audio.pause();
    }
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  clickBox();
  clickAlbum();
});

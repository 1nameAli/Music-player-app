let audio = new Audio("mera-dil-badal-de.mp3");
let playBtn = document.querySelector(".fa-play");
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else {
    audio.pause();
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
  }
});

let songs = ["mera-dil-badal-de.mp3", "mera-dil-badal-de.mp3", "mera-dil-badal-de.mp3"];
let currentSongIndex = 0;

document.querySelector(".fa-backward").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
});

document.querySelector(".fa-forward").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
});

const slider = document.querySelector(".progress-bar");

audio.addEventListener("timeupdate", () => {
  let percentage = (audio.currentTime / audio.duration) * 100;
  slider.style.width = `${percentage}%`;
});

const songName = document.getElementById("songName");

const updateSongInfo = () => {
  songName.textContent = songs[currentSongIndex].replace(".mp3", "");
};

audio.addEventListener("loadedmetadata", updateSongInfo);

audio.addEventListener("ended", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
});

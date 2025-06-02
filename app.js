// const open = document.getElementById("open");
// const close = document.getElementById("close");
// const modal = document.getElementById("modal_overlay");
// const body = document.body;

// open.addEventListener("click", () => {
//   modal.classList.remove("opacity-0", "pointer-events-none");
//   modal.classList.add("opacity-100", "pointer-events-auto");
//   body.classList.add("overflow-hidden"); // Scroll ni o'chirish
// });

// close.addEventListener("click", () => {
//   modal.classList.remove("opacity-100", "pointer-events-auto");
//   modal.classList.add("opacity-0", "pointer-events-none");
//   body.classList.remove("overflow-hidden"); // Scroll ni tiklash
// });

const container = document.querySelector(".container"),
  mainVideo = container.querySelector("video"),
  progressBar = container.querySelector(".progress-bar"),
  volumeBtn = container.querySelector(".volume i"),
  volumeSlider = container.querySelector(".left input"),
  skipBackward = container.querySelector(".skip-backward i"),
  skipForward = container.querySelector(".skip-forward i"),
  playPauseBtn = container.querySelector(".play-pause i"),
  speedBtn = container.querySelector(".playback-speed span"),
  speedOptions = container.querySelector(".speed-options");

mainVideo.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
});

volumeBtn.addEventListener("click", () => {
  if (!volumeBtn.classList.contains("fa-volume-high")) {
    mainVideo.volume = 0.5;
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    mainVideo.volume = 0.0;
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
});

volumeSlider.addEventListener("input", (e) => {
  mainVideo.volume = e.target.value;
  if (e.target.value == 0) {
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  } else {
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  }
});

speedBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  speedOptions.classList.toggle("show");
});

speedOptions.querySelectorAll("li").forEach((option) => {
  option.addEventListener("click", () => {
    mainVideo.playbackRate = parseFloat(option.dataset.speed);

    const currentActive = speedOptions.querySelector(".active");
    if (currentActive) currentActive.classList.remove("active");

    option.classList.add("active");
    speedOptions.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    speedOptions.classList.remove("show");
  }
});

skipBackward.addEventListener("click", () => {
  mainVideo.currentTime -= 5;
});

skipForward.addEventListener("click", () => {
  mainVideo.currentTime += 5;
});

playPauseBtn.addEventListener("click", () => {
  mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener("play", () => {
  playPauseBtn.classList.replace("fa-play", "fa-pause");
});

mainVideo.addEventListener("pause", () => {
  playPauseBtn.classList.replace("fa-pause", "fa-play");
});

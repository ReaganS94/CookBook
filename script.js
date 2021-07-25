const video = document.getElementById("videoBackground");
const btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

const initialVid = "./videos/video.mp4";
const grillVid = "./videos/grillmix.mp4";
const steakVid = "./videos/steak1.mp4";
const burgerVid = "./videos/burger2.mp4";
const steak = document.getElementById("steak1");
const burger = document.getElementById("burger1");
const grill = document.getElementById("grill1");

steak.addEventListener(
  "mouseover",
  () => {
    video.setAttribute("src", steakVid);
  },
  steak.addEventListener("mouseout", () => {
    video.setAttribute("src", initialVid);
  })
);

burger.addEventListener(
  "mouseover",
  () => {
    video.setAttribute("src", burgerVid);
  },
  burger.addEventListener("mouseout", () => {
    video.setAttribute("src", initialVid);
  })
);

grill.addEventListener(
  "mouseover",
  () => {
    video.setAttribute("src", grillVid);
  },
  grill.addEventListener("mouseout", () => {
    video.setAttribute("src", initialVid);
  })
);

window.onscroll = () => {
  scrollRotate();
};

scrollRotate = () => {
  let image = document.getElementById("reload");
  let image2 = document.getElementById("reload2");
  let image3 = document.getElementById("reload3");
  image.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
  image2.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
  image3.style.transform = "rotate(" + window.pageYOffset / 10 + "deg)";
};

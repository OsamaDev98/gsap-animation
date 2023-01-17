const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out", opacity: 0 },
});
const welcomeScreen = gsap.timeline({
  paused: "true",
});
tl.from(".load-title1", { x: "-50" });
tl.from(".load-title2", { x: "50" });
tl.from(".left-br", { x: "50" });
tl.from(".right-br", { x: "-50" });
tl.from("#loader", { scale: 0 });
tl.from("button", { scale: 0, y: 100 });
gsap.from(".container", { duration: 1, x: -50 });

// Loader
let id,
  i = 0;
const loader = () => {
  id = setInterval(frame, 45);
};
const frame = () => {
  if (i >= 100) {
    clearInterval(id);
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = `${i}%`;
    document.querySelector(".child").style.width = `${i}%`;
  }
};
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  loader();
});
// Welcome Screen
welcomeScreen.to(".loading-screen", { duration: 1.5, y: -2000 });
welcomeScreen.from(".title1", { duration: 1, x: -20, opacity: 0 });
welcomeScreen.from(".title2", { duration: 1, x: 20, opacity: 0 });

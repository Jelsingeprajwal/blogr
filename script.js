const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");
const dd1 = document.querySelector(".dd1");
const dd2 = document.querySelector(".dd2");
const dd3 = document.querySelector(".dd3");
const ni1 = document.querySelector(".ni1");
const ni2 = document.querySelector(".ni2");
const ni3 = document.querySelector(".ni3");
const navItem = document.querySelectorAll(".nav-item");
menu.addEventListener("click", () => {
  navBar.classList.toggle("slide");
});

// ni1.addEventListener("click", () => {
//   dd1.classList.toggle("show");
// });
// ni2.addEventListener("click", () => {
//   dd2.classList.toggle("show");
// });
// ni3.addEventListener("click", () => {
//   dd3.classList.toggle("show");
// });
ni1.addEventListener("mouseover", () => {
  dd1.classList.add("show");
});
ni2.addEventListener("mouseover", () => {
  dd2.classList.add("show");
});
ni3.addEventListener("mouseover", () => {
  dd3.classList.add("show");
});
ni1.addEventListener("mouseout", () => {
  dd1.classList.remove("show");
});
ni2.addEventListener("mouseout", () => {
  dd2.classList.remove("show");
});
ni3.addEventListener("mouseout", () => {
  dd3.classList.remove("show");
});

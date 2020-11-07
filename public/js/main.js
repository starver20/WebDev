const backdrop = document.querySelector(".backdrop");
const sideDrawer = document.querySelector(".mobile-nav");
const menuToggle = document.querySelector("#side-menu-toggle");

function onClickOrder() {
  btn.style.display = "none";
  sideDrawer.classList.remove("open");
}

function menuToggleClickHandler() {
  btn.style.display = "block";
  sideDrawer.classList.add("open");
}

btn.addEventListener("click", onClickOrder);
menuToggle.addEventListener("click", menuToggleClickHandler);

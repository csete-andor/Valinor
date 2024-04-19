let IsMenuOpen = false;
let menu = document.getElementById("menu");
let menuItems = document.getElementById("menuItems");
document.getElementById("menu").addEventListener("click", menuClicked);
function menuClicked() {
  if (IsMenuOpen == true) {
    IsMenuOpen = false;
    menu.style.backgroundImage = "url(/code/images/menu.open.svg)";
    menuItems.classList.remove("open")
    document.body.style.overflow = "scroll";
  } else {
    IsMenuOpen = true;
    menuItems.classList.add("open")
    menu.style.backgroundImage = "url(/code/images/menu.closed.svg)";
    document.body.style.overflow = "hidden";
  }
}
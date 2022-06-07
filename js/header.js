const menu = document.querySelector (".menu-btn")
const bars = document.querySelector (".bars")
const dropdown = document.querySelector (".dropdown-header")
const links = document.querySelectorAll (".links")
const mediaLinks = document.querySelectorAll (".media-links")

menu.onclick = function (){
    links.forEach(link => {
        link.classList.toggle ("toggled");
    });
    mediaLinks.forEach(mediaLink => {
        mediaLink.classList.toggle ("toggled");
    });
  bars.classList.toggle ("toggled");
  dropdown.classList.toggle ("dropdown-open");
}


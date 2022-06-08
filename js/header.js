const menu = document.querySelector (".menu-btn")
const bars = document.querySelector (".bars")
const dropdown = document.querySelector (".dropdown-header")
const links = document.querySelectorAll (".links")
const mediaLinks = document.querySelectorAll (".media-links")
const header = document.querySelector("#header")

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

function removeNav(){
    dropdown.classList.toggle ("dropdown-open")
    bars.classList.toggle ("toggled")
    links.forEach(link => {
        link.classList.toggle ("toggled");
    });
    mediaLinks.forEach(mediaLink => {
        mediaLink.classList.toggle ("toggled");
    });
}



//const scrollContainer = document.querySelector(".scroll-container")
// console.log(scrollContainer);
// let lastScrollTop = 80;
// window.addEventListener("scroll", event => {
    
//     console.log(event);


//     // let scrollTop = scrollContainer.pageYOffset;
//     // console.log(scrollTop);
//     // if (scrollTop > lastScrollTop){
//     //     header.style.top ="-80px";
//     // } else {
//     //     header.style.top = "0px"
//     // }
// })
window.sr = ScrollReveal();
var isOpenNav = false
function openAndCloseNav() {
    let navSlide = document.getElementById("navSlide");
    if (!isOpenNav) {
        navSlide.classList.add("open"); 
        isOpenNav = true;
    } else {
        navSlide.classList.remove("open"); 
        isOpenNav = false;
    }
}

var isOpen = false;
function navOpenAndClose(){
    let colors = document.getElementById('coloresCarteras')
    if(isOpen == false){
        let scrollHeight = colors.scrollHeight; // Obtenemos la altura completa del contenido
        colors.style.height = scrollHeight + 'px';
        isOpen = true
    }else{
        colors.style.height = '0'
        isOpen = false
    }
} 
function apearAndDesapper(showid, hideid1, hideid2){
    let show = document.getElementById(`${showid}`);
    let hide1 = document.getElementById(`${hideid1}`);
    let hide2 = document.getElementById(`${hideid2}`);

    animateContainer(showid)
    show.style.display = "grid";
    hide1.style.display = "none";
    hide2.style.display = "none";
    
}

function animateContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.style.opacity = 0;
    container.style.transform = "translateX(-100px)";
    container.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = "translateX(0)";
    }, 50); 
}



sr.reveal(".cuerpoVista",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
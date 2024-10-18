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


    show.style.display = "grid";
    hide1.style.display = "none";
    hide2.style.display = "none";
    
}


sr.reveal(".portada",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
sr.reveal(".botones",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
sr.reveal(".botonColores",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
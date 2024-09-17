window.sr = ScrollReveal();
var isOpenNav = false
function openAndCloseNav(){
   let navSlide = document.getElementById("navSlide")
    if (isOpenNav == false){
        navSlide.style.display = "flex"
        isOpenNav  = true
    } else if(isOpenNav  == true){
        navSlide.style.display = "none"
        isOpenNav  = false
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
function appearBags(){
    let carteras = document.getElementById("carteras")
    let accesorios = document.getElementById("accesorios")
    carteras.style.display = "grid" 
    accesorios.style.display = "none"
}
function appearAccesories(){
    let carteras = document.getElementById("carteras")
    let accesorios = document.getElementById("accesorios")
    carteras.style.display = "none"
    accesorios.style.display = "grid"
}
sr.reveal(".tarjeta",{
    duration: 2000, 
    origin: "bottom",
    distance: "150px",
    reset: true
})
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
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

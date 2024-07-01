var isOpen = false
function openAndCloseNav(){
   let navSlide = document.getElementById("navSlide")
    if (isOpen == false){
        navSlide.style.display = "flex"
        isOpen = true
    } else if(isOpen == true){
        navSlide.style.display = "none"
        isOpen = false
    }
}
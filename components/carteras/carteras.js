
var isOpen = false;
function navOpenAndClose(){
    let colors = document.getElementById('coloresCarteras')
    if(isOpen == false){
        colors.style.height = 'fit-content'
        isOpen = true
    }else{
        colors.style.height = '0'
        isOpen = false
    }
}
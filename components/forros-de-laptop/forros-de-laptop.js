window.sr = ScrollReveal()

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

function getTimeAndDoSomething(){
    const navidadNav = document.getElementById('Navidad')

    const ramadanNav = document.getElementById('Ramadan')

    const sanValentinNav = document.getElementById('SanValentin')

    const diaMadresNav = document.getElementById('DiaMadres')
    
    const dianMujeresNav = document.getElementById('DiaMujeres')

    const diaFloresAmarrillasNav = document.getElementById('DiaFloresAmarrillas')


    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1


    ramadanNav.style.display = 'none';
    sanValentinNav.style.display = 'none';
    diaMadresNav.style.display = 'none';
    dianMujeresNav.style.display = 'none';
    diaFloresAmarrillasNav.style.display = 'none';
    navidadNav.style.display = 'none';

    if(mesActual >= 10 && mesActual < 12 ){
        navidadNav.style.display = 'flex'
    }

    if(mesActual >= 2 && mesActual < 3 ){
        ramadanNav.style.display = 'flex';
    }

    if(mesActual >= 1 && mesActual < 2 ){
        sanValentinCat.style.display = 'flex';
    }

    if(mesActual >= 4 && mesActual < 5 ){
        diaMadresNav.style.display = 'flex';
    }

    if(mesActual >= 2 && mesActual < 3 ){
        dianMujeresNav.style.display = 'flex';
    }

    if(mesActual == 3 || mesActual < 9 ){
        diaFloresAmarrillasNav.style.display = 'flex';
    }
}

getTimeAndDoSomething()

sr.reveal(".cuerpoVista",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
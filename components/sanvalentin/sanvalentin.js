window.sr = ScrollReveal();

var isOpen = false;
function navOpenAndClose(){
    let colors = document.getElementById('coloresFlores')
    if(isOpen == false){
        let scrollHeight = colors.scrollHeight; // Obtenemos la altura completa del contenido
        colors.style.height = scrollHeight + 'px';
        isOpen = true
    }else{
        colors.style.height = '0'
        isOpen = false
    }
} 


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

function apearAndDesapper(showid, hideid1, hideid2, hideid3){
    let show = document.getElementById(`${showid}`);
    let hide1 = document.getElementById(`${hideid1}`);
    

    animateContainer(showid)

    show.style.display = "grid";

    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none"
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

window.sr = ScrollReveal();

let isOpenNav = false;

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

function getTimeAndDoSomething(){
    const navidadNav = document.getElementById('Navidad')
    const navidadCat = document.getElementById('catalogoNavidad')

    const ramadanNav = document.getElementById('Ramadan')
    const ramadanCat = document.getElementById('ramadanCatalogo')

    const sanValentinNav = document.getElementById('SanValentin')
    const sanValentinCat = document.getElementById('sanValentinCatalogo')

    const diaMadresNav = document.getElementById('DiaMadres')
    const madresCat = document.getElementById('diaDeLasMadresCatalogo')
    
    const dianMujeresNav = document.getElementById('DiaMujeres')
    const mujerCat = document.getElementById('diaDeLaMujerCatalogo')

    const diaFloresAmarrillasNav = document.getElementById('DiaFloresAmarrillas')
    const floresAmarrillasCat = document.getElementById('diaFloresAmarrillasCatalogo')


    const fecha = new Date();
    const mesActual = fecha.getMonth() + 1


    ramadanNav.style.display = 'none';
    ramadanCat.style.display = 'none';
    sanValentinCat.style.display = 'none';
    sanValentinNav.style.display = 'none';
    diaMadresNav.style.display = 'none';
    madresCat.style.display = 'none';
    dianMujeresNav.style.display = 'none';
    mujerCat.style.display = 'none';
    diaFloresAmarrillasNav.style.display = 'none';
    floresAmarrillasCat.style.display = 'none';
    navidadCat.style.display = 'none';
    navidadNav.style.display = 'none';



    if(mesActual >= 10 && mesActual < 1 ){
        navidadCat.style.display = 'flex'
        navidadNav.style.display = 'flex'
    }

    if(mesActual >= 2 && mesActual < 4 ){
        ramadanNav.style.display = 'flex';
        ramadanCat.style.display = 'flex';
    }

    if(mesActual >= 1 && mesActual < 3 ){
        sanValentinCat.style.display = 'flex';
        sanValentinNav.style.display = 'flex';
    }

    if(mesActual >= 4 && mesActual < 6 ){
        diaMadresNav.style.display = 'flex';
        madresCat.style.display = 'flex';
    }

    if(mesActual >= 2 && mesActual < 4 ){
        dianMujeresNav.style.display = 'flex';
        mujerCat.style.display = 'flex';
    }

    if(mesActual == 3 || mesActual < 10 ){
        diaFloresAmarrillasNav.style.display = 'flex';
        floresAmarrillasCat.style.display = 'flex';
    }
}

getTimeAndDoSomething()

sr.reveal(".carrusel",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})
sr.reveal(".catalogo",{
    duration: 2000, 
    origin: "left",
    distance: "150px",
    reset: true
})

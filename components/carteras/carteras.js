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
function apearAndDesapper(...categorias) {
    const [mostrarId, ...ocultarIds] = categorias;

    const mostrar = document.getElementById(mostrarId);
    if (mostrar) {
        animateContainer(mostrarId);
        mostrar.style.display = "grid";
    }

    ocultarIds.forEach(id => {
        const ocultar = document.getElementById(id);
        if (ocultar) {
            ocultar.style.display = "none";
        }
    });
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
    reset: false
})

fetch('./../../productos/carteras.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(productos => {
        const categorias = []
        const contenedorCategorias = document.getElementById("botones");
        productos.forEach(producto => {

            if (!categorias.includes(producto.categoria)) {
                categorias.push(producto.categoria)
            }

            const contenedor = document.getElementById(producto.categoria);


            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");
            const descripcionHTML = producto.descripcion
                ? `<h2>${producto.descripcion}</h2>`
                : '';

            tarjeta.innerHTML = `
        <img src="${producto.img}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        ${descripcionHTML}
        <h3>${producto.precio}</h3>
      `;

            contenedor.appendChild(tarjeta);
        });

        categorias.forEach((cat, index) => {
            const contenedor = document.getElementById(cat);
            contenedor.style.display = index === 0 ? "grid" : "none"; 
        });


        categorias.forEach((categoriaSeleccionada) => {
            const otrasCategorias = categorias.filter(c => c !== categoriaSeleccionada);
            const argumentos = [categoriaSeleccionada, ...otrasCategorias]
                .map(cat => `'${cat}'`)
                .join(", ");

            const boton = document.createElement("button");
            boton.textContent = categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1);
            boton.setAttribute("onclick", `apearAndDesapper(${argumentos})`);
            contenedorCategorias.appendChild(boton);
        });

    })
    .catch(error => {
        console.error('Hubo un problema con la carga del JSON:', error);
    });
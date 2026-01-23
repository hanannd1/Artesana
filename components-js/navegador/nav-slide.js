class NavSlide extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isOpen = false;
    }

    connectedCallback() {
        this.render();

        // Botón hamburguesa de la barra superior
        this.shadowRoot
            .querySelector(".boton")
            .addEventListener("click", () => this.toggleNav());

        // Botón hamburguesa dentro del menú lateral
        this.shadowRoot
            .querySelector(".botonNav")
            .addEventListener("click", () => this.toggleNav());
    }

    toggleNav() {
        const nav = this.shadowRoot.querySelector(".navSlide");
        nav.classList.toggle("open");
        this.isOpen = !this.isOpen;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* ====== BARRA SUPERIOR ====== */

                .navegador {
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                    background-color: #fcdfd4;
                    padding: 10px;
;
                }

                .boton {
                    background-color: #fcdfd4;
                    cursor: pointer;
                    border: none;
                }

                .imagen {
                    width: 36px;
                }

                .cajatitulo {
                    text-decoration: none;
                }

                .logotipo {
                    color: #5c2c59;
                    margin: 0;
                }

                .cajainvisible {
                    width: 36px;
                }

                /* ====== NAV SLIDE ====== */
                .navSlide {
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fcdfd4;
    position: fixed;

    top: 0;              /* ← AÑADE SOLO ESTO */
    height: 100vh;

    z-index: 1200;
    padding: 10px 30px 10px 10px;
    gap: 15px;
    border-right: 5px #5c2c59 solid;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.80));
    flex-direction: column;

    left: -300px;
    width: 300px;
    transition: transform 0.3s ease-in-out;
}


                .navSlide.open {
                    transform: translateX(300px);
                }

                .botonNav img {
                    width: 36px;
                    cursor: pointer;
                }

                .categoriasMenu {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .categoriasMenu a {
                    text-decoration: none;
                    color: #5c2c59;
                    font-size: 22px;
                    font-weight: 800;
                }

                .iconWaAndIn {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }

                .icono-enlace-nav {
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                }
            </style>

            <!-- ====== BARRA SUPERIOR ====== -->
            <div class="barra-espaciadora"></div>
            <div class="navegador">
                <div class="menu">
                    <button class="boton">
                        <img class="imagen" src="./../../assets/simbolo-de-lista-de-tres-elementos-con-puntos.png">
                    </button>
                </div>

                <a href="./../../index.html" class="cajatitulo">
                    <h2 class="logotipo">ARTESANA</h2>
                </a>

                <div class="cajainvisible"></div>
            </div>

            <!-- ====== MENU LATERAL ====== -->
            <nav class="navSlide">
                <div class="botonNav">
                    <img src="./../../assets/simbolo-de-lista-de-tres-elementos-con-puntos.png" alt="">
                </div>

                <div class="categoriasMenu">
                    <a href="./../carteras/carteras.html">Carteras</a>
                    <a href="./../flores/flores.html">Flores</a>
                    <a href="./../tejidosbebe/tejidosbebe.html">Tejidos de bebé</a>
                    <a href="./../llaveros/llaveros.html">Llaveros</a>
                    <a href="./../sanvalentin/sanvalentin.html">San valentin</a>
                    <div class="iconWaAndIn">
                        <a href="https://wa.link/76fgft">
                            <img class="icono-enlace-nav" src="./../../assets/icono-whatsapp.png">
                        </a>
                        <a href="https://www.instagram.com/artesana.mcbo">
                            <img class="icono-enlace-nav" src="./../../assets/icono-instagram.png">
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-slide", NavSlide);

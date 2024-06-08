import React from 'react';

const GaleriaPage = (props) => {
    return(
        <main class="container">
        <section id="galeria">
            <div class="row">
                <div class="col-12 text-center mb-4">
                    <h2>Galería</h2>
                    <p class="lead">Descubre nuestras instalaciones y productos a través de nuestra galería.</p>
                </div>
            </div>
            <div>
                <div>
                    <h3 class="mb-3">Fotos del Local</h3>
                    <div class="galeria">
                        <img src="img/local-1.jpeg" alt=""/>
                        <img src="img/local-2.jpg" alt=""/>
                        <img src="img/local-3.jpg" alt=""/>
                        <img src="img/local-4.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 class="mb-3">Fotos de los Productos</h3>
                    <div class="galeria">
                        <img src="img/ropa-1.webp" alt=""/>
                        <img src="img/ropa-2.jpg" alt=""/>
                        <img src="img/ropa-3.webp" alt=""/>
                        <img src="img/ropa-4.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default GaleriaPage;
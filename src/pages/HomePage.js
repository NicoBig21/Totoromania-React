import React from 'react';

const HomePage = (props) => {
    return(
    <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <h2>Bienvenidos a TotoroMania</h2>
                    <p>
                        TotoroMania es el paraíso para los amantes de la ternura y la calidez. Sumérgete en un mundo donde los peluches más adorables y la mejor ropa de lana tejida se unen para ofrecerte una experiencia única. En nuestro extenso catálogo, encontrarás desde los clásicos personajes de la infancia hasta las últimas tendencias en peluches, cada uno cuidadosamente seleccionado para brindarte momentos de felicidad y nostalgia.
                    </p>
                    <p>
                        Pero la magia de TotoroMania no se detiene en los peluches. Nuestra colección de ropa de lana tejida es una celebración de la comodidad y el estilo. Desde suéteres y bufandas hasta gorros y calcetines, cada prenda está diseñada con amor y con los materiales más suaves para mantener tu cuerpo abrigado y tu espíritu feliz. En TotoroMania, nos esforzamos por brindarte una experiencia de compra excepcional, desde la navegación en nuestro sitio web hasta la entrega de tu pedido en la puerta de tu hogar. ¡Descubre la magia de TotoroMania y encuentra tu próxima pieza favorita hoy mismo!
                    </p>
                    <a href="nosotros.html" class="btn-custom">Nosotros</a>
                </div>                
                <div class="col-md-6">
                    <img src="img/afiche-promocional.jpg" class="img-fluid img-border" alt="Peluches"/>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <img src="img/ropa.jpg" class="card-img-top" alt="Ropa de lana"/>
                        <div class="card-body">
                            <h5 class="card-title">Ropa de lana tejida</h5>
                            <p class="card-text">Descubre nuestra colección de ropa de lana tejida, perfecta para mantenerte abrigado y con estilo en cualquier ocasión.</p>
                            <a href="galeria.html" class="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="img/peluche.jpg" class="card-img-top" alt="Peluche"/>
                        <div class="card-body">
                            <h5 class="card-title">Peluches adorables</h5>
                            <p class="card-text">Explora nuestra selección de peluches de alta calidad, desde personajes clásicos hasta los más populares de hoy en día.</p>
                            <a href="galeria.html" class="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="img/accesorios.jpg" class="card-img-top" alt="Ropa de lana"/>
                        <div class="card-body">
                            <h5 class="card-title">Accesorios de lana</h5>
                            <p class="card-text">Lleva contigo el estilo y la calidez con nuestra exclusiva mochila de lana. Confeccionada con los materiales más suaves y cómodos.</p>
                            <a href="galeria.html" class="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;
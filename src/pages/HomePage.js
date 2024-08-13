import React from 'react';
import '../styles/components/pages/HomePage.css'; 

const HomePage = (props) => {
    return(
    <main>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Bienvenidos a TotoroMania</h2>
                    <p>
                        TotoroMania es el paraíso para los amantes de la ternura y la calidez. Sumérgete en un mundo donde los peluches más adorables y la mejor ropa de lana tejida se unen para ofrecerte una experiencia única. En nuestro extenso catálogo, encontrarás desde los clásicos personajes de la infancia hasta las últimas tendencias en peluches, cada uno cuidadosamente seleccionado para brindarte momentos de felicidad y nostalgia.
                    </p>
                    <p>
                        Pero la magia de TotoroMania no se detiene en los peluches. Nuestra colección de ropa de lana tejida es una celebración de la comodidad y el estilo. Desde suéteres y bufandas hasta gorros y calcetines, cada prenda está diseñada con amor y con los materiales más suaves para mantener tu cuerpo abrigado y tu espíritu feliz. En TotoroMania, nos esforzamos por brindarte una experiencia de compra excepcional, desde la navegación en nuestro sitio web hasta la entrega de tu pedido en la puerta de tu hogar. ¡Descubre la magia de TotoroMania y encuentra tu próxima pieza favorita hoy mismo!
                    </p>
                    <a href="nosotros" className="btn-custom">Nosotros</a>
                </div>                
                <div className="col-md-6">
                    <img src="/images/afiche-promocional.jpg" className="img-fluid img-border" alt="Peluches"/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/ropa.jpg" className="card-img-top" alt="Ropa de lana"/>
                        <div className="card-body">
                            <h5 className="card-title">Ropa de lana tejida</h5>
                            <p className="card-text">Descubre nuestra colección de ropa de lana tejida, perfecta para mantenerte abrigado y con estilo en cualquier ocasión.</p>
                            <a href="galeria" className="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/peluche.jpg" className="card-img-top" alt="Peluche"/>
                        <div className="card-body">
                            <h5 className="card-title">Peluches adorables</h5>
                            <p className="card-text">Explora nuestra selección de peluches de alta calidad, desde personajes clásicos hasta los más populares de hoy en día.</p>
                            <a href="galeria" className="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="/images/accesorios.jpg" className="card-img-top" alt="Ropa de lana"/>
                        <div className="card-body">
                            <h5 className="card-title">Accesorios de lana</h5>
                            <p className="card-text">Lleva contigo el estilo y la calidez con nuestra exclusiva mochila de lana. Confeccionada con los materiales más suaves y cómodos.</p>
                            <a href="galeria" className="btn-custom">Ver colección</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;
import React from 'react';
import '../styles/components/pages/Galeria.css'; 

const GaleriaPage = (props) => {
    return (
        <main className="container">
            <section id="galeria">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h2>Galería</h2>
                        <p className="lead">Descubre nuestras instalaciones y productos a través de nuestra galería.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="mb-3">Fotos del Local</h3>
                        <div className="galeria">
                            <img src="/images/local-1.jpeg" alt="Local 1"/>
                            <img src="/images/local-2.jpg" alt="Local 2"/>
                            <img src="/images/local-3.jpg" alt="Local 3"/>
                            <img src="/images/local-4.jpg" alt="Local 4"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="mb-3">Fotos de los Productos</h3>
                        <div className="galeria">
                            <img src="/images/ropa-1.webp" alt="Ropa 1"/>
                            <img src="/images/ropa-2.jpg" alt="Ropa 2"/>
                            <img src="/images/ropa-3.webp" alt="Ropa 3"/>
                            <img src="/images/ropa-4.jpg" alt="Ropa 4"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default GaleriaPage;

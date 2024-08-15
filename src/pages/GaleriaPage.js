import '../styles/components/pages/Galeria.css'; 

import Lista from '../components/Lista'; 

const lista1 = [
    '/images/local-1.jpeg',
    '/images/local-2.jpg',
    '/images/local-3.jpg',
    '/images/local-4.jpg'
];

const lista2 = [
    '/images/ropa-1.webp',
    '/images/ropa-2.jpg',
    '/images/ropa-3.webp',
    '/images/ropa-4.jpg'
];

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
                            <Lista elementos={lista1} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="mb-3">Fotos de los Productos</h3>
                        <div className="galeria">
                            <Lista elementos={lista2} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default GaleriaPage;

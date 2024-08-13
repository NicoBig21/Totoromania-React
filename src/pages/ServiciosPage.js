import React from 'react';

const ServiciosPage = (props) => {
    return(
    <main className="container">
        <section id="servicios" className="container">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2>Nuestros Servicios</h2>
                    <p className="lead">En TotoroMania ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Venta de Ropa Tejida</h5>
                            <p className="card-text">Explora nuestra colección de ropa tejida a mano, desde suéteres hasta bufandas, para mantenerte abrigado y con estilo.</p>
                        </div>
                        <img src="/images/ropa-tejida.jpg" className="card-img-bottom" alt="Venta de Ropa Tejida"/>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Atención al Cliente</h5>
                            <p className="card-text">¿Tienes algún problema con tu pedido? Nuestro equipo de atención al cliente está aquí para ayudarte con cualquier defecto o inconveniente.</p>
                        </div>
                        <img src="/images/atencion-cliente.jpg" className="card-img-bottom" alt="Atención al Cliente"/>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Productos Personalizados</h5>
                            <p className="card-text">¿Quieres algo único? Ofrecemos productos personalizados, desde juguetes para mascotas hasta regalos especiales hechos a medida.</p>
                        </div>
                        <img src="/images/juguete-personalizado.jpg" className="card-img-bottom" alt="Productos Personalizados"/>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Pedidos a Medida</h5>
                            <p className="card-text">Cuéntanos tu idea y nosotros la haremos realidad. Diseñamos y creamos productos a medida según tus especificaciones.</p>
                        </div>
                        <img src="/images/medida.jpg" className="card-img-bottom" alt="Pedidos a Medida"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default ServiciosPage;
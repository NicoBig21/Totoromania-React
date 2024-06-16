import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="container mt-5">
            <section className="mb-5">
                <div className="container">
                    <h2>Historia de Totoromania</h2>
                    <div className="row">
                        <div className="col-md-6 my-4">
                            <img src="/images/historia.jpg" className="img-fluid img-border" alt="Historia de Totoromania" />
                        </div>
                        <div className="col-md-6">
                            <p>Totoromania es más que una marca, es un emprendimiento familiar que ha ido creciendo poco a poco con el amor y la dedicación de generaciones. Desde nuestro modesto inicio en el pintoresco barrio de Villa Urquiza, hemos tejido nuestro camino con pasión y compromiso.</p>
                            <p>Nuestros productos son el resultado de esta pasión, destacándose por la calidad excepcional y la artesanía impecable que nos define. Cada pieza de Totoromania cuenta una historia de tradición y excelencia, reflejando nuestro profundo respeto por el arte del tejido y el cuidado del medio ambiente.</p>
                            <p>Después de años de éxito, enfrentamos desafíos que nos llevaron a cerrar nuestras puertas por un tiempo. Sin embargo, hace unos años, decidimos volver a abrir nuestras puertas con renovado entusiasmo y compromiso. Desde entonces, hemos estado experimentando un crecimiento emocionante y estamos emocionados de seguir compartiendo nuestra pasión por los tejidos y la belleza natural con nuestra comunidad.</p>
                            <p>En Totoromania, nos enorgullece ser parte de cada momento especial en la vida de nuestros clientes. Valoramos profundamente nuestras raíces familiares y nos esforzamos por crear productos que reflejen nuestros valores de calidad, artesanía y respeto por el medio ambiente. Esperamos seguir creciendo y compartiendo nuestra historia con todos ustedes.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mb-5">
                <h2>Quiénes somos</h2>
                <div className="row justify-content-center nosotros">
                    <div className="col-md-4">
                        <div className="card card-nosotros">
                            <img src="/images/gerente.jpg" className="card-img-top persona" alt="Tania Rodriguez"/>
                            <div className="card-body">
                                <h5 className="card-title">Tania Rodriguez</h5>
                                <p className="card-text">Gerente General</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nosotros">
                            <img src="/images/diseñadora.jpg" className="card-img-top persona" alt="María López"/>
                            <div className="card-body">
                                <h5 className="card-title">María López</h5>
                                <p className="card-text">Diseñadora Jefe</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nosotros">
                            <img src="/images/marketing.jpg" className="card-img-top persona" alt="Carlos Martínez"/>
                            <div className="card-body">
                                <h5 className="card-title">Carlos Martínez</h5>
                                <p className="card-text">Encargado de Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nosotros">
                            <img src="/images/calidad.jpg" className="card-img-top persona" alt="Ana Rodríguez"/>
                            <div className="card-body">
                                <h5 className="card-title">Ana Rodríguez</h5>
                                <p className="card-text">Especialista en Calidad</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-nosotros">
                            <img src="/images/analista.jpg" className="card-img-top persona" alt="Pedro Gómez"/>
                            <div className="card-body">
                                <h5 className="card-title">Pedro Gómez</h5>
                                <p className="card-text">Analista Financiero</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
            
            <section>
                <h2>Dónde encontrarnos</h2>
                <div className="row">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.765117693116!2d-58.38380008476901!3d-34.60505536846096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9f35c9a373%3A0x5d73b0d6ed94a29c!2sCalle%20Principal%2C%20N%C3%BAmero%20123%2C%20Ciudad%20Totoro!5e0!3m2!1sen!2sar!4v1642973722490!5m2!1sen!2sar" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="col-md-6">
                        <p>Nos puedes encontrar en Av. Triunvirato, 2016, en Villa Urquiza, Capital Federal.</p>
                        <p>Nuestro horario habitual es de lunes a viernes de 9:00 am a 6:00 pm.</p>
                    </div>
                </div>
            </section>        
        </main>
    );
}

export default NosotrosPage;

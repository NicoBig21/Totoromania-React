import React from 'react';
import '../styles/components/pages/ContactoPage.css'; // Asegúrate de ajustar la ruta según sea necesario

const ContactoPage = (props) => {
    return (
        <main className='container mt-5'>
            <div>
                <h2>Contacto Rápido</h2>
                <div className='contacto'>
                    <div className='col-md-6'>
                    <div className='imagen'>
                        <img src='/images/oso-cafe.webp' alt='Oso de peluche' className='img-fluid' />
                    </div>
                    </div>
                    <div className='col-md-6'>
                        <form className='formulario'>
                            <div className='mb-3'>
                                <label htmlFor='nombre' className='form-label'>Nombre</label>
                                <input type='text' className='form-control' id='nombre' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' className='form-control' id='email' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='telefono' className='form-label'>Teléfono</label>
                                <input type='tel' className='form-control' id='telefono' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='mensaje' className='form-label'>Mensaje</label>
                                <textarea className='form-control' id='mensaje' rows='3'></textarea>
                            </div>
                            <div className='acciones'>
                                <button type='submit' className='btn-custom'>Enviar</button>
                            </div>
                            <h2>Otras vías de comunicación</h2>
                            <p>También puede contactarse con nosotros usando los siguientes medios:</p>
                            <ul className='list-group'>
                                <li className='list-group-item'>Teléfono: 1145346576</li>
                                <li className='list-group-item'>Email: totoromania@mania.com.ar</li>
                                <li className='list-group-item'>Instagram: TotoroManiaOficial</li>
                                <li className='list-group-item'>Twitter: TotoMania</li>
                                <li className='list-group-item'>Facebook TotoroMania</li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;

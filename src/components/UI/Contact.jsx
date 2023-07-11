import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Entrar en contacto:</h2>
            <div className='md:flex justify-between items-center'>    
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                    <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113752.76824370881!2d-48.699385850264!3d-27.005697775332827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b65cc2e52aad%3A0x2dc004f5e6adebc4!2sBalneario%20Cambori%C3%BA%2C%20Santa%20Catarina!5e0!3m2!1ses!2sbr!4v1689007768115!5m2!1ses!2sbr" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                    <form className='w-full'>
                        <div className='mb-5'>
                            <input type="text" placeholder='Escribe tu nombre' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className='mb-5'>
                            <input type="email" placeholder='Escribe tu email' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className='mb-5'>
                            <input type="text" placeholder='Objetivo' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                        </div>
                        <div className='mb-5'>
                            <textarea type="text" rows={3} placeholder='Escribe tu mensaje aqui!' className='w-full p- focus:online-none rounded-[5px]'/>
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white hover:bg-darkColor hover:text-headingColor text-center ease-linear duration-150'>
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;
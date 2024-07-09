import React from 'react'
// Componente de contacto

const Contact = () => {
  return (
    <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Entrar en contacto:</h2>
            <div className='md:flex justify-between items-center'>    
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                    <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108962.47685911789!2d-64.58186547968764!3d-31.411993464160425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640d6777c71%3A0x75c24ab6cb121bed!2sVilla%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1718831403134!5m2!1ses!2sar" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
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
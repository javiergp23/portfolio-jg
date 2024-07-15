import React from 'react'
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import UiImg from '../../assets/images/design.png';
import appsImg from '../../assets/images/apps.png';

// services component

const Services = () => {
  return (
    <section id='services'> 
        <div className='container lg:pt-5'> 
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    Conocimientos y Tecnologias
                </h2>
                <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                Como desarrollador, puedo ayudarte a crear una presencia en línea atractiva y funcional, construyendo sitios web personalizados que impulsen tu negocio, mejoren la experiencia del usuario y generen resultados positivos.    
                </p>
            </div>
            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        {/*============== vertical line running through the middle =================*/}
                        <div className='hidden absolute w-1 sm:block bg-slate-300 h-full left-1/2 transform-translate-x-1/2'>
                        </div>
                        {/*============ left card ===========*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Desarrollo Frontend</h3>
                                            <p className='text-[15px] text-darkColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Diseño web, desarrollo de interfaces, optimización de rendimiento, experiencia de usuario, usabilidad, interactividad, maquetado, estilos, accesibilidad, responsive design.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/*============ right card ===========*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Desarrollo Backend</h3>
                                            <p className='text-[15px] text-darkColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Gestión de bases de datos, lógica de negocio, seguridad, almacenamiento de datos, procesamiento, API, servidores, escalabilidad, rendimiento, integración, administración de recursos, comunicación con el frontend..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/*============ left card ===========*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>UI/UX Design</h3>
                                            <p className='text-[15px] text-darkColor group-hover:text-white group-hover:font-[500] leading-7'>
                                            Investigación de usuarios, wireframing, diseño de interfaces, prototipado, pruebas de usabilidad, interacción de diseño, diseño visual, accesibilidad.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={UiImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/*============ right card ===========*/}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>AppsDevelopment</h3>
                                            <p className='text-[15px] text-darkColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                Programación, diseño de interfaces, optimización de rendimiento, depuración, pruebas, integración de API
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;
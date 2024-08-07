import React from 'react';
import HeroImg from '../../assets/images/hero.svg';
import CountUp from 'react-countup'
// hero component
const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/*============ Hero left  content =============*/}
                <div className="w-full md:basis-1/2">
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>Hola! Bienvenido!</h5> 
                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>Mi nombre es <strong className='text-smallTextColor'>J</strong>avier <strong className='text-smallTextColor'>G</strong>onzález <br />Desarrollador de Software</h1>
                    <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay="200" className='flex items-center gap-6 mt-7'>
                        <a href="#contact">
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:text-headingColor hover:bg-darkColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-line">Contratame</i> </button>                            
                        </a>
                        <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>Mirar mi Portfolio</a>
                    </div>
                    <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                        <span><i class="ri-apps-2-line"></i></span>
                        Apasionado desarrollador web creando soluciones digitales creativas y funcionales para impulsar experiencias en línea excepcionales!.
                    </p>                    
                    <div className='flex items-center gap-9 mt-14'>
                        <span className='text-smallTextColor text-[15px] font-[600]'>Sigueme:</span>
                        <span>
                            <a href="https://github.com/javiergp23/javiergp23" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-github-fill"></i></a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/javiergonzalez23" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-linkedin-box-fill"></i></a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/javiergp23/" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-instagram-line"></i></a>
                        </span>
                    </div>
                </div>
                {/*============ Hero left end =============*/}
                {/*============ Hero IMG =============*/}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={HeroImg} alt="" />
                    </figure>
                </div>
                {/*============ Hero end =============*/}
                {/*============ Hero Content =============*/}
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={2} duration={6} suffix="+"/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Años de Experiencia
                        </h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={6} suffix="%"/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Tasa de Éxito
                        </h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={150} duration={6} suffix="+"/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Clientes Felices
                        </h4>
                    </div>
                    <div className="md-10">
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={160} duration={6} suffix="+"/>
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[18px]'>
                            Proyectos Completados
                        </h4>
                    </div>
                </div>
                {/*============ Hero Contend end =============*/}
            </div>
        </div>
    </section>
  );
};

export default Hero;
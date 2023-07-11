import React from 'react';

const Footer = () => {

  const year =new Date().getFullYear()

  return (
    <footer className='bg-[#12141e] pt-5'>
      {/*========= footer top ========*/}
      <div className="container py-10">
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Quieres comenzar a desarrollar productos geniales?
            </h2>
            <a href="#contact">
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-darkColor hover:text-headingColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i class="ri-mail-line">Contratame</i> </button>                            
            </a>
          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>Transformando conceptos en experiencias interactivas: diseño web innovador y desarrollo frontend para una presencia en línea impactante.</p>
            <div className='flex items-center justify-center gap-4 flex-wrap md:gap-8 mt-10 '>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Sigueme:
              </span>
              <span className='w-[35px] h-[35px] bg-primaryColor p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://github.com/javiergp23/javiergp23" className='text-[#12141e]  hover:text-headingColor font-[800] tex-[18px]'><i class="ri-github-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-primaryColor  p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://www.linkedin.com/in/javiergonzalez23" className='text-[#12141e] hover:text-headingColor font-[800] tex-[18px]'><i class="ri-linkedin-box-fill"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-primaryColor  p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://www.instagram.com/javiergp23/" className='text-[#12141e] hover:text-headingColor font-[800] tex-[18px]'><i class="ri-instagram-line"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*========= footer end ========*/}
      {/*========= footer buttom ========*/}
      <div className='bg-[#1b1e29] py-4 mt-14px'>
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            
            <div className="hidden sm:block" >
            <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500px] rounded-full flex items-center justify-center'>
                        JG
                    </span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700px] '>Javier</h2>
                        <p className='text-smallTextColor text-[25px] font-[700px]'>González</p>
                    </div>
                </div>
            </div>  
          
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright {year} developed by Javier González - All right reserved</p>
            </div>

          </div> 
        </div>
      </div>
      {/*========= footer buttom end ========*/}
    </footer>
  )
}

export default Footer
import React from 'react';

import portfolios from '../../assets/data/portfolioData.js';

// component Modal
const Modal = ({ setShowModal, activateID }) => {
    const portfolio = portfolios.find(portfolio => portfolios.id === activateID);
  return (
    <div className='w-full h-full fixed top-0 left-0 z-50 bg-bgDarkColor bg-opacity-40'>
      <div className='w-11/12 md:max-w-[600px] md:w-full h-[620px] absolute top-1/2 left-1/2 z-50 bg-headingColor rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <div>
          <figure>
            <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-darkColor font-[700] my-2">
            {portfolio.title}
          </h2>
          <p className='text-[15px] leading-7 text-darkColor'>
            {portfolio.description}
          </p>
          <div className='mt-2 flex items-center gap-3 flex-wrap'>
            <h4 className='text-darkColor text-[18px] font-[700]'>
              Technologies:
            </h4>
            {
              portfolio.technologies.map((item, index) => (
              <span key={index} className='bg-primaryColor text-headingColor py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>)
            )}
          </div>
        <a href={portfolio.siteUrl}>
          <button className='bg-primaryColor hover:bg-darkColor text-headingColor py-1 px-4 my-2 rounded-[8px] font-[500] ease-in duration-300'>
              Live Site
          </button>
        </a>
        </div>
        <button onClick={()=>setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Modal; 
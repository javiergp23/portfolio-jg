import React from 'react'
import data from '../../assets/data/portfolioData';
const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className='text-headingcolor text-[2rem] font-[700]'>My recent projects</h3>
                </div>   
                <div className='flex gap-3'>
                    <button className='text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]'>
                        All
                    </button>
                    <button className='text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]'>
                        Web Design
                    </button>
                    <button className='text-smallTextColor border border-solid  border-smallTextColor py-2 px-4 rounded-[8px]'>
                        Ux-Design
                    </button>
                </div>             
            </div>
            <div className='flex items-center gap-4 flex-wrap'>
                {
                    data?.map((portfolio, index) => {
                        <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                            <figure>
                                <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                            </figure>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Portfolio;
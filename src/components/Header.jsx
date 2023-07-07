import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/*======= LOGO ======= */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500px] rounded-full flex items-center justify-center'>
                        M
                    </span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700px]'>Muhib</h2>
                        <p className='text-smallTextColor text-[14px] font-[500px]'>Personal</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
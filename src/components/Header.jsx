import React, {useRef, useEffect} from 'react';

// header component

const Header = () => {

    const headerRef = useRef(null)
    
    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(() => {
        stickyHeaderFunc()
        
        return window.removeEventListener('scroll', stickyHeaderFunc)
    });

    const handleClick =  e => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header ref={headerRef} id="landing-header" className="w-full h-[80px] leading-[80px] flex items-center">
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/*======= LOGO ======= */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500px] rounded-full flex items-center justify-center'>
                        JG
                    </span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700px] '>Javier</h2>
                        <p className='text-smallTextColor text-[25px] font-[700px]'>González</p>
                    </div>
                </div>
                {/* ======== logo end =========*/}
                {/* ======== menu start ========*/}
                <div className='menu' ref={menuRef} onClick={toggleMenu}>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">Acerca de</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">Servicios</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
                {/* ======== menu end =========*/}
                {/* ======== menu right =========*/}
                <div className="flex items-center gap-4">
                    <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColorpy-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
                        <a href="#contact"><i class="ri-send-plane-line"></i> Enviame un mensaje!</a>
                    </button>
                    <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>
                </div>
                {/* ======== menu end =========*/}
            </div>
            <div id="menu-backdrop" class={`absolute bg-red backdrop-blur-lg rounded left-[var(--left)] top-[var(--top)] w-[var(--width)] h-[var(--height)] transition-all duration-300 ease-in-out opacity-0 -z-10`}>

             </div>
        </div>
    </header>
  );
}

export default Header;
import React, {useState, useEffect} from 'react';
import './navbar.css'

const Navbar = () => {
    const [scrollState, setscrollState] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setscrollState(offset>28);
        }
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`navbarMain ${scrollState ? 'scrolled' : ''}`}>
            <div className='link'>
                <div onClick={() => scrollToSection('work')} className='nav-links'>Work</div>
            </div>
            <div className='link'>
                <div onClick={() => scrollToSection('skills')} className='nav-links'>About</div>
            </div>
            <div className='link'>
                <div onClick={() => scrollToSection('testimonials')} className='nav-links'>Testimonials</div>
            </div>
            <div className='link'>
                <div onClick={() => scrollToSection('contact')} className='nav-links'>Contact</div>
            </div>
        </div>
    )
}

export default Navbar;
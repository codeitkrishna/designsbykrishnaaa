import styles from './hero.module.css'
import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const role = React.useRef(null);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ 
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const typed = new Typed(role.current, {
            strings: ['^300 An explorer ^200', 'A designer ^200', 'A problem solver ^200', 'An artist ^200'],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };

    }, []);

    return (
        <div className={styles.heroMain}>
            <div className={styles.heroContent}>
                <div className={styles.intro1}>Hi, my name is Krishna Gupta.</div>
                <div className={styles.intro2}><span ref={role} />.</div>
                <div 
                    className={styles.cta} 
                    onClick={scrollToContact}
                    role="button"
                    tabIndex={0}
                >
                    <span>Let's turn your "what-ifs" into "this is it!"</span>
                </div>
            </div>
            <div className={styles.profilePhoto}>
                <img src="assets/images/profilePicture.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;
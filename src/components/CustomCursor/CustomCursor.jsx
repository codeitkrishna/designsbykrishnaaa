import { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addScaleEffect = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    };

    const removeScaleEffect = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effect for all clickable elements
    const clickables = document.querySelectorAll('a, button, span');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', addScaleEffect);
      el.addEventListener('mouseleave', removeScaleEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', addScaleEffect);
        el.removeEventListener('mouseleave', removeScaleEffect);
      });
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
import React from 'react';
import '../styles/components/Logos.css';
import logo1 from '../assets/logos/3.png';
import logo2 from '../assets/logos/4.png';
import logo3 from '../assets/logos/5.png';
import logo4 from '../assets/logos/6.png';
import logo5 from '../assets/logos/7.png';

const Logos = () => {
    return (

        <div className="about-logos">
            <img src={logo1} alt="Luis Alfredo Londoño" />
            <img src={logo2} alt="David Guarín" />
            <img src={logo3} alt="Sephira" />
            <img src={logo4} alt="WM Sportswear" />
            <img src={logo5} alt="Rayneplay" />
        </div>

    );
};

export default Logos;

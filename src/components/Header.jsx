import React from 'react';
import camilaImage from '../assets/camila.JPG'; // Importa la imagen de Camila
import '../styles/components/Header.css';
import video from '../assets/videos/world.mp4';

const Header = () => {
    return (
      <div className="header-container">
        {/* Sección izquierda con video de fondo */}
        <div className="left-section">
          <video autoPlay loop muted className="background-video">
            <source src={video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className="content">
            <h1>
              COMMUNITY <span className="highlight">MANAGER</span>
            </h1>
            <p className="name">Camila Salinas</p>
            <p className="location">Cali - Valle</p>
          </div>
        </div>
        
        {/* Sección derecha con imagen */}
        <div className="right-section">
          <img src={camilaImage} alt="Community Manager" />
        </div>
      </div>
    );
  };
  
  export default Header;
import React from "react";
import { FaWhatsapp, FaInstagram, FaLink } from "react-icons/fa";
import "../styles/components/Footer.css";
import profileImage from "../assets/Camila2.JPEG"; // Asegúrate de que la ruta es correcta

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Sección del texto */}
        <div className="footer-text">
          <h2>
            ELEVA TU <span>MARCA</span>
          </h2>
          <p>
            Un Community Manager optimiza tu tiempo, crea contenido estratégico,
            aumenta tu alcance y fideliza clientes, asegurando el crecimiento y
            posicionamiento de tu marca.
          </p>
        </div>

        {/* Sección de la imagen */}
        <div className="footer-image">
          <img src={profileImage} alt="Camila Salinas, Community Manager" />
          <h3>Camila Salinas, <br /> Community Manager</h3>
        </div>

        {/* Sección de Contacto y Portafolio */}
        <div className="footer-contact">
          <div className="contact-section">
            <h4>CONTACTO</h4>
            <div className="contact-icons">
              <a href="https://wa.me/3106268134" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="footer-icon" />
              </a>
              <a href="https://www.instagram.com/camilasalinas6?igsh=YWZvbTJldXcwNGJu" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="portfolio-section">
            <h4>PORTAFOLIO</h4>
            <div className="portfolio-icon">
              <a href="https://drive.google.com/uc?id=1iwrrvJeU3u1D2AtJQxlKfbel4cwaHg9y"
                target="_blank"
                rel="noopener noreferrer">
                <FaLink className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../styles/components/About.css';
import autora from '../assets/LANDING.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2>
                        <span>¿Quien</span> <br /> <span>soy?</span>
                    </h2>
                    <p>
                        Soy <strong>publicista</strong> con amplia experiencia en social media y community
                        management. Me especializo en la creación de fotos, videos y contenido
                        creativo que conecta con el público. Además, desarrollo <strong>estrategias</strong>
                        para marcas personales y/o empresas, gestionando redes sociales y creando contenido
                        publicitario que genera resultados.
                    </p>
                    <p>
                        Mi enfoque está en construir una presencia digital <strong>auténtica</strong> y
                        <strong> efectiva</strong>, alineada con los objetivos de cada marca.
                    </p>
                </div>
                <div className="about-image">
                    <img src={autora} alt="Fotógrafa" />
                </div>
            </div>
        </div>
        
    );
};

export default About;

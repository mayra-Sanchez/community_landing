import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import '../styles/components/Services.css';
import image1 from "../assets/especialidades/grabacion.png";
import image2 from "../assets/especialidades/diseño.png";
import image3 from "../assets/especialidades/pauta.png";
import image4 from "../assets/especialidades/diseñoweb.png";
import image5 from "../assets/especialidades/redes.png";

const specialties = [
    {
        image: image1,  // ✅ Así está correcto
        title: "GRABACIÓN Y CREACIÓN DE CONTENIDO",
        description: "",
    },
    {
        image: image2,
        title: "DISEÑO GRÁFICO",
        description: "AI, PS, CANVA",
    },
    {
        image: image3,
        title: "PAUTA PUBLICITARIA",
        description: "(META, INSTAGRAM, GOOGLE ADS Y TIKTOK ADS)",
    },
    {
        image: image4,
        title: "DISEÑO WEB",
        description: "(PÁGINAS, LANDING, LINKTREE, APPS ETC...)",
    },
    {
        image: image5,
        title: "MANEJO DE REDES",
        description: "",
        icons: [<FaFacebookF />, <FaInstagram />, <FaTiktok />, <FaYoutube />],
    },
];


const Services = () => {
    return (
        <div className="specialties-container">
            <h2>ÁREAS DE TRABAJO</h2>
            <h1>MIS ESPECIALIDADES</h1>
            <div className="specialties-grid">
                {specialties.map((specialty, index) => (
                    <div key={index} className="specialty-card">
                        <img src={specialty.image} alt={specialty.title} className="specialty-image" />
                        <h3 className="specialty-title">{specialty.title}</h3>
                        {specialty.description && <p className="specialty-description">{specialty.description}</p>}
                        {specialty.icons && <div className="specialty-icons">{specialty.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
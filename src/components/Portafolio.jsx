import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import screen1 from "../assets/pantallas/IMG_1255.png";
import screen2 from "../assets/pantallas/IMG_1257.png";
import screen3 from "../assets/pantallas/IMG_1945.png";
import '../styles/components/Portafolio.css';

const Portafolio = () => {
  const usernames = [
    "@Drluisalfredolondono",
    "@Sephiracirugiaplastica",
    "@Drdavidguarincirugiaplastica"
  ];

  const screens = [screen1, screen2, screen3];

  return (
    <div className="visualizer-container">
      <h2>
        VISUA<span className="highlight">LIZER</span>
      </h2>

      {/* Carrusel solo en pantallas pequeñas */}
      <div className="carousel-container">
        <Swiper
          className="swiper-container"
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          centeredSlides={true} // ✅ Centra las imágenes en el carrusel
          modules={[Pagination, Navigation]}
        >
          {screens.map((screen, index) => (
            <SwiperSlide key={index}>
              <motion.div className="image-container" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <img src={screen} alt={`Perfil ${index + 1}`} className="profile-image" />
                <p className="username">{usernames[index]}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid de imágenes en pantallas grandes */}
      <div className="grid-container">
        {screens.map((screen, index) => (
          <motion.div key={index} className="image-container" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <img src={screen} alt={`Perfil ${index + 1}`} className="profile-image" />
            <p className="username">{usernames[index]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portafolio;

import React from "react";
import screen1 from "../assets/pantallas/IMG_1255.png";
import screen2 from "../assets/pantallas/IMG_1257.png";
import screen3 from "../assets/pantallas/IMG_1945.png";
import '../styles/components/Portafolio.css';
import { motion } from "framer-motion";

const Portafolio = () => {
  const usernames = [
    "@Drluisalfredolondono",
    "@Sephiracirugiaplastica",
    "@Drdavidguarincirugiaplastica"
  ];

  return (
    <div style={{ textAlign: "center", backgroundColor: "black", padding: "20px" }}>
      <h2 style={{ color: "white", fontSize: "2rem" }}>
        VISUA<span style={{ color: "#00eaff" }}>LIZER</span>
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {[screen1, screen2, screen3].map((screen, index) => (
          <motion.div
            key={index}
            style={{ width: "250px", height: "550px", position: "relative" }}
            whileHover={{ scale: 1.1 }} // Aumenta el tamaño al pasar el mouse
            transition={{ duration: 0.3 }}
          >
            <img
              src={screen}
              alt={`Perfil ${index + 1}`}
              style={{
                width: "92%",
                height: "81%",
                position: "absolute",
                top: "9%",
                left: "4%",
                borderRadius: "25px",
              }}
            />

            <p style={{ color: "#00eaff", textAlign: "center", marginTop: "520px", fontSize: "16px" }}>
              {usernames[index]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portafolio;

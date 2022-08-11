import { FC, useContext } from "react";
import "./About.scss";
import tools from "../../assets/tools-left-min.jpg";
import { LangContext } from "../../state/context/Lang";

export const About: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id="About" className="About link-target">
      <div className="About__img">
        <img src={tools} />
      </div>

      <div className="About__text">
        <h2>{lang == "en" ? "About Us" : "Nosotros"}</h2>
        <div className="About__vision">
          <h3>{lang == "en" ? "Vision & Motion" : "Visión y Moción"}</h3>
          <p>
            {lang == "en"
              ? "To be the reference company for all Maintenance, Repair and Improvement Services and Solutions for your home and vehicle."
              : "Ser la empresa referente a todos Servicios y Soluciones de mantenimiento, reparación y mejora para su hogar y vehículo."}
          </p>
        </div>
        <p>
          {lang == "en"
            ? "Our goal is to provide home services performed by a team of technicians, engineers and professional craftsmen."
            : "Nuestra meta es proveerles servicios a domicilios realizados por un equipo de técnicos, ingenieros y artesanales profesionales."}
        </p>
        <p>
          {lang == "en"
            ? "It is not enough for us to provide good service. Our vision is to make the application process as easy as clicking a button. With ease, responsibility and a cooperative spirit we will become the best ally for each of our clients."
            : "No nos basta con dar un buen servicio. Nuestra visión es hacer el proceso de solicitud tan fácil como darle a un botón. Con facilidad, responsabilidad y espíritu cooperativo nos convertiremos en el mejor aliado para cada uno de nuestros clientes."}
        </p>
      </div>
    </section>
  );
};

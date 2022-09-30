import { FC, useContext } from "react";
import "./About.scss";
import tools from "../../assets/tools-left-min.jpg";
import { LangContext } from "../../state/context/Lang";

export const About: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id="About" className="About link-target">
      <div className="About__img">
        <img
          src={tools}
          alt="Golden wrenches, bolts, and washers on black background"
        />
      </div>

      <div className="About__text">
        <h2>{lang == "es" ? "Nosotros" : "About Us"}</h2>
        <div className="About__vision">
          <h3>{lang == "es" ? "Visión y Misión" : "Vision & Mission"}</h3>
          <p>
            {lang == "es"
              ? "Ser la empresa referente a todos servicios de mantenimiento, reparación y mejora para su hogar."
              : "To be the reference company for all maintenance, repair and improvement services for your home."}
          </p>
        </div>
        <p>
          {lang == "es"
            ? "Nuestra meta es proveerles servicios a domicilios realizados por un equipo de técnicos, ingenieros y artesanales profesionales."
            : "Our goal is to provide home services performed by a team of technicians, engineers and professional craftsmen."}
        </p>
        <p>
          {lang == "es"
            ? "No nos basta con dar un buen servicio. Nuestra visión es hacer el proceso de solicitud tan fácil como tocar un botón. Con facilidad, responsabilidad y espíritu cooperativo seremos en el mejor aliado para cada uno de nuestros clientes."
            : "It is not enough for us to provide a good service. Our vision is to make requesting any service as easy as clicking a button. With ease, responsibility and a cooperative spirit we will become the best ally for each of our clients."}
        </p>
      </div>
    </section>
  );
};

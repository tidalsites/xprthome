import { FC, useContext } from "react";
import "./Services.scss";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Images
import welding from "../../assets/welding-min.jpg";
import auto from "../../assets/auto-min.jpg";
import general from "../../assets/general-min.jpg";
import plumbing from "../../assets/plumbing-min.jpg";
import electrical from "../../assets/electrical-min.jpg";
import ac from "../../assets/ac-min.jpg";
import { LangContext } from "../../state/context/Lang";

export const Services: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <div id="Services" className="Services link-target">
      <div className="Service link-target" id="Electrical">
        <div className="Service__img">
          <img
            src={electrical}
            alt="Hand using screwdriver to install electrical outlet"
          />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>Electricidad</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="Plumbing">
        <div className="Service__img">
          <img src={plumbing} alt="Nice Bathroom" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>{lang == "en" ? "Plumbing" : "Servicios de Plomería"}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="General">
        <div className="Service__img">
          <img src={general} alt="Man drilling a piece of wood" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>Servicios Generales</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
          </div>
        </div>
      </div>
      <div className="Services__cta">
        <p>
          {lang == "en"
            ? "Do you need a service that is not on the list? Call now to find out if we can help you. Our staff have experience in many areas and will be happy to help you."
            : "¿Necesita un servicio que no está en la lista? Llama ahora para saber si podemos ayudarte. Nuestro personal tiene experiencia en muchas áreas y estará encantado de ayudarle."}
        </p>
        <a href="https://wa.me/18098836636">
          <WhatsAppIcon />
          <span>{lang == "en" ? "Contact Us" : "Contáctanos"}</span>
        </a>
      </div>
      <div className="Service link-target" id="Welding">
        <div className="Service__img">
          <img src={welding} alt="Man welding with sparks" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>Servicios de Herrería</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="AC">
        <div className="Service__img">
          <img src={ac} alt="Man fixing AC unit" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>Aires Acondicionados</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="Auto">
        <div className="Service__img">
          <img src={auto} alt="Man tuning car engine" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>Asistencia vial</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              deserunt laboriosam minima odit possimus error omnis, doloremque
              et ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
              facilis placeat veniam ratione facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              esse nostrum maxime natus, pariatur quod?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

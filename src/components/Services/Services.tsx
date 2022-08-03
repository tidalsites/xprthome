import { FC } from "react";
import "./Services.scss";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Images
import welding from "../../assets/welding.jpg";
import auto from "../../assets/auto.jpg";
import general from "../../assets/general.jpg";
import plumbing from "../../assets/plumbing.jpg";
import electrical from "../../assets/electrical.jpg";
import ac from "../../assets/ac.jpg";

export const Services: FC = () => {
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
          <h2>Electricidad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service link-target" id="Plumbing">
        <div className="Service__img">
          <img src={plumbing} alt="Nice Bathroom" />
        </div>
        <div className="Service__text">
          <h2>Servicios de Plomería</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
        </div>
      </div>
      <div className="Service link-target" id="General">
        <div className="Service__img">
          <img src={general} alt="Man drilling a piece of wood" />
        </div>
        <div className="Service__text">
          <h2>Servicios Generales</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Services__cta">
        <p>
          ¿Necesita un servicio que no está en la lista? Llama ahora para saber
          si podemos ayudarte. Nuestro personal tiene experiencia en muchas
          áreas y estará encantado de ayudarle.
        </p>
        <a href="https://wa.me/18098836636">
          <WhatsAppIcon />
          <span>Contáctanos</span>
        </a>
      </div>
      <div className="Service link-target" id="Welding">
        <div className="Service__img">
          <img src={welding} alt="Man welding with sparks" />
        </div>
        <div className="Service__text">
          <h2>Servicios de Herrería</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service link-target" id="AC">
        <div className="Service__img">
          <img src={ac} alt="Man fixing AC unit" />
        </div>
        <div className="Service__text">
          <h2>Aires Acondicionados</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service link-target" id="Auto">
        <div className="Service__img">
          <img src={auto} alt="Man tuning car engine" />
        </div>
        <div className="Service__text">
          <h2>Asistencia vial</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
    </div>
  );
};

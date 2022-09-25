import { FC, useContext, useEffect } from "react";
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

  useEffect(() => {
    // Only apply on desktop

    // Get the top position of each service image
    const serviceImages = document.querySelectorAll(".Service__img");
    const serviceImageArray = Array.from(serviceImages);
    const serviceText = document.querySelectorAll(".Service__text__wrapper");

    window.addEventListener(
      "scroll",
      () => {
        if (window.innerWidth >= 16 * 50) {
          serviceImageArray.forEach((el, i) => {
            // @ts-ignore
            const top = el.offsetTop;
            // @ts-ignore
            const height = el.offsetHeight;
            const offset = height / 4;
            const navbarHeight = 106;
            const scrollPoint = top - navbarHeight - height + offset;

            if (window.scrollY >= scrollPoint) {
              // @ts-ignore
              el.style.transform = "translateX(0px)";
            }

            if (
              // @ts-ignore
              el.style.transform === "translateX(0px)" &&
              window.scrollY <= scrollPoint
            ) {
              switch (i) {
                case 0:
                  // @ts-ignore
                  el.style.transform = "translate(100%)";
                  break;
                case 1:
                  // @ts-ignore
                  el.style.transform = "translate(-100%)";
                  break;
                case 2:
                  // @ts-ignore
                  el.style.transform = "translate(100%)";
                  break;
                case 3:
                  // @ts-ignore
                  el.style.transform = "translate(100%)";
                  break;
                case 4:
                  // @ts-ignore
                  el.style.transform = "translate(-100%)";
                  break;
                case 5:
                  // @ts-ignore
                  el.style.transform = "translate(100%)";
                  break;
                default:
                  break;
              }
            }
          });
        }

        Array.from(serviceText).map((el) => {
          // @ts-ignore
          const top = el.offsetTop;
          // @ts-ignore
          const height = el.offsetHeight;
          const offset = 16 * 4;
          const navbarHeight = 106;
          const scrollPoint = top - navbarHeight - height - offset;

          // Desktop
          if (window.innerWidth >= 16 * 50) {
            if (window.scrollY >= scrollPoint) {
              // @ts-ignore
              el.style.opacity = "1";
              // @ts-ignore
              el.style.transform = "translateY(0)";
            }

            if (
              // @ts-ignore
              el.style.opacity === "1" &&
              window.scrollY <= scrollPoint
            ) {
              // @ts-ignore
              el.style.opacity = "0";
              // @ts-ignore
              el.style.transform = "translateY(100%)";
            }
          } else {
            // Mobile
            if (window.scrollY >= scrollPoint) {
              // @ts-ignore
              el.style.opacity = "1";
              // @ts-ignore
              el.style.transform = "translateY(0)";
            }

            if (
              // @ts-ignore
              el.style.opacity === "1" &&
              window.scrollY <= scrollPoint
            ) {
              // @ts-ignore
              el.style.opacity = "0";
              // @ts-ignore
              el.style.transform = "translateY(100%)";
            }
          }
        });
      },
      { passive: true }
    );
  }, []);
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
            <h2>{lang === "es" ? "Electricidad" : "Electrical"}</h2>
            <p>
              {lang === "es"
                ? "Solucionamos cualquier problema electrico, desde cambiar una tapa de tomacorriente hasta cablear y restructurar su vivienda."
                : "We solve any electrical problem, from changing an outlet cover to wiring and restructuring your home."}
            </p>
            <ul>
              <li>
                {lang === "es"
                  ? "Cambios de accesorios electricos"
                  : "Changes of electrical accessories"}
              </li>
              <li>{lang === "es" ? "Cambios de lamparas" : "Lamp changes"}</li>
              <li>{lang === "es" ? "Cambios de braker" : "Breaker changes"}</li>
              <li>
                {lang === "es"
                  ? "Chequeos y regular consumo excesivo de luz"
                  : "Check-ups and regular excessive consumption of light"}
              </li>
              <li>
                {lang === "es"
                  ? "Instalaciones electricas nuevas"
                  : "New electrical installations"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="Plumbing">
        <div className="Service__img">
          <img src={plumbing} alt="Nice Bathroom" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>{lang == "es" ? "Servicios de Plomería" : "Plumbing"}</h2>
            <p>
              {lang === "es"
                ? "Puede contar con nosotros para solucionar todo temas de plomería desde una fuga de agua hasta cualquier instalación nueva."
                : "You can count on us to fix everything from a water leak to any new plumbing installation."}
            </p>
            <ul>
              <li>
                {lang === "es"
                  ? "Cambio de accesorios de baños"
                  : "Change of bathroom accessories"}
              </li>
              <li>
                {lang === "es"
                  ? "Reparaciones de fugas de agua"
                  : "Water leak repairs"}
              </li>
              <li>
                {lang === "es"
                  ? "Reparaciones o cambio de inodoros cambio de lava mano soluciones de tubería tapada"
                  : "Repairs or change of toilets change of handwashing solutions of clogged pipes"}
              </li>
              <li>
                {lang === "es"
                  ? "Soluciones de tubería tapada"
                  : "Solutions of clogged pipes"}
              </li>
            </ul>
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
        <div className="Services__cta__icons">
          <span className="material-icons">plumbing</span>
          <span className="material-icons">carpenter</span>
          <span className="material-icons">handyman</span>
          <span className="material-icons">roofing</span>
        </div>
        <p>
          {lang == "es"
            ? "¿Necesita un servicio que no está en la lista? Llama ahora para saber si podemos ayudarte. Nuestro personal tiene experiencia en muchas áreas y estará encantado de ayudarle."
            : "Do you need a service that is not on the list? Call now to find out if we can help you. Our staff have experience in many areas and will be happy to help you."}
        </p>
        <a href="https://wa.me/18098836636">
          <WhatsAppIcon />
          <span>{lang == "es" ? "Contáctanos" : "Contact Us"}</span>
        </a>
      </div>
      <div className="Service link-target" id="Welding">
        <div className="Service__img">
          <img src={welding} alt="Man welding with sparks" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>{lang === "es" ? "Servicios de Herrería" : "Welding"}</h2>
            <p>
              {lang === "es"
                ? "Realizamos todo tipos de trabajos de soldadura reparación de todo tipo de estructura metálica."
                : "We carry out all types of welding repair work on all types of metal structures."}
            </p>
            <ul>
              <li>
                {lang === "es"
                  ? "Fabricamos puertas de hierros"
                  : "We manufacture iron gates"}
              </li>
              <li>
                {lang === "es"
                  ? "Fabricación de protector de ventanas"
                  : "Manufacture of window guard"}
              </li>
              <li>
                {lang === "es"
                  ? "Fabricación de portones"
                  : "Manufacture of gates"}
              </li>
              <li>{lang === "es" ? "Verjas de hierro" : "Iron gates"}</li>
              <li>{lang === "es" ? "Escaleras en hierro" : "Iron stairs"}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="AC">
        <div className="Service__img">
          <img src={ac} alt="Man fixing AC unit" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>
              {lang === "es" ? "Aires Acondicionados" : "Air Conditioning"}
            </h2>
            <p>
              {lang === "es"
                ? "Nos encargamos de dejar tu espacio frio"
                : "We take care of leaving your cold space"}
            </p>
            <ul>
              <li>
                {lang === "es"
                  ? "Reparamos aire acondicionados"
                  : "We repair air conditioners"}
              </li>
              <li>
                {lang === "es"
                  ? "Vendemos e instalamos aire acondicionados"
                  : "We sell and install air conditioners"}
              </li>
              <li>
                {lang === "es"
                  ? "Mantenimiento de aire acondicionado"
                  : "Air conditioning maintenance"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Service link-target" id="Auto">
        <div className="Service__img">
          <img src={auto} alt="Man tuning car engine" />
        </div>
        <div className="Service__text">
          <div className="Service__text__wrapper">
            <h2>{lang === "es" ? "Asistencia vial" : "Roadside Assistance"}</h2>
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

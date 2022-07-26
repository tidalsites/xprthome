import { FC, useContext } from "react";
import "./Footer.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LangContext } from "../../state/context/Lang";

export const Footer: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer id="Footer" className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__main">
          <div className="Footer__main__col Footer__main__col-contact">
            <span className="Footer__main__col-header">
              {lang == "es" ? "Contacto" : "Contact"}
            </span>
            <a href="https://wa.me/18295135209" target="_blank">
              <WhatsAppIcon />
              <span>+1 (829) 513-5209</span>
            </a>
            <a href="mailto:admin@xprthome.com" target="_blank">
              <EmailIcon />
              <span>admin@xprthome.com</span>
            </a>
            <a
              href="https://www.instagram.com/expertohomepuntacana/"
              target="_blank"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
          <div className="Footer__main__col">
            <span className="Footer__main__col-header">
              {lang === "es" ? "Zonas De Cobertura" : "Areas Covered"}
            </span>
            <ul>
              <li>Bávaro</li>
              <li>Punta Cana</li>
              <li>La Romana</li>
            </ul>
          </div>
          <div className="Footer__main__col Footer__main__col-hours">
            <span className="Footer__main__col-header">
              {lang == "es" ? "Horario Principal" : "Core Hours"}
            </span>
            <ul>
              <li>
                <span>{lang === "es" ? "Lunes" : "Monday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Martes" : "Tuesday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Miércoles" : "Wednesday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Jueves" : "Thursday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Viernes" : "Friday"}</span>
                <span>7AM - 9PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Sábado" : "Saturday"}</span>
                <span>7AM -12PM</span>
              </li>
              <li>
                <span>{lang === "es" ? "Domingo" : "Sunday"}</span>
                <span>{lang === "es" ? "Cerrado" : "Closed"}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__copyright">
          <span>&copy; Experto Home 2022</span>
          <a href="https://www.tidalsites.com">
            {lang == "es" ? "Creado por TidalSites" : "Powered by TidalSites"}
          </a>
        </div>
      </div>
    </footer>
  );
};

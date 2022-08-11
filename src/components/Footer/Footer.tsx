import { FC, useContext } from "react";
import "./Footer.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { LangContext } from "../../state/context/Lang";

export const Footer: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer id="Footer" className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__main">
          <div className="Footer__main__col Footer__main__col-contact">
            <span className="Footer__main__col-header">
              {lang == "en" ? "Contact" : "Contacto"}
            </span>
            <a href="https://wa.me/18098836636">
              <WhatsAppIcon />
              <span>+1 (809) 883-6636</span>
            </a>
            <a href="mailto:info@xprthome.com">
              <EmailIcon />
              <span>info@xprthome.com</span>
            </a>
          </div>
          <div className="Footer__main__col">
            <span className="Footer__main__col-header">
              {lang == "en" ? "Areas Covered" : "Zonas De Cobertura"}
            </span>
            <ul>
              <li>Bávaro</li>
              <li>Punta Cana</li>
              <li>La Romana</li>
            </ul>
          </div>
          <div className="Footer__main__col Footer__main__col-hours">
            <span className="Footer__main__col-header">
              {lang == "en" ? "Core Working Hours" : "Nuestros Horarios"}
            </span>
            <ul>
              <li>
                <span>Lunes</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Martes</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Miercoles</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Jueves</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Viernes</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Sábado</span>
                <span>6AM -9PM</span>
              </li>
              <li>
                <span>Domingo</span>
                <span>Closed</span>
              </li>
            </ul>
            <span className="text-center">**Las horas estan en EST**</span>
          </div>
        </div>
        <div className="Footer__copyright">
          <span>&copy; XPRT Home 2022</span>
          <a href="https://www.tidalsites.com">
            {lang == "en" ? "Powered by TidalSites" : "Creado por TidalSites"}
          </a>
        </div>
      </div>
    </footer>
  );
};

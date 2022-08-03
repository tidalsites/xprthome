import { FC } from "react";
import "./Footer.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export const Footer: FC = () => {
  return (
    <footer id="Footer" className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__main">
          <div className="Footer__main__col Footer__main__col-contact">
            <span className="Footer__main__col-header">Contacto</span>
            <div>
              <WhatsAppIcon />
              <span>+1 (809) 883-6636</span>
            </div>
            <div>
              <EmailIcon />
              <span>emprendeconmigo.20@gmail.com</span>
            </div>
          </div>
          <div className="Footer__main__col">
            <span className="Footer__main__col-header">Areas Covered</span>
            <ul>
              <li>Bavaro</li>
              <li>Punta Cana</li>
              <li>La Romana</li>
            </ul>
          </div>
          <div className="Footer__main__col Footer__main__col-hours">
            <span className="Footer__main__col-header">Core Working Hours</span>
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
                <span>Sabado</span>
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
          <a href="https://www.tidalsites.com"> Powered by TidalSites</a>
        </div>
      </div>
    </footer>
  );
};

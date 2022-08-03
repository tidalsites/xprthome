import { FC } from "react";
import "./Landing.scss";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export const Landing: FC = () => {
  return (
    <div className="Landing">
      <div className="Landing__headline">
        <div className="Landing__text">
          <h1>Servicios de personal de mantenimiento en Punta Cana</h1>
          <p>Nosotros estamos ahí cuando llamas</p>
        </div>
        <div className="Landing__cta">
          <a href="mailto:emprendeconmigo.20@gmail.com">
            <EmailIcon />
            <span>Email</span>
          </a>
          <a href="https://wa.me/18098836636" className="btn-primary">
            <WhatsAppIcon />
            <span>Contáctanos</span>
          </a>
        </div>
      </div>
    </div>
  );
};

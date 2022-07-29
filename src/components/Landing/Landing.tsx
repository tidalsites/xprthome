import { FC } from "react";
import "./Landing.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Landing: FC = () => {
  return (
    <div className="Landing">
      <div className="Landing__headline">
        <div className="Landing__text">
          <h1>Servicios de personal de mantenimiento en Punta Cana</h1>
          <p>Nosotros estamos ahí cuando llamas</p>
        </div>
        <div className="Landing__cta">
          <button>Consigue un presupuesto</button>
          <button className="btn-primary">
            <WhatsAppIcon />
            <span>LLama ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
};

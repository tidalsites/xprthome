import { FC } from "react";
import "./Landing.scss";

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
          <button className="btn-primary">LLama ahora</button>
        </div>
      </div>
    </div>
  );
};

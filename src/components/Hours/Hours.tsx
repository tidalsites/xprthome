import { FC, useContext } from "react";
import { LangContext } from "../../state/context/Lang";
import "./Hours.scss";

export const Hours: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <div id="Hours" className="Hours link-target">
      <div className="Hours__wrapper">
        <div className="Hours__main">
          <h2>{lang == "en" ? "Hours of Operation" : "Nuestros Horarios"}</h2>
          <p>
            {lang == "en"
              ? "Monday to Saturday - 6AM to 9PM"
              : "Lunes a Sábado de 6AM a 9PM"}
          </p>
        </div>
        <div className="Hours__secondary">
          <p>
            {lang == "en"
              ? "Please note that we operate 24/7; However, any services provide outside of Core Hours will incur an additional charge"
              : "Tenga en cuenta que operamos 24/7; Sin embargo, cualquier servicio proporcionado fuera del horario principal incurrirá un cargo adicional"}
          </p>
        </div>
      </div>
    </div>
  );
};

import { FC, useContext } from "react";
import { LangContext } from "../../state/context/Lang";
import "./Hours.scss";

export const Hours: FC = () => {
  const { lang } = useContext(LangContext);
  return (
    <div id="Hours" className="Hours link-target">
      <div className="Hours__wrapper">
        <div className="Hours__main">
          {/* <h2>{lang == "es" ? "Nuestros Horarios" : "Hours of Operation"}</h2> */}
          <p>
            <span>
              {lang == "es" ? "Nosotros operamos 24/7!" : "We operate 24/7!"}
            </span>
          </p>
          <p>
            {lang == "es"
              ? "Tenga en cuenta que operamos 24/7; Sin embargo, cualquier servicio proporcionado fuera del horario principal incurrirá un cargo adicional"
              : "Please note that we operate 24/7; However, any services provide outside of Core Hours will incur an additional charge"}
          </p>
          <a href="#Footer">
            {lang === "es" ? "Ver horas primarias" : "View primary hours"}
          </a>
        </div>
        {/* <div className="Hours__primary">
          <h3>{lang == "es" ? "Horas Primarias" : "Primary Hours"}</h3>
          <p>
            {lang == "es"
              ? "Lunes a Viernes de 7AM a 9PM"
              : "Monday to Friday - 7AM to 9PM"}
          </p>
          <p>
            {lang == "es" ? "Sabado de 7AM a 12PM" : "Saturday - 7AM to 12PM"}
          </p>
        </div> */}
      </div>
    </div>
  );
};

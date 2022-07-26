import { FC } from "react";
import "./Hours.scss";

export const Hours: FC = () => {
  return (
    <div id="Hours" className="Hours">
      <div className="Hours__wrapper">
        <div className="Hours__main">
          <h2>Core Hours of Operation</h2>
          <p>6am - 9pm EST</p>
        </div>
        <div className="Hours__secondary">
          <p>
            Please note that we operate 24/7; However, any services provide
            outside of Core Hours will incur an additional charge
          </p>
        </div>
      </div>
    </div>
  );
};

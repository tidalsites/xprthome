import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__main">
          <div className="Footer__main__col Footer__main__col-contact">
            <span className="Footer__main__col-header">Contact</span>
            <div>
              <span className="material-icons">phone</span>
              <span>18001234567</span>
            </div>
            <div>
              <span className="material-icons">email</span>
              <span>test@email.com</span>
            </div>
          </div>
          <div className="Footer__main__col">
            <span className="Footer__main__col-header">Areas Covered</span>
            <ul>
              <li>Bavaro</li>
              <li>Punta Cana</li>
              <li>La Romana</li>
              <li>Santo Domingo</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="Footer__main__col Footer__main__col-hours">
            <span className="Footer__main__col-header">Core Working Hours</span>
            <ul>
              <li>
                <span>Monday</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Tuesday</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Wednesday</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Thursday</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Friday</span>
                <span>6AM - 9PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>9AM - 12PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <span className="text-center">**All times are in EST**</span>
          </div>
        </div>
        <div className="Footer__copyright">
          <span>&copy; XPRT Home 2022</span>
        </div>
      </div>
    </footer>
  );
};

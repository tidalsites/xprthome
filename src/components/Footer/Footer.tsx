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
            <span className="Footer__main__col-header">Contact</span>
            <div>
              <WhatsAppIcon />
              <span>18001234567</span>
            </div>
            <div>
              <EmailIcon />
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

import { Dispatch, FC, SetStateAction } from "react";
import "./MobileMenu.scss";

interface IMobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ setMobileMenu }) => {
  return (
    <div className="MobileMenu">
      <div className="MobileMenu__wrapper">
        <div className="MobileMenu__close">
          <button onClick={() => setMobileMenu(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <nav id="mobile_navigation">
          <ul className="MobileMenu__list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

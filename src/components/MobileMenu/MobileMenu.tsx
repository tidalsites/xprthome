import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./MobileMenu.scss";
import CloseIcon from "@mui/icons-material/Close";

interface IMobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ setMobileMenu }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="MobileMenu">
      <div className="MobileMenu__wrapper">
        <div className="MobileMenu__close">
          <button onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <nav id="mobile_navigation">
          <ul className="MobileMenu__list">
            <li>
              <a onClick={closeMenu} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#About">
                About
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Hours">
                Hours
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Services">
                Services
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import "./MobileMenu.scss";
import CloseIcon from "@mui/icons-material/Close";
import { LangToggle } from "../LangToggle/LangToggle";
import { LangContext } from "../../state/context/Lang";

interface IMobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ setMobileMenu }) => {
  const { lang } = useContext(LangContext);

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
          <LangToggle alt={true} />
          <button aria-label="Close mobile menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>
        <nav id="mobile_navigation">
          <ul className="MobileMenu__list">
            <li>
              <a onClick={closeMenu} href="#">
                {lang == "en" ? "Home" : "Inicio"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#About">
                {lang == "en" ? "About" : "Nosotros"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Hours">
                {lang == "en" ? "Hours" : "Horas"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Services">
                {lang == "en" ? "Services" : "Servicios"}
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#Footer">
                {lang == "en" ? "Contact" : "Contacto"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

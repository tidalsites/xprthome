import { FC, useState, useEffect, useContext } from "react";
import "./Header.scss";

// Images
import logoLight from "../../assets/logo-light.svg";
import logo from "../../assets/logo.svg";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Components
import { MobileMenu } from "../MobileMenu/MobileMenu";

// Files
import { LangContext } from "../../state/context/Lang";
import { LangToggle } from "../LangToggle/LangToggle";

export const Header: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  let [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const { lang } = useContext(LangContext);

  return (
    <header className={`Header ${scrollY >= 30 ? "Header-alt" : ""}`}>
      <div className="Header__wrapper">
        <div className="Header__top">
          <a
            className="Header__top__whatsapp"
            href="https://wa.me/18294185876"
            target="_blank"
          >
            <WhatsAppIcon />
            <span>+1 (829) 418-5876</span>
          </a>
          <LangToggle alt={scrollY >= 30} />
        </div>
        <div className="Header__main">
          <a href="#" className="Header__logo-container" aria-label="Home">
            <img src={scrollY >= 30 ? logo : logoLight} alt="XPRT Home" />
          </a>
          <nav id="primary_navigation">
            <ul className="Header__list">
              <li>
                <a href="#About">{lang === "es" ? "Nosotros" : "About Us"}</a>
              </li>
              <li>
                <a href="#Hours">{lang === "es" ? "Horas" : "Hours"}</a>
              </li>
              <li className="Header__list__dropdown">
                <a href="#Services">
                  {lang === "es" ? "Servicios" : "Services"}
                </a>
                <ArrowDropDownRoundedIcon />
                <div className="Header__list__dropdown__menu">
                  <div className="Header__list__dropdown__menu__top"></div>
                  <ul>
                    <li>
                      <a href="#Property">
                        {lang === "es" ? "Co-Propiedades" : "Co-Properties"}
                      </a>
                    </li>
                    <li>
                      <a href="#Electrical">
                        {lang === "es" ? "Electricidad" : "Electrical"}
                      </a>
                    </li>
                    <li>
                      <a href="#Plumbing">
                        {lang === "es" ? "Plumeria" : "Plumbing"}
                      </a>
                    </li>
                    <li>
                      <a href="#Welding">
                        {lang === "es" ? "Herreria" : "Welding"}
                      </a>
                    </li>
                    <li>
                      <a href="#AC">
                        {lang === "es" ? "Aire" : "Air Conditioning"}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#Footer">{lang === "es" ? "Contacto" : "Contact"}</a>
              </li>
            </ul>
          </nav>
          <div className="Header__menu">
            <button
              aria-label="Open mobile menu"
              onClick={() => setMobileMenu(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </header>
  );
};

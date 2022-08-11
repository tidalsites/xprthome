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
import { en } from "./Header.json";
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

  const renderByLang = (val: string): string => {
    switch (val) {
      case "nosotros":
        return lang === "en" ? en.nosotros : "Nosotros";
      case "horas":
        return lang === "en" ? en.horas : "Horas";
      case "servicios":
        return lang === "en" ? en.servicios : "Servicios";
      case "electricidad":
        return lang === "en" ? en.electricidad : "Electricidad";
      case "plumeria":
        return lang === "en" ? en.plumeria : "Plumeria";
      case "herreria":
        return lang === "en" ? en.herreria : "Herreria";
      case "aire":
        return lang === "en" ? en.aire : "Aire";
      case "general":
        return lang === "en" ? en.general : "General";
      case "asistenciaVial":
        return lang === "en" ? en.asistenciaVial : "Assistencia Vial";
      case "contacto":
        return lang === "en" ? en.contacto : "Contacto";
      default:
        return "";
    }
  };

  return (
    <header className={`Header ${scrollY >= 30 ? "Header-alt" : ""}`}>
      <div className="Header__wrapper">
        <div className="Header__top">
          <LangToggle alt={scrollY >= 30} />
          <a className="Header__top__whatsapp" href="https://wa.me/18098836636">
            <WhatsAppIcon />
            <span>+1 (809) 883-6636</span>
          </a>
        </div>
        <div className="Header__main">
          <a href="#" className="Header__logo-container" aria-label="Home">
            <img src={scrollY >= 30 ? logo : logoLight} alt="XPRT Home" />
          </a>
          <nav id="primary_navigation">
            <ul className="Header__list">
              <li>
                <a href="#About">{(() => renderByLang("nosotros"))()}</a>
              </li>
              <li>
                <a href="#Hours">{(() => renderByLang("horas"))()}</a>
              </li>
              <li className="Header__list__dropdown">
                <a href="#Services">{(() => renderByLang("servicios"))()}</a>
                <ArrowDropDownRoundedIcon />
                <div className="Header__list__dropdown__menu">
                  <div className="Header__list__dropdown__menu__top"></div>
                  <ul>
                    <li>
                      <a href="#Electrical">
                        {(() => renderByLang("electricidad"))()}
                      </a>
                    </li>
                    <li>
                      <a href="#Plumbing">
                        {(() => renderByLang("plumeria"))()}
                      </a>
                    </li>
                    <li>
                      <a href="#Welding">
                        {(() => renderByLang("herreria"))()}
                      </a>
                    </li>
                    <li>
                      <a href="#General">{(() => renderByLang("general"))()}</a>
                    </li>
                    <li>
                      <a href="#AC">{(() => renderByLang("aire"))()}</a>
                    </li>
                    <li>
                      <a href="#Auto">
                        {(() => renderByLang("asistenciaVial"))()}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#Footer">{(() => renderByLang("contacto"))()}</a>
              </li>
            </ul>
          </nav>
          <div className="Header__menu">
            <button onClick={() => setMobileMenu(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </header>
  );
};

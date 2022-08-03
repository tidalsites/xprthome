import { FC, useState, useEffect } from "react";
import "./Header.scss";
import logoLight from "../../assets/logo-light.svg";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import { MobileMenu } from "../MobileMenu/MobileMenu";

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

  return (
    <header className={`Header ${scrollY >= 30 ? "Header-alt" : ""}`}>
      <div className="Header__wrapper">
        <a href="#" className="Header__logo-container">
          <img src={scrollY >= 30 ? logo : logoLight} alt="" />
        </a>
        <nav id="primary_navigation">
          <ul className="Header__list">
            <li>
              <a href="#About">Nosotros</a>
            </li>
            <li>
              <a href="#Hours">Horas</a>
            </li>
            <li className="Header__list__dropdown">
              <a href="#Services">Servicios</a>
              <ArrowDropDownRoundedIcon />
              <div className="Header__list__dropdown__menu">
                <ul>
                  <li>
                    <a href="#Electrical">Electricidad</a>
                  </li>
                  <li>
                    <a href="#Plumbing">Plumeria</a>
                  </li>
                  <li>
                    <a href="#Welding">Herreria</a>
                  </li>
                  <li>
                    <a href="#General">General</a>
                  </li>
                  <li>
                    <a href="#AC">Aires Acondicionados</a>
                  </li>
                  <li>
                    <a href="#Auto">Asistencia vial</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#Footer">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="Header__menu">
          <button onClick={() => setMobileMenu(true)}>
            <MenuIcon />
          </button>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </header>
  );
};

import { FC, useState, useEffect, useCallback } from "react";
import "./Header.scss";
import logoLight from "../../assets/logo-light.svg";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

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
        <div className="Header__logo-container">
          <img src={scrollY >= 30 ? logo : logoLight} alt="" />
        </div>
        <nav id="primary_navigation">
          <ul className="Header__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Hours">Hours</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
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

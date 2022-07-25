import { FC, useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";

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
          <img src={logo} alt="" />
        </div>
        <nav id="primary_navigation">
          <ul className="Header__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="Header__menu">
          <button onClick={() => setMobileMenu(true)}>
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
    </header>
  );
};

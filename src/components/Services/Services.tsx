import { FC } from "react";
import "./Services.scss";
import placeholder from "../../assets/tools-left.jpg";

/*
    Electrical
    Plumbing
    Welding
    Car
    General Services
*/

export const Services: FC = () => {
  return (
    <div id="Services" className="Services">
      <div className="Service">
        <div className="Service__img">
          <img src={placeholder} alt="" />
        </div>
        <div className="Service__text">
          <h2>Electrical Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service">
        <div className="Service__img">
          <img src={placeholder} alt="" />
        </div>
        <div className="Service__text">
          <h2>Plumbing Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service">
        <div className="Service__img">
          <img src={placeholder} alt="" />
        </div>
        <div className="Service__text">
          <h2>General Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Services__cta">
        <p>
          Do you need a service that is not listed. Call Now to find out if we
          can help you. Our staff has expertise in many areas and would be happy
          to assist.
        </p>
        <button>Call Now</button>
      </div>
      <div className="Service">
        <div className="Service__img">
          <img src={placeholder} alt="" />
        </div>
        <div className="Service__text">
          <h2>Welding Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
      <div className="Service">
        <div className="Service__img">
          <img src={placeholder} alt="" />
        </div>
        <div className="Service__text">
          <h2>Auto Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            deserunt laboriosam minima odit possimus error omnis, doloremque et
            ratione, expedita voluptatum nesciunt ipsam! Neque aspernatur
            facilis placeat veniam ratione facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse
            nostrum maxime natus, pariatur quod?
          </p>
        </div>
      </div>
    </div>
  );
};

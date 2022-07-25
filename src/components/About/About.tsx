import { FC } from "react";
import "./About.scss";
import tools from "../../assets/tools-left.jpg";

export const About: FC = () => {
  return (
    <section id="About" className="About">
      <div className="About__img">
        <img src={tools} />
      </div>

      <div className="About__text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          laudantium voluptas fugiat doloremque sed quo recusandae asperiores
          optio quis itaque at hic et, saepe nam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          autem nam perferendis laudantium laborum excepturi labore! Molestiae
          aliquam, reiciendis mollitia et vero nisi similique atque? Fuga,
          praesentium saepe natus harum doloribus iure? Mollitia, cupiditate
          numquam!
        </p>
      </div>
    </section>
  );
};

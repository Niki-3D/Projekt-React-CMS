import "./Boxes.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Boxes = () => {
  const { boxColors } = useContext(AppContext);

  return (
    <div id="boxes" className="container">
      <div className="boxes">
        <div className="box" style={{ backgroundColor: boxColors[1] }}>
          <h2>Buy The Witcher 1</h2>
          <ul>
            <li>Game of the Year edition available</li>
            <li>Immerse yourself in Geralt's first adventure</li>
            <li>Explore a rich fantasy world</li>
            <li>Engaging storyline and memorable characters</li>
            <li>Experience the beginnings of The Witcher saga</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColors[2] }}>
          <h2>Buy The Witcher 2</h2>
          <ul>
            <li>Enhanced Edition available</li>
            <li>Navigate through political intrigue</li>
            <li>Impactful choices shape the narrative</li>
            <li>Experience epic battles and challenges</li>
            <li>Continue Geralt's journey in this thrilling sequel</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColors[3] }}>
          <h2>Buy The Witcher 3</h2>
          <ul>
            <li>Wild Hunt edition available</li>
            <li>Explore a vast open world</li>
            <li>Face moral dilemmas and tough decisions</li>
            <li>Hunt legendary monsters</li>
            <li>Conclude Geralt's epic saga in this masterpiece</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxes;

import "./Boxes.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Boxes = () => {
  const { boxColors } = useContext(AppContext);

  return (
    <div id="boxes" className="container">
      <div className="boxes">
        <div className="box" style={{ backgroundColor: boxColors[1] }}>
          <h2>Kurs HTML</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColors[2] }}>
          <h2>Kurs CSS</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="box" style={{ backgroundColor: boxColors[3] }}>
          <h2>Kurs JavaScript</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxes;

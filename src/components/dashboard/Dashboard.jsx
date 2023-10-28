import "./Dashboard.scss";
import React, { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    slider,
    setSlider,
    boxColors,
    setBoxColors,
    boxOrder,
    setBoxOrder,
    imageLinks,
    setImageLinks,
    textInput,
    setTextInput,
    setLogged,
  } = useContext(AppContext);

  const moveBoxLeft = (boxIndex) => {
    setBoxOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const [movedBox] = newOrder.splice(boxIndex, 1);
      newOrder.splice(boxIndex - 1, 0, movedBox);
      return newOrder;
    });
  };

  const moveBoxRight = (boxIndex) => {
    setBoxOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const [movedBox] = newOrder.splice(boxIndex, 1);
      newOrder.splice(boxIndex + 1, 0, movedBox);
      return newOrder;
    });
  };

  const handleBoxColorChange = (boxNumber, newColor) => {
    setBoxColors((prevColors) => ({
      ...prevColors,
      [boxNumber]: newColor,
    }));
  };

  const handleImageLinkChange = (imageIndex, newLink) => {
    setImageLinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks[imageIndex] = newLink;
      return newLinks;
    });
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className="logout">
        <button onClick={() => setLogged(false)} className="logout-button">
          Logout
        </button>
      </div>
      <div className="show-home-btn">
        <Link to="/">Show home page</Link>
      </div>
      <div className="section-settings">
        <div className="title">
          <h2>Slider</h2>
          <button onClick={() => setSlider(!slider)}>
            {slider ? "OFF" : "ON"}
          </button>
        </div>
        <div className="settings"></div>
        <div className="image-links">
          {imageLinks.map((link, index) => (
            <input
              key={`imageLink${index}`}
              type="text"
              placeholder={`Image URL ${index + 1}`}
              value={link}
              onChange={(e) => handleImageLinkChange(index, e.target.value)}
            />
          ))}
        </div>
      </div>
      <div className="color-picker">
        {Object.keys(boxColors).map((boxNumber) => (
          <div
            className={`color-picker-box${boxNumber}`}
            key={`colorPickerBox${boxNumber}`}
          >
            <p>Wybierz kolor do Box</p>
            <input
              type="color"
              value={boxColors[boxNumber]}
              onChange={(e) => handleBoxColorChange(boxNumber, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="box-container">
        {boxOrder.map((boxNumber, index) => (
          <div className="box" key={`box${boxNumber}`}>
            <h3>Box {boxNumber}</h3>
            <p>lorem</p>
            <div className="box-controls">
              {index > 0 && (
                <button
                  onClick={() => moveBoxLeft(index)}
                  className="move-left-button"
                >
                  {"<"}
                </button>
              )}
              {index < boxOrder.length - 1 && (
                <button
                  onClick={() => moveBoxRight(index)}
                  className="move-right-button"
                >
                  {">"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-input">
        <input
          type="text"
          placeholder="Enter text"
          value={textInput}
          onChange={handleTextInputChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;

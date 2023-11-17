import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [boxColors, setBoxColors] = useState({
    1: "#6b1610",
    2: "#6b1610",
    3: "#6b1610",
  });
  const [boxOrder, setBoxOrder] = useState([1, 2, 3]);
  const [imageLinks, setImageLinks] = useState([
    "https://cdn.mos.cms.futurecdn.net/QdJPJa8F9j76UbcWmo9Hqk.jpg",
    "https://www.gameinformer.com/sites/default/files/styles/full/public/2018/07/11/c2b777e3/The_Witcher_3_Wild_Hunt_Seems_downright_bucolic--not_necessarily.jpg",
    "https://i.redd.it/sb9gyoyrt3uy.jpg",
  ]);
  const [textInput, setTextInput] = useState("I <3 Witcher Games");

  return (
    <AppContext.Provider
      value={{
        logged,
        setLogged,
        slider,
        setSlider,
        boxOrder,
        setBoxOrder,
        imageLinks,
        setImageLinks,
        boxColors,
        setBoxColors,
        textInput,
        setTextInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

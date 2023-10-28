import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [boxColors, setBoxColors] = useState({
    1: "#B2EBF2",
    2: "#B2EBF2",
    3: "#B2EBF2",
  });
  const [boxOrder, setBoxOrder] = useState([1, 2, 3]);
  const [imageLinks, setImageLinks] = useState([
    "https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?w=2000",
    "https://cdn5.vectorstock.com/i/1000x1000/48/44/3d-seamless-pattern-bg-vector-39294844.jpg",
    "https://as2.ftcdn.net/v2/jpg/04/91/72/07/1000_F_491720794_EP0hWqMBdYxMomuzsfUNVvssAz62wzye.jpg",
  ]);
  const [textInput, setTextInput] = useState(
    "This is a totally working footer text, righhhhht? :/"
  );

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

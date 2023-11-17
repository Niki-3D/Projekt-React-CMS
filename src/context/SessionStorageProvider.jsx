import React, { useEffect } from "react";
import { AppContext } from "./app.context";

export const SessionStorageProvider = ({ children }) => {
  const {
    logged,
    setLogged,
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
  } = React.useContext(AppContext);

  useEffect(() => {
    const storedLogged = sessionStorage.getItem("logged");
    if (storedLogged) {
      setLogged(storedLogged === "true");
    }

    const storedSlider = sessionStorage.getItem("slider");
    if (storedSlider) {
      setSlider(storedSlider === "true");
    }

    const storedBoxColors = sessionStorage.getItem("boxColors");
    if (storedBoxColors) {
      setBoxColors(JSON.parse(storedBoxColors));
    }

    const storedBoxOrder = sessionStorage.getItem("boxOrder");
    if (storedBoxOrder) {
      setBoxOrder(JSON.parse(storedBoxOrder));
    }

    const storedImageLinks = sessionStorage.getItem("imageLinks");
    if (storedImageLinks) {
      setImageLinks(JSON.parse(storedImageLinks));
    }

    const storedTextInput = sessionStorage.getItem("textInput");
    if (storedTextInput) {
      setTextInput(storedTextInput);
    }
  }, []);

  const useSessionStorage = (key, value) => {
    useEffect(() => {
      sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  };

  useSessionStorage("logged", logged);
  useSessionStorage("slider", slider);
  useSessionStorage("boxColors", boxColors);
  useSessionStorage("boxOrder", boxOrder);
  useSessionStorage("imageLinks", imageLinks);
  useSessionStorage("textInput", textInput);

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

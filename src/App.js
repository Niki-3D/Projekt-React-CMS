import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, Admin } from "./views";
import { AppContextProvider } from "./context/app.context";
import { SessionStorageProvider } from "./context/SessionStorageProvider";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <SessionStorageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </SessionStorageProvider>
      </AppContextProvider>
    </div>
  );
};

export default App;

import { useRef, useState, useContext } from "react";
import "./LoginForm.scss";
import { AppContext } from "../../context/app.context";

const LoginForm = () => {
  const { setLogged } = useContext(AppContext);
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const userPasswordRef = useRef();

  const login = () => {
    setError(false);

    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;

    userName === "admin" && userPassword === "admin123"
      ? setLogged(true)
      : setError(true);
  };

  return (
    <div className="login-form">
      <h2>Panel admina</h2>
      <form>
        <input ref={userNameRef} type="text" placeholder="Login" />
        <input ref={userPasswordRef} type="password" placeholder="Hasło" />
        <button type="button" onClick={login}>
          Zaloguj
        </button>
        {error && <div className="error">Zły login lub hasło</div>}
      </form>
    </div>
  );
};

export default LoginForm;

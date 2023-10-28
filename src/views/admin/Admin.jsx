import { useContext } from "react";
import "./Admin.scss";
import { LoginForm, Dashboard } from "../../components/";
import { AppContext } from "../../context/app.context";

const Admin = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="admin-container">
      {logged ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default Admin;

import style from "./index.module.scss";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.logoContainer} onClick={() => navigate("/")}>
        <img src={logo} alt="" />
      </div>
      <Link to="/products">MARKETPLACE</Link>
    </div>
  );
};

export default Navbar;

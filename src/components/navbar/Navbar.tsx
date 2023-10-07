import style from "./index.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img src={logo} alt="" />
      </div>
      <Link to="/products">MARKETPLACE</Link>
    </div>
  );
};

export default Navbar;

import style from "./index.module.scss";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

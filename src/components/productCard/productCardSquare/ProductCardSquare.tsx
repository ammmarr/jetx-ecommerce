import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { FC } from "react";
import { ProductCardProps } from "../ProductCard";
// import img from "../../../assets/productsImages/p (0).jpeg";
const ProductCardSquare: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={data.img} />
      </div>
      <div className={style.textContainer}>
        <h3>{data.name}</h3>
        <p>{data.shortDescription}</p>
        <div className={style.buttonContainer}>
          <Link
            className="button"
            style={{ fontSize: "10px" }}
            to={`/product/${data.id}`}
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSquare;

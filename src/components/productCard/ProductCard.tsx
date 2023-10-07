import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../assets/productsImages/p (0).jpeg";
import style from "./index.module.scss";

export interface ProductCardProps {
  data: any;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { img, shortDescription, longDescription, name } = data;
  console.log(data, "data");
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img src={`${img}`} />
        </div>
        <div className={style.textSection}>
          <h1 className={style.h1}>{data.name}</h1>
          <p className={style.p}>{data.shortDescription}</p>
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
    </>
  );
};

export default ProductCard;

import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { FC } from "react";
import { ProductCardProps } from "../ProductCard";
import img from "../../../assets/productsImages/p1.jpeg";
const ProductCardSquare: FC<ProductCardProps> = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={img} />
      </div>
      <div className={style.textContainer}>
        <h3>{data.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          blanditiis tenetur nesciunt voluptas eligendi architecto quod
          doloremque reprehenderit tempora, nam, quas laboriosam sed iure.
          Exercitationem natus nam quos laborum ipsam.
        </p>
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

import { FC } from "react";
import style from "./index.module.scss";
import demo from "../../../assets/productsImages/p (0).jpeg";
interface ImagesAndTextCards {
  data?: any;
  direction: "left" | "right";
}

const ImagesAndTextCard: FC<ImagesAndTextCards> = ({ direction, data }) => {
  const width = window.innerWidth;
  let displayedDirection = direction.slice();

  if (width < 830) {
    displayedDirection = "left";
  }
  console.log(data.img);
  return (
    <div className={style.wrapperr}>
      {displayedDirection == "left" && (
        <div className={style.imageContainer}>
          <img src={data.img} />
        </div>
      )}

      <div className={style.textContainer}>
        <h2>{data.name}</h2>
        <p>{data.shortDescription}</p>
        <div className="button">Learn more</div>
      </div>
      {displayedDirection == "right" && (
        <div className={style.imageContainer}>
          <img src={data.img} />
        </div>
      )}
    </div>
  );
};

export default ImagesAndTextCard;

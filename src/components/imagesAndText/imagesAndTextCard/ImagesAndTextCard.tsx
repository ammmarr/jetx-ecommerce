import { FC } from "react";
import style from "./index.module.scss";
import demo from "../../../assets/productsImages/p (0).jpeg";
interface ImagesAndTextCards {
  data?: any;
  direction: "left" | "right";
}

const ImagesAndTextCard: FC<ImagesAndTextCards> = ({ direction }) => {
  const width = window.innerWidth;
  let displayedDirection = direction.slice();

  if (width < 830) {
    displayedDirection = "left";
    console.log("r");
    console.log(displayedDirection);
  }

  return (
    <div className={style.wrapperr}>
      {displayedDirection == "left" && (
        <div className={style.imageContainer}>
          <img src={demo} />
        </div>
      )}

      <div className={style.textContainer}>
        <h2>dasfa</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          praesentium maiores iusto impedit magnam veniam placeat commodi eos
          sint repellat sit, similique corrupti aliquam beatae quibusdam numquam
          totam at quidem.
        </p>
        <div className="button"> ada</div>
      </div>
      {displayedDirection == "right" && (
        <div className={style.imageContainer}>
          <img src={demo} />
        </div>
      )}
    </div>
  );
};

export default ImagesAndTextCard;

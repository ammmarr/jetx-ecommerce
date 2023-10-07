import WrapperForImagesAndText from "../wrapper/wrapperForImagesAndText";
import ImagesAndTextCard from "./imagesAndTextCard/ImagesAndTextCard";
import style from "./index.module.scss";

const ImagesAndText = () => {
  return (
    <div className={style.container}>
      <ImagesAndTextCard direction="left" />
      <ImagesAndTextCard direction="right" />
      <ImagesAndTextCard direction="left" />
    </div>
  );
};

export default ImagesAndText;

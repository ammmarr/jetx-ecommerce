import productsData from "../../assets/productsData";
import WrapperForImagesAndText from "../wrapper/wrapperForImagesAndText";
import ImagesAndTextCard from "./imagesAndTextCard/ImagesAndTextCard";
import style from "./index.module.scss";

const ImagesAndText = () => {
  const data = [...productsData];
  const featuredData = data.slice(3, 6);
  console.log(featuredData);
  return (
    <div className={style.container}>
      <ImagesAndTextCard direction="left" data={data[0]} key={1} />
      <ImagesAndTextCard direction="right" data={data[9]} key={2} />
      <ImagesAndTextCard direction="left" data={data[2]} key={3} />
    </div>
  );
};

export default ImagesAndText;

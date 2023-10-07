import axios from "axios";
import { useEffect, useState } from "react";
import p1 from "../../assets/productsImages/p (3).png";
import style from "./index.module.scss";
const HeroProductCard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  console.log(error);
  useEffect(() => {
    async function getDataFunction() {
      const url =
        "https://tazzweed.com/api/method/tazzweed.api.products?item_code=AS-0003";
      try {
        const { data } = await axios.get(url);
        setData(data.message);
      } catch (err) {
        console.log(err);
        setError("No Resuts");
      }
    }
    getDataFunction();

    return () => {
      setError("");
    };
  }, []);
  console.log(data, "prd");
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={p1} />
      </div>
      <div className={style.textSection}>
        {/* <h3 className={style.h3}>Highlighted</h3> */}
        <h1 className={style.h1}>lorem as sda d asdalkasd ald f alsdf</h1>
        <p className={style.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          delectus sint veritatis eum amet expedita ullam optio praesentium. Quo
          recusandae nostrum quaerat quod cumque tenetur, facere eius alias
          repellendus rerum.
        </p>
        <div className={style.quantity}>
          <span>-</span>
          <div>3</div>
          <span>+</span>
        </div>
        <div className="button">Purchase</div>
      </div>
    </div>
  );
};

export default HeroProductCard;

/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import "../oldCard.css";

const SlideWrapper = (props: any) => {
  return (
    <div
      className="wrapper"
      style={{ transform: `translateX(${props.sliderValue * -100}vw` }}
    >
      <img src={props.slideData.img} />

      <div className="text-section" style={props.infoAnimation}>
        <div className="text-positioning">
          <h2>{props.slideData.type}</h2>
          <h1>{props.slideData.h1}</h1>
          <h3>{props.slideData.desc}</h3>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <button className="button type1">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SlideWrapper;

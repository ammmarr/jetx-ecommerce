/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import "./heroSlider.css";

const WrapperForImagesAndText = (props: any) => {
  console.log(props, "wrapper");
  return (
    <div
      className="wrapper"
      style={{ transform: `translateX(${props.sliderValue * -100}vw` }}
    >
      <div className="text-section" style={props.infoAnimation}>
        <div className="text-positioning">
          <h2>s</h2>
          <h1>s</h1>
          <h3>s</h3>

          <Link to="Shop" style={{ textDecoration: "none" }}>
            <button className="button type1">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WrapperForImagesAndText;

// @ts-nocheck
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosNewOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useCallback, useEffect, useState } from "react";
import heroSliderData from "../../assets/heroSliderData";
import SlideWrapper from "./SlideWrapper/SlideWraper";
import "./oldCard.css";
const HeroCardOld = () => {
  const [slider, setSlider] = useState(null);

  const [infoAnimation, setInfoAnimation] = useState({
    opacity: 0,
    transform: "translateX(-20px)",
  });
  //   function componentDidMount(){

  //           setInfoAnimation({
  //             opacity: 1,
  //             transform: "translateX(0px)",
  //             transition: "all 0.1s ease-in-out",

  //           })

  //       setSlider(0);

  //   };

  //this function is for animation of text in each slide after sliding
  useEffect(() => {
    setInfoAnimation({
      opacity: 0,
      transform: "translateX(50px)",
    });
    const timeout = setTimeout(
      () =>
        setInfoAnimation({
          opacity: 1,
          transform: "translateX(0px)",
          transition: "all 0.8s ease",
        }),
      1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [slider]);

  //slide right function onclicking the arrow
  function slideRight() {
    if (slider >= 0 && slider < 1) {
      setSlider((prev) => prev + 1);
    } else {
      setSlider(0);
    }
  }

  //slide left function with arrow
  const slideLeft = useCallback(
    function slideLeft() {
      if (slider > 0 && slider <= 2) {
        setSlider(slider - 1);
      } else {
        setSlider(1);
      }
    },
    [slider]
  );

  //function that automaticly slides after a period of time
  useEffect(() => {
    const interval = setInterval(() => slideLeft(), 20000);
    return () => {
      clearInterval(interval);
    };
  }, [slideLeft]);

  return (
    <div className="HeroSlider-container">
      <div className="arrow-left" onClick={() => slideLeft()}>
        <ArrowBackIosNewOutlinedIcon className="arrow" />
      </div>
      {heroSliderData.map((slide: { id: any }) => (
        <SlideWrapper
          slideData={slide}
          key={slide.id}
          sliderValue={slider}
          infoAnimation={infoAnimation}
        />
      ))}
      <div className="arrow-right" onClick={() => slideRight()}>
        <ArrowForwardIosNewOutlinedIcon className="arrow" />
      </div>
    </div>
  );
};
export default HeroCardOld;

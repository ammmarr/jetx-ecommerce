import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../../assets/sliderImages/slide1.jpg";
import img2 from "../../assets/sliderImages/slide2.jpg";
import img3 from "../../assets/sliderImages/slide3.jpg";
import style from "./index.module.scss";
import variants from "../../utils/variants";
// interface HeroCardProps {
//   h1: string;
//   h2: string;
//   h3: string;
//   p: string;
//   bg: string;
// }
const HeroCard = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState("none");
  console.log(display);
  const heroSectionCardsData = [
    {
      h1: "ExperienceFuel Service",
      h2: "Jet Fuel anywhere in the world.",
      h3: "Integrated",
      p: " We have built robust partnerships with over 600 certified and internationally recognized fuel suppliers to provide you premium jet fuel at the most competitive rates",
      bg: img1,
    },
    {
      h1: "Trip Planning",
      h2: "Your best trip. Every time.",
      h3: "Integrated",
      p: " Our holistic flight support solutions ensure you enjoy the best trip every time. From finding optimized routes and coordinating flights, to securing permits and arranging dispatch services, we manage all facets of flight operations around the world.",
      bg: img2,
    },
    {
      h1: "Premier Experience",
      h2: "Elite travel management.",
      h3: "Integrated",
      p: " LWhether it is thrilling and adrenaline rushing, or relaxing and rejuvenating,our Experience Team will design a personalized trip of a lifetime for you.",
      bg: img3,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev == heroSectionCardsData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(display);

  const { h1, h2, h3, p, bg } = heroSectionCardsData[counter];

  return (
    <motion.div
      className={style.container}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // key={counter}
    >
      <AnimatePresence>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          key={counter}
          src={bg}
        />
      </AnimatePresence>

      <motion.div
        className={style.textContainer}
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.5,
              duration: 0.7,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        key={counter}
      >
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h1}
        </motion.h1>
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h2}
        </motion.h1>
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h3}
        </motion.h1>
        <motion.p variants={variants} transition={{ delay: 0, ease: "easeIn" }}>
          {p}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;

import { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c01d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <div className="skills">
        <motion.img src="/html.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/css.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/javascript.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/react.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/express.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/mongodb.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/nodejs.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/redux.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img src="/saas.png" alt="" whileHover={{ scale: 1.2 }} />
        <motion.img
          className="tailwind"
          src="/tailwind.png"
          alt=""
          whileHover={{ scale: 1.2 }}
        />
      </div>

      <motion.h1 style={{ y: yText }}>SKILLS</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yPlanet,
          backgroundImage: `url(${
            type === "services" ? "/planet.png" : "/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallex;

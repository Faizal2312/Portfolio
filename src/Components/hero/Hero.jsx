import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  intial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 5,
    transition: { duration: 2, repeat: Infinity, repeatType: "mirror" },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="imageContainer">
          <img src="/user.png" alt="" />
        </motion.div>
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="intial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>WEB DEVELOPER</motion.h2>
          <motion.h1 variants={textVariants}>
            Hey, I am <span>Faizal Khan</span> , a Full Stack Developer with a
            passion for building beautiful and user-friendly websites. I have a
            strong understanding of both front-end and back-end development. I
            am a quick learner and a team player, and I am confident that I can
            be valuyable asset to any web developement team.
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>
              {" "}
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

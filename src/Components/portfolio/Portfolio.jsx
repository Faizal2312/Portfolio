import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Dashboard",
    image: "/dashboard.png",
    desc: " Developed a React dashboard designed to provide accurate and precise insights from data. This tool allows users to analyze data efficiently and gain meaningful insights for better decision-making.",
    demo: "https://chipper-chimera-a1504c.netlify.app/",
  },
  {
    id: 2,
    title: "Fiverr Clone",
    image: "/fiverr.png",
    desc: "Developed a Fiverr clone using the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows users to create profiles, post services, and hire freelancers. This project showcases my skills in full-stack development and building complex web applications.    ",
    demo: "https://gilded-pika-2f2a0e.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce",
    image: "/ecommerce.png",
    desc: "Crafted an e-commerce landing page with captivating UI and seamless UX, featuring stunning design elements and intuitive navigation. Optimized for engagement and conversions, it offers a delightful shopping experience from product discovery to checkout.",
    demo: "https://nikycom.netlify.app/",
  },
  {
    id: 4,
    title: "Shopping Cart",
    image: "/shoppingcart.png",
    desc: "Crafted a shopping cart functionality app using React, showcasing a clean UI and a visually appealing interface. Every element is thoughtfully designed to offer seamless navigation and enhance user experience. ",
    demo: "https://shop-cartyy.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [500, -500]);

  let id;
  {
    id = item.id === 1 && "Projects";
  }

  return (
    <section id={id}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={`${item.demo}`} target="_blank">
              <button>Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

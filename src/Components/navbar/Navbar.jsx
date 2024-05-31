import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Faizal.dev
        </motion.span>
        <div className="social">
          <a href="#Homepage">
            <p>Home</p>
          </a>
          <a href="#Skills">
            <p>Skills</p>
          </a>
          <a href="#Projects">
            <p>Projects</p>
          </a>
          <a href="#Contact">
            <p>Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

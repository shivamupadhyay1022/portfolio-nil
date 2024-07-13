import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Me from "../assets/nilkanta.png"
import { nil } from "../assets";
import Navbar from "../components/Navbar";



const Intro = () => {
  return (
  <div className="absolute" >
  <motion.div
  initial={{height:0}}
  animate={{height: '55vh'}}
  transition={{ type: 'spring', duration:2, delay:1 }}
  >
      <div>
          <p className="  text-white flex flex-row md:flex-col justify-center text-2xl font-mono items-start p-4" >
              <h1  >Hi,</h1>
              <h3  >I'm Nilkanta Karak.</h3>
              <h6>I design and Code simple yet beautiful websites.</h6>
          </p>
      </div>
      <div>
          <motion.div
          initial={{opacity:0}}
  animate={{opacity: 1}}
  transition={{ duration:1, delay:2 }}
          >
              <img className="pic" src={nil} alt="Profile Pic" />
          </motion.div>
      </div>
  </motion.div>
  </div>
)};

export default Intro;

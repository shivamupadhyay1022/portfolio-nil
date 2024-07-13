import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Center from "../components/Center";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import Socialicons from "../components/Socialicons";
import Intro from "./Intro";
import Me from "../assets/react.svg";
import LogoBlack from "../components/LogoBlack";
import { nil } from "../assets";
function Home() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { staggerChildren: 0.5, duration: 1, delay: 1 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      { click ? <Socialicons dark={true}/> : <Socialicons/> }
      <div className="   ml-4 justify-center items-center">
         <Logo />
      </div>
      {click && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transformOrigin: "center left",
            transition: { staggerChildren: 0.5, duration: 1, delay: 0.5 },
          }}
          exit={{
            scaleX: 0,
            transformOrigin: "center left",
            transition: { staggerChildren: 0.5, duration: 1, delay: 1 },
          }}
          className="bg-black h-[50vh] md:h-[85vh] absolute left-[2%] md:top-[10%] md:left-0 w-[90vw] md:w-[50vw]"
        />
      )}
      {click && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "35vh" }}
          transition={{ type: "spring", duration: 2, delay: 1 }}
          className="absolute top-1/2 font-bold -space-y-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 "
        >
          <p className=" border-l-2 border-b-2 border-slate-200 text-white flex justify-center flex-col text-2xl font-mono items-start p-6">
            <h1>Hi,</h1>
            <h3>I'm Nilkanta Karak.</h3>
            <h6>I design and Code simple yet beautiful websites.</h6>
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex border-r-2 border-t-2 border-b-2 border-slate-800 justify-center items-center"
          >
            <img src={nil} />
          </motion.div>
        </motion.div>
      )}
      <Navbar click={click} />
      <div
        className=" absolute cursor-pointer"
        style={{
          top: `${click ? "70%" : "40%"}`,
          left: `${click ? "80%" : "45%"}`,
          transition: "all 0.6s ease",
        }}
      >
        <div onClick={() => handleClick()}>
          <Center />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;

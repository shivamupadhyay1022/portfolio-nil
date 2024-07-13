import React from "react";
import Transition from "../Transition";
import ParticleComponent from "../components/ParticleComponent";
import { motion } from "framer-motion";
import BigTittle from "../components/BigTittle";
import Socialicons from "../components/Socialicons";
import ConfigDark from "../components/config/particlesjs-config.json";
import LogoBlack from "../components/LogoBlack";
import Homenav from "../components/Homenav";

function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{opacity: 1, transition: {staggerChildren: 0.5, duration: 1, delay:1},}}
      exit={{  opacity:0, transition:{duration: 0.5}}}
      className="bg-black h-[100vh] "
     >
      <LogoBlack />
      <Homenav className="z-50"/>
      <div >
        <ParticleComponent props={ConfigDark} />
        <BigTittle text="ABOUT" top={"17%"} left="5%" />
        <div className="z-50">
          <Socialicons dark={true} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { staggerChildren: 0.5, duration: 0.8, delay: 1 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="border-2 p-8 w-[50vw]  z-30 rounded-2xl text-white justify-center items-center flex absolute left-[calc(5rem+5vw)] top-[15rem] backdrop-blur-[4px] font-mono"
        >
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I'm an independent freelancer and blogger. I
          love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;

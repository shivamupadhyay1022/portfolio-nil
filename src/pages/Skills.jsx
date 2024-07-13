import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Socialicons from "../components/Socialicons";
import particlemask from "../components/config/particle-mask.json"
import ParticleComponent from "../components/ParticleComponent";
import LogoBlack from "../components/LogoBlack";
import BigTittle from "../components/BigTittle";
import Homenav from "../components/Homenav";

const Skills = () => {
  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      animate={{opacity: 1, transition: {staggerChildren: 0.5, duration: 1, delay:1},}}
      exit={{  opacity:0, transition:{duration: 0.5}}}
    >
        <LogoBlack/>
        <Homenav/>
        <BigTittle text="Skills" top={"10%"} left={"10%"}/>
        <div className="flex  items-center justify-center h-[100vh]" >
        <Socialicons dark={true}/>
        <ParticleComponent props={particlemask}/>
      <div className=" flex flex-row space-x-32">
        {/* Coding Enthusiast block */}
        <div className="w-[24rem] h-[60vh] bg-white text-black rounded-2xl p-2 mr-4 border-2 group border-slate-800 flex flex-col flex-1 justify-between hover:bg-black hover:text-white">
          <div className="p-4 flex flex-col items-center justify-center space-y-4">
            <p className="font-semibold flex justify-center items-center text-2xl">
              <svg
                className="w-6 h-6 mx-2 text-black group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
              <span>Coding Enthusiast</span>
            </p>
            <p className="text-2xl">
            I love to solve coding questions related to real world problems.
              <br/>
              <strong>Platforms</strong>
              <ul className="list-disc ml-8">
                <li>CodeForces</li>
                <li>CodeChef</li>
                <li>LeetCode</li>
              </ul>
              <strong>Languages</strong>
              <ul className="list-disc ml-8" >
                <li>C++/C</li>
              </ul>
            </p>
          </div>
          <div className=" flex flex-row items-center justify-center">
            <NavLink to="/work"
              className="bg-black w-24 group-hover:bg-white text-center text-white group-hover:text-black p-2"
              style={{
                transition: "all 0.6s ease",
                borderRadius: "0 50px 0 50px",
              }}
            >
              CF
            </NavLink>
            <button></button>
          </div>
        </div>

        {/* full stack developer block */}
        <div className="w-[24rem] h-[60vh] bg-white text-black rounded-2xl p-2 mr-4 border-2 group border-slate-800 flex flex-col flex-1 justify-between hover:bg-black hover:text-white">
          <div className="p-4 flex flex-col items-center justify-center space-y-4">
            <p className="font-semibold flex justify-center items-center text-2xl">
              <svg
                class="w-6 h-6 text-black group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                />
              </svg>

              <span>Full Stack Developer</span>
            </p>
            <p className="text-2xl">
              I love to create design which speaks, Keep it clean, minimal and
              simple.
              <br/>
              <strong>I like to Design</strong>
              <ul className="list-disc ml-8" >
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul>
              <strong>Tools</strong>
              <ul className="list-disc ml-8">
                <li>Figma</li>
              </ul>
            </p>
          </div>
          <div className=" flex flex-row items-center justify-center">
            <NavLink to={"/work"}
              className="bg-black w-24 text-center group-hover:bg-white text-white group-hover:text-black p-2"
              style={{
                transition: "all 0.6s ease",
                borderRadius: "0 50px 0 50px",
              }}
            >
              Work
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Skills;

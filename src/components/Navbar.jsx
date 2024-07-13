import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../components/Homebut.css";

function Navbar({click}) {
  return (
    <div>
      {/* top */}
      <div className="font-semibold absolute items-center flex justify-between top-20 inset-x-8 md:top-2 ">
        <div className="hidden md:block text-inherit">
          <span>. .... .</span>
        </div>
        <NavLink to="./" className="box2 button2">
          <motion.h2
            initial={{
              x: -200,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className="flex justify-center items-center">
              <svg
                class="w-12 h-12 text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 21 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </p>
          </motion.h2>
        </NavLink>
        <NavLink target="_blank" href="mailto:codebucks27@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </NavLink>
      </div>
      {/* left */}
      <div className="absolute font-semibold text-2xl  top-1/2 left-2  md:left-4">
        <NavLink to="./work">
          <motion.h2
            initial={{
              x: -200,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className={` -rotate-90 ${click ? 'text-white': 'text-black'}`}>work</p>
          </motion.h2>
        </NavLink>
      </div>

      {/* bottom */}
      <div className="font-semibold absolute text-2xl items-center flex bottom-2 justify-center inset-x-8  ">
        <NavLink to="/about">
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About.
          </motion.h2>
        </NavLink>
      </div>
      {/* right */}
      <div className="absolute font-semibold text-2xl  top-1/2 -right-4  md:right-4">
        <NavLink to="/skills">
          <motion.h2
            initial={{
              x: 200,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className=" rotate-90">My Skills</p>
          </motion.h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

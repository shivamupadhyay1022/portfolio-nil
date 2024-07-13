import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Homebutwhite.css"
const Homenav = () => {
  return (
    <div className='absolute items-center flex justify-between top-20 left-1/2 md:top-2 z-[500]'>
    <NavLink to="/" className="box button3">
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
                class="w-12 h-12 text-gray-200 "
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
        </div>
  )
}

export default Homenav
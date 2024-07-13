import React from 'react'
import WorkCard from '../components/WorkCard'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules';
import ConfigLight from "../components/config/particlesjs-config-light.json"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Swiper.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination } from 'swiper/modules';
import ParticleComponent from '../components/ParticleComponent';
import Socialicons from '../components/Socialicons';
import BigTittle from '../components/BigTittle';
import { motion } from 'framer-motion';
import LogoBlack from "../components/LogoBlack"
import Homenav from '../components/Homenav';



const Work = () => {
    SwiperCore.use([Autoplay])
  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{opacity: 1, transition: {staggerChildren: 0.5, duration: 1, delay:1},}}
      exit={{  opacity:0, transition:{duration: 0.5}}}
     >
      <LogoBlack/>
      <Homenav/>
      <div className='flex  justify-center items-center h-[100vh]'>
        <ParticleComponent props={ConfigLight}/>
        <Socialicons dark={true}/>
        <BigTittle text="WORK" top={"17%"} left="5%" />
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay= {{
          delay: 350000,
          pauseOnMouseEnter: true
        }}
        speed={200}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 450,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        onPaginationShow={"-z-50"}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swiper2 swiper-slide2"
      >
        
        <SwiperSlide className='  w-[150px] md:w-[800px] h-full items-center flex self-center' >
        <WorkCard/>
        </SwiperSlide>
        <SwiperSlide className='w-[350px] md:w-[800px] h-full items-center flex self-center' >
        <WorkCard/>
        </SwiperSlide>
        <SwiperSlide className=' w-[300px] md:w-[800px] h-full items-center flex self-center' >
        <WorkCard/>
        </SwiperSlide>
        <SwiperSlide className=' w-[350px] md:w-[800px] h-full items-center flex self-center' >
        <WorkCard/>
        </SwiperSlide>
        <SwiperSlide className=' w-[350px] md:w-[800px] h-full items-center flex self-center' >
        <WorkCard/>
        </SwiperSlide>
       
      </Swiper>
      </div>
        </motion.div>
  )
}

export default Work
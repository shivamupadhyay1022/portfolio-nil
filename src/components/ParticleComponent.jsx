import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ConfigDark from "../components/config/particlesjs-config.json"


const ParticleComponent = ({props}) => {
    const particlesInit = useCallback (async (main) => {
        await loadFull(main);
      },[]);
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <div className='bg-black -z-[500]'> 
    <Particles
    id="tsparticles"
    options={props}
    init={particlesInit}
    loaded={particlesLoaded}
  /></div>
  )
}

export default ParticleComponent
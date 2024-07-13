import React from 'react'

const BigTittle = ({text,top,left,right}) => {
  return (
    <p className="absolute text-slate-400 opacity-40 font-bold text-6xl " style={{top:`${top}`, right: `${right}`,left:`${left}`}} >
        {text}
    </p>
  )
}

export default BigTittle
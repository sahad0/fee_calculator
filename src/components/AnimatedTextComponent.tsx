import React, { FC } from 'react'
import {motion} from 'framer-motion'
import { animationVarients1 } from '../extras/animation/animation'

interface AppProps  {
    text:string,
}

export const AnimatedTextComponent:FC<AppProps> = ({text}) => {
  return (
    <motion.div variants={animationVarients1} initial="initial" animate="animate" transition={{duration:1,delay:1}}>
        <motion.span className='text-[30px]' style={{fontFamily:"'Barlow', sans-serif"}}  >
        {text}
        </motion.span>
    </motion.div>
  )
}

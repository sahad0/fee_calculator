import React, { Dispatch, FC, SetStateAction } from 'react'
import { StateType } from '../types/types'
import { AnimatePresence,motion } from 'framer-motion'
import { animationVarientX } from '../extras/animation/animation'


interface Props  {
    state: StateType,
    loading:boolean,
}


export const ResultForm:FC<Props> = ({state,loading}):JSX.Element => {







  return (
    <AnimatePresence>
        {
            state.totalFee!==0 && (
                <motion.div  initial={{opacity:0}}  animate={{opacity:1,x:0}} exit={{opacity:0,x:0}}  transition={{delay:1}}>

                    <span className="animate-ping absolute inline-flex  rounded-full bg-sky-400 opacity-75 h-10 w-10"></span>
                    {
                        
                        state.totalFee!==0 && loading===false && (
                            <>
                            <motion.span className='text-[30px]' style={{fontFamily:"'Barlow', sans-serif"}}  >
                            {'Amount to be paid |'}
                            </motion.span>
                            <div className='text-[30px] text-green-600 mt-10' style={{fontFamily:"'Barlow', sans-serif"}} >{state.totalFee + '$'}</div>

                            <button onClick={()=>{alert('Payment Successful'),window.location.reload()}} className=" text-lg mt-10 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" style={{fontFamily:"'Barlow', sans-serif"}}>
                                Pay Now
                            </button>
                        </>
                        )
                    } 

                </motion.div>
            )
        }
       
    </AnimatePresence>
  )
}





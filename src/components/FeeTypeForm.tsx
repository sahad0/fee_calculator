import React, { Dispatch, FC, SetStateAction } from 'react'
import { FeeType, StateType } from '../types/types'
import { AnimatePresence } from 'framer-motion'
import { animationVarientX, animationVarients } from '../extras/animation/animation'
import Typewriter from '../extras/TypeWriter'
import { data } from '../data/FeeData'
import {motion} from 'framer-motion'


interface Props  {
    state: StateType,
    setState : Dispatch<SetStateAction<StateType>>
}

interface AppProps extends Props{
  handleFeeType? : ()=>void
}



export const FeeTypeForm:FC<AppProps> = ({state,setState}):JSX.Element => {


    const handleFeeType = (val:FeeType)=>{
        setState({...state,feeType:val});
    }


  return (
    <AnimatePresence>
    {
      state.feeType===null && (
          <motion.div key="modal" variants={animationVarientX} initial="initial" animate="animate" exit="exit"  transition={{duration:1}}>
              <Typewriter text='What do you have to pay for?'/>
            {/* FORM1 */}
              <motion.div variants={animationVarients} initial="initial" animate="animate"  transition={{delay:3,duration:1}} className='relative mt-44  '>
              
                <select className='block appearance-none w-80 lg:w-[700px] bg-gray-800 border border-gray-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500' onChange={(e)=>handleFeeType(e.target.value as FeeType)}>
                  <option value="null">-- Select FeeType --</option>
      
                  {Object.keys(data).map((fee) => (
                    
                    <option key={fee} value={fee}>
                      {fee}
                    </option>
                  ))}
                </select>
      
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"/></svg>
              </div>
      
              </motion.div>
          </motion.div>
        )
    }
        </AnimatePresence>

      
  )
}

import React, { Dispatch, FC, SetStateAction } from 'react'
import { CourseType, StateType } from '../types/types'
import { AnimatePresence , motion } from 'framer-motion'
import { data } from '../data/FeeData'
import { animationVarientX, animationVarients1 } from '../extras/animation/animation'



interface Props  {
    state: StateType,
    setState : Dispatch<SetStateAction<StateType>>,
    courses : string[],
}


interface AppProps extends Props {
  handleCourse : ()=>void,
}


export const CourseForm:FC<AppProps> = ({setState,state,courses}) => {

    const handleCourse = (val:CourseType)=>{
        setState({...state,course:val});
    
      }


  return (
    <AnimatePresence>
        {
          
          state.nationality!==null  && state.course===null && (
            <motion.div key="modal1" variants={animationVarientX} initial="initial" animate="animate" exit="exit"  transition={{enter:{duration:1,delay:1},exit:{duration:2,delay:0}}}>
            <motion.div variants={animationVarients1} initial="initial" animate="animate" transition={{duration:1,delay:1}}>
                <motion.span className='text-[30px]' style={{fontFamily:"'Barlow', sans-serif"}}  >
                {'Pick a Course'}
                </motion.span>
            </motion.div>
          <motion.div variants={animationVarients1} initial="initial" animate="animate"  transition={{delay:2,duration:2}} className='relative mt-28  '>

            <select className='block appearance-none w-80 lg:w-[700px] bg-gray-800 border border-gray-600 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500' onChange={(e)=>handleCourse(e.target.value as CourseType) }>
              <option value="null">-- Select Course --</option>
              {courses.map((course) => (
                <option key={course} value={Object.keys(data?.[state.feeType?state.feeType:'']?.[state.nationality ? state.nationality:'']).map((k)=>k)[0]}>
                  {course}
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

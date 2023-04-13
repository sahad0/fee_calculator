import './App.css'
import React, { FC, useEffect, useState } from 'react';
import { CourseType, FeeType, LevelType, NationalityType, StateType, TotalFeeType } from './types/types';
import { data } from './data/FeeData';
import Typewriter from './extras/TypeWriter';
import {AnimatePresence, motion} from 'framer-motion'
import { animationVarientX, animationVarients, animationVarients1 } from './extras/animation/animation';
import { FeeTypeForm } from './components/FeeTypeForm';
import { NationalityForm } from './components/NationalityForm';
import { CourseForm } from './components/CourseForm';
import { LevelForm } from './components/LevelForm';
import { ResultForm } from './components/ResultForm';





export default function App():JSX.Element {


  const [state,setState] = useState<StateType>({feeType:null,nationality:null,course:null,level:null,totalFee:0});
  const [loading,setLoading] = useState<boolean>(false);


  
  const courses =["Medical","Dental","Ayurveda"];

  const levels = ["UG","PG","UG-DIPLOMA","Ph.D"];


  useEffect(() => {
    let x:any ;
    if (state.level !== null && state.feeType && state.nationality && state.course) {
      setLoading(true);
      setState({...state,totalFee:data?.[state.feeType]?.[state.nationality]?.[state.course]?.[state.level]?.amount});

      x = setTimeout(()=>{
          setLoading(false);
      },4000);
    }

    return ()=>clearInterval(x);

  }, [state.level, state.feeType, state.nationality, state.course]);


  return (
   <div className='w-screen h-screen flex '>

    <div className='mt-60 ml-5 sm:ml-7 md:ml-15 lg:ml-60'>

        <FeeTypeForm state={state} setState={setState}  />    

        <NationalityForm setState={setState} state={state} />
     
        <CourseForm courses={courses} state={state}  setState={setState} />

        <LevelForm levels={levels} setState={setState} state={state} />

       
        <ResultForm state={state} loading={loading}/>


    </div>

   </div>
  )
}


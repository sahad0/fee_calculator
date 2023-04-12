import './App.css'
import React, { FC, useEffect, useState } from 'react';
import { CourseType, FeeType, LevelType, NationalityType, TotalFeeType } from './types/types';
import { data } from './data/FeeData';

interface AppProps{

}

const App:FC<AppProps> = ():JSX.Element=> {
  const [feeType, setFeeType] = useState<FeeType>(null);
  const [nationality, setNationality] = useState<NationalityType>(null);
  const [course, setCourse] = useState<CourseType>(null);
  const [level, setLevel] = useState<LevelType>(null);
  const [totalFee, setTotalFee] = useState<TotalFeeType>(0);


  
  const courses =["Medical","Dental","Ayurveda"];

  const levels = ["UG","PG","UG-DIPLOMA","Ph.D"];


  useEffect(()=>{
    if(level !==null){
      setTotalFee(data[feeType][nationality][course][level]['amount']);

    }
  },[level]);





  return (
   <>
        <label>
          Select Fee:
          <select  onChange={(e)=>setFeeType(e.target.value as FeeType)}>
            <option value="">-- Select FeeType --</option>

            {Object.keys(data).map((fee) => (
              
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
        </label>

        {
          feeType!==null && (
            <>
                <label htmlFor="nationality">Select a nationality:</label>
                <select name="nationality" id="nationality" onChange={(e)=>setNationality(e.target.value as NationalityType)}>
                  <option value=""></option>
                  {feeType!==null&& Object.keys(data?.[feeType]).map((nationality) => (
                    <option value={nationality} key={nationality}>
                      {nationality}
                    </option>
                  ))}
                </select>
            </>
          )
        }


        {
          
          feeType!==null && nationality!==null  && (
            <label>
            Select Course:
            <select  onChange={(e)=>setCourse(e.target.value as CourseType) }>
              <option value="">-- Select Course --</option>
              {  courses.map((course) => (
                <option key={course} value={Object.keys(data?.[feeType][nationality]).map((k)=>k)[0]}>
                  {course}
                </option>
              ))}
            </select>
          </label>
          )
        }

        {
          feeType!==null && nationality!==null && course!==null &&(
            <label>
            Select Level:
            <select  onChange={(e)=>setLevel(e.target.value as LevelType)}>
              <option value="">-- Select Level --</option>
              {Object.keys(data[feeType][nationality][course]).length>1 ? 
               Object.keys(data[feeType][nationality][course]).map(
                (level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                )
              )
            :
            levels.map((k)=>(
              <option key={k} value={Object.keys(data?.[feeType][nationality][course])}>
                {k}
              </option>
            ))
            
           
            }
            </select>
          </label>
          )


        }

        <div>{totalFee!==null && totalFee}</div>

   </>
  )
}

export default App

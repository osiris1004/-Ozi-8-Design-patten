import React, { useState } from 'react'
import { ControlledOnboardingFlow } from './2ControlledOnboardingFlow'

const StepOne = ({goToNext}) =>(
    <>
        <h1>Step 1</h1>
        <button onClick={()=>goToNext({name : "james"})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </>
)
const StepTwo = ({goToNext}) =>(
    <>
        <h1>Step 2</h1>
        <button onClick={()=>goToNext({age : 20})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </>
)
const StepThree = ({goToNext}) =>(
    <>
        <h1>Step 3</h1>
        <button onClick={()=>goToNext({color : "red"})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </>
)

export const ParentControlledOnboardingFlow = () => {

    const [onBoardingData, setOnBoardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const onNext = (stepData) =>{
        
        setOnBoardingData({...onBoardingData, ...stepData})
        setCurrentIndex(prev => prev+1)
    }
  return (
    <ControlledOnboardingFlow 
        currentIndex={currentIndex}
        onNext={onNext}
    >
        <StepOne/>
        <StepTwo/>
        <StepThree/>
    </ControlledOnboardingFlow>
  )
}


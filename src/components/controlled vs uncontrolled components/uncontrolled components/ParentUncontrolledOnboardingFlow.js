import React from 'react'
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow'
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

export const ParentUncontrolledOnboardingFlow = () => {
  return (
    <UncontrolledOnboardingFlow onfinish={data => {
    console.log(data)
    alert('Onboarding completed')
    }}>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
    </UncontrolledOnboardingFlow>
  )
}

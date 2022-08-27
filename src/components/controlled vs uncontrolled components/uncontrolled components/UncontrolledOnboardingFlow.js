import React, { Children, cloneElement, isValidElement, useState } from 'react'

export const UncontrolledOnboardingFlow = ({children, onfinish}) => {
    const [onBoardingData, setOnBoardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentChild = children[currentIndex]

    const goToNext = (stepData) =>{
        const nextIndex = currentIndex + 1;

        const updateData = {
          ...onBoardingData,
          ...stepData
        }
        console.log(updateData)

        if(nextIndex < children.length){
          setCurrentIndex(nextIndex)
        }else{
          onfinish(updateData)
        }

        setOnBoardingData(updateData)
    }
        //* this isValidElement() check if the  paramter is a react element
        //*react element is the return type of react component
    if(isValidElement(currentChild )){
      //*The React.cloneElement() function returns a copy of a specified element. 
      //*Additional props and children can be passed on in the React.cloneElement() function. 
      //*You would use this function when a parent component wants to add or modify the prop(s) of its children.
        return cloneElement(currentChild, {goToNext})
    }
  return  currentChild
  
}

import { SplitScreenUsingChildren } from "./SplitScreenUsingChildren"



const LeftHandComponent = ({name}) =>{
    return <h1>{name}!</h1>
}
const RightHandComponent = ({name}) =>{
    return <h1>{name}!</h1>
}

export const ParentSplitScreenUsingChildren = () => {
  return (
    <SplitScreenUsingChildren
        leftWeight='1/4'
        rightWeight='3/4'
    >
      <LeftHandComponent name={"james"}/>
      <RightHandComponent name={"mark"}/>
    </SplitScreenUsingChildren>
  )
}

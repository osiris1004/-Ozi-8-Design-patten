
import { SplitScreen } from './SplitScreen'

const LeftHandComponent = ({name}) =>{
    return <h1>{name}!</h1>
}
const RightHandComponent = ({name}) =>{
    return <h1>{name}!</h1>
}

export const ParentSplitScreen = () => {
  const names ={
    leftName :'parentTest1', 
    rightName :'parentTest2'
  }
  return (
    <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight='3/4'
        rightWeight='1/4'
        names={names}
    />
  )
}

import React from 'react'

//* resourceName is an array that is person and product

export const RegularList = ({items, resourceName, itemComponent : ItemComponent}) => {
  return (
    <>
        {items.map((item, idx)=>(
          //*this {...{[resourceName]: item}} === person={item}
            <ItemComponent key={idx} person={item}/>
        ))}
    </>
  )
}

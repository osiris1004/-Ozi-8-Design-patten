import React from 'react'

export const LargePersonListItem = ({person}) => {
    const {name, age, hairColor,hobbies} = person
  return (
    <div className="border border-red-200">
        <h3>{name}</h3>
        <p>Age : {age}</p>
        <p>HairColor : {hairColor}</p>
        <h3>Hobbies :</h3>
        <ul>
        {hobbies.map(item=><li key={item}> {item}</li>)}
        </ul>
    </div>
  )
}

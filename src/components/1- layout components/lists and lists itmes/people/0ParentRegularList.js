import React from 'react'
import { RegularList } from './0RegularList'
import { LargePersonListItem } from './LargPersonListItem'
import { SmallPersonListItem } from './SmallPersonListItem'
export const people = [
    {
        name :"john Doe",
        age : 54,
        hairColor : "brown",
        hobbies : ["swimming", "bicycling", "video game"]
    },
    {
        name :"Brenda Smith",
        age : 33,
        hairColor : "black",
        hobbies : ["golf", "mathematics"]
    },
    {
        name :"jane garcia",
        age : 2,
        hairColor : "blonde",
        hobbies : ["biology", "medicine", "gymnastics"]
    }
]

const products = [
    {
        name : "flat-screen tv",
        price : "300$",
        description : "hugo lcd screen, a freat deal",
        rating : 3.8
    },
    {
        name : "basletball",
        price : "10$",
        description : "just like you are pros use",
        rating : 3.8
    },
    {
        name : "running shoes",
        price : "120$",
        description : "state-of-the-art technology for optimum running",
        rating : 4.2
    }
]
export const ParentRegularList = () => {
  return (
   <>
    <RegularList 
    items={people}
    //* this resourceName is the name of the props in SmallPersonListItem and largPersonListItem
    resourceName="person"
    itemComponent={SmallPersonListItem}
    />

    <RegularList 
    items={people}
    //* this resourceName is the name of the props in SmallPersonListItem and largPersonListItem
    resourceName="person"
    itemComponent={LargePersonListItem}
    />
   </>
  )
}


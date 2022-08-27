import React, { useEffect, useState } from 'react'

export const ControlledForm = () => {

        const [name, setName] = useState('')
        const [age, setAge] = useState('')
        const [color, setColor] = useState('')

        useEffect(()=>{
            if(name.length<2){
                console.log("name should have at least 3 character")
            }
        },[name])

        return(
            <form >
                <input name ="name" type="text" placeholder='name' value={name} onChange={e=> setName(e.target.value)}/>
                <input name ="age" type="number" placeholder='age' value={age} onChange={e=> setAge(e.target.value)}/>
                <input name ="color" type="text" placeholder='color' value={color} onChange={e=> setColor(e.target.value)}/>
                <button>submit</button>
            </form>
        )
 
}

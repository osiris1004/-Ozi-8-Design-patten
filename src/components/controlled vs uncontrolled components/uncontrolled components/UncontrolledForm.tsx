import React, { useRef } from 'react'

export const UncontrolledForm = () => {
    //! ref is used to get value from our form
    const nameInput = useRef<HTMLInputElement>(null)
    const ageInput = useRef<HTMLInputElement>(null)
    const colorInput = useRef<HTMLInputElement>(null)
    

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        console.log(nameInput.current?.value)
        console.log(ageInput.current?.value)
        console.log(colorInput.current?.value)
        e.preventDefault() //* make use of this to prevent the default form behavior, that is reload pay after submit
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name ="name" type="text" placeholder='name' ref={nameInput}/>
        <input name ="age" type="number" placeholder='age' ref={ageInput}/>
        <input name ="color" type="text" placeholder='color' ref={colorInput}/>
        <input type="submit" value="submit"/>
    </form>
  )
}

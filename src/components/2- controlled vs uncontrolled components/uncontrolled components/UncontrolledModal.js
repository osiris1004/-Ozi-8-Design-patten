import React, { useState } from 'react'

export const UncontrolledModal = ({children}) => {

    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <button onClick={()=>setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Show Modal</button>
        {
            //* this && means if the condition is true show the jsx or not
            showModal &&(
                <div style={{backgroundColor: "rgba(190, 184, 184, 0.445)"}} onClick={()=>setShowModal(false)} className="py-20">
                    <div onClick={(e)=>e.stopPropagation()}>
                        <div>{children}</div>
                        <button onClick={()=>setShowModal(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> close modal</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

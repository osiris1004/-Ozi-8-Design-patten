import React from 'react'

export const Modal = ({children,shouldShow,setShouldShow}) => {

  console.log(shouldShow)
  return (
    <>
    <button onClick={()=>setShouldShow(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> open</button>
    {
        shouldShow && (
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}} onClick={()=>setShouldShow(false)} className="fixed top-0 left-0 h-full w-full">
                <div className='border border-red-200 h-full flex justify-center items-center'>
                  <div onClick={e => e.stopPropagation()} className="bg-white w-[50%] h-[50%]">
                      {children}
                      <br></br>
                      <button onClick={()=>setShouldShow(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> close</button>
                  </div>
                </div>
            </div>

            
        )
    }
    </>
  )
}

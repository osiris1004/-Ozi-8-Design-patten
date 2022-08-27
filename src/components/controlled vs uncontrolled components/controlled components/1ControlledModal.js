

export const ControlledModal = ({showModal, children, onRequestClose}) => {
        
            //* this && means if the condition is true show the jsx or not
    return showModal  ? (
                <div style={{backgroundColor: "rgba(190, 184, 184, 0.445)"}} onClick={onRequestClose} className="py-20">
                    <div onClick={(e)=>e.stopPropagation()}>
                        <div>{children}</div>
                        <button onClick={onRequestClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> close modal</button>
                    </div>
                </div>
            ) : null
        
    
  
}

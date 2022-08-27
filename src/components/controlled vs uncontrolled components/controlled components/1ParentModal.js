import { useState } from 'react';
import { ControlledModal } from './1ControlledModal'

export const ParentModal = () => {
  const [showModal, setShowModal] = useState(false)
  //* her is a good example of control component where all the state are
  //* managed by the parent and passed to my child component(control component)
  return (
    <div>
      <button onClick={()=>setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
      <ControlledModal showModal={showModal} onRequestClose={()=>setShowModal(false)}>
        <h1>hello boy</h1>
      </ControlledModal>
    </div>
  )
}


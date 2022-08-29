import React, { useState } from 'react'
import { LargePersonListItem } from '../lists and lists itmes/people/LargPersonListItem'
import { Modal } from './Modal'
import {people} from '../lists and lists itmes/people/0ParentRegularList'
export const ParentModal_ = () => {

    const [shouldShow, setShouldShow] = useState(false)
  return (
    <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        <LargePersonListItem person={people[0]}/>
    </Modal>
  )
}

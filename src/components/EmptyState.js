import React from 'react'
import emptyState from '../assets/empty-states.png'
import '../styles/empty-state.css'

function EmptyState() {
  return (
    <div className='empty_state__container'>
        <img src={emptyState} alt='empty-state'/>
        <span>
            Nothing Here
            <br/>
            It's empty, you do not have any notes here.
        </span>
    </div>
  )
}

export default EmptyState
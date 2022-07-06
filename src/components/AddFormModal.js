import React, { useEffect, useState } from 'react'
import CloseIcon from '../assets/close-icon.svg'
import '../styles/modal.css'
import { generateNote } from '../utils/generateNote';

function AddFormModal({notes, handleNotes, handleCloseAddForm}) {
  const [counter, setCounter] = useState(50);
  const [addInput, setAddInput] = useState({
    title: '',
    body: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if(counter > 0){
      const newNote = generateNote(addInput.title, addInput.body)
      console.log(newNote)
      console.log(notes)
      console.log([...notes, newNote])
      handleNotes([...notes, newNote])
      handleCloseAddForm()
    }
  }

  useEffect(() => {
    setCounter(50 - Number(addInput.title.length))
  }, [addInput])

  return (
    <div className='add__form__modal'>
      <div className='modal'>
          <div className='modal__header'>
              <h2 className='modal__header__title'>Add New Notes</h2>
              <button onClick={handleCloseAddForm}>
                  <img src={CloseIcon} alt='close-icon'/>
              </button>
          </div>
          <form className='modal__form' onSubmit={handleSubmit}>
            <span className='modal__form__counter'
              style={{color: counter < 0 ? 'red' : 'black'}}>
                {counter}
            </span>
            <input 
              className='modal__form__text' 
              id='input-title' 
              type='text' 
              placeholder='Title goes here' 
              name='title'
              onChange={(e) => setAddInput({title: e.target.value, body: addInput.body})}
              value={addInput.title}/>
            <textarea 
              className='modal__form__text' 
              id='input-body' 
              type='text' 
              placeholder='Type your notes here' 
              name='body'
              onChange={(e) => setAddInput({title: addInput.title, body: e.target.value})}
              value={addInput.body}/>
            <input className='modal__form__submit' type='submit' disabled={counter < 0}/>
          </form>
      </div>
    </div>
  )
}

export default AddFormModal
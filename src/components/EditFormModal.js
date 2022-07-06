import React, { useEffect, useState } from 'react'
import CloseIcon from '../assets/close-icon.svg'
import '../styles/modal.css'

function EditFormModal({notes, id, handleNotes, handleCloseEditForm}) {
  const [counter, setCounter] = useState(50);
  const [selectedNote, setSelectedNote] = useState({
    title: '',
    body: ''
  })

  const handleInput = e => {
    e.preventDefault()
    setSelectedNote({...selectedNote, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const editedNotes = notes.map(note => note.id === id ? {...selectedNote} : note)
    handleNotes(editedNotes)
    handleCloseEditForm()
  }

  useEffect(() => {
    setCounter(50 - Number(selectedNote.title.length))
  }, [selectedNote])

  useEffect(() => {
    const findNote = notes.find(note => note.id === id)
    setSelectedNote(findNote)
  }, [id, notes])

  return (
    <div className='edit__form__modal'>
      <div className='modal'>
          <div className='modal__header'>
              <h2 className='modal__header__title'>Add New Notes</h2>
              <button onClick={handleCloseEditForm}>
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
              onChange={handleInput}
              value={selectedNote.title}/>
            <textarea 
              className='modal__form__text' 
              id='input-body' 
              type='text' 
              placeholder='Type your notes here' 
              name='body'
              onChange={handleInput}
              value={selectedNote.body}/>
            <input className='modal__form__submit' type='submit' disabled={counter < 0}/>
          </form>
      </div>
    </div>
  )
}

export default EditFormModal
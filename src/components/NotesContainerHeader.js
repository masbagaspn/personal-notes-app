import React from 'react'
import '../styles/notes-container-header.css'

function NotesContainerHeader({activeCategory, handleOpenAddForm, handleActiveCategory}) {
  return (
    <div className='notes__container__header'>
        <h2>{activeCategory.replace('-', ' ')}</h2>
        <div className="notes__container__header__category">
            <span id='active-notes'
              style={{opacity: activeCategory === 'active-notes' ? 1 : .3}}
              onClick={handleActiveCategory}
            >
              Active Notes
            </span>
            <span id='archived'
              style={{opacity: activeCategory === 'archived' ? 1 : .3}}
              onClick={handleActiveCategory}
            >
              Archived
            </span>
        </div>
        <button onClick={handleOpenAddForm}>New Notes</button>
    </div>
  )
}

export default NotesContainerHeader
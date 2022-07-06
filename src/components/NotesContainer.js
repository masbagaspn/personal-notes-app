import React from 'react'
import NotesCardContainer from './NotesCardContainer'
import '../styles/notes-container.css'
import NotesContainerHeader from './NotesContainerHeader'

function NotesContainer({notes, searchInput, activeCategory, handleActiveCategory, handleOpenAddForm, handleOpenEditForm, handleStatusChange, handleOpenDialog}) {
  return (
    <div className='notes__container'>
        <NotesContainerHeader activeCategory={activeCategory} handleActiveCategory={handleActiveCategory} handleOpenAddForm={handleOpenAddForm}/>
        <NotesCardContainer notes={notes} searchInput={searchInput} activeCategory={activeCategory} handleOpenEditForm={handleOpenEditForm} handleStatusChange={handleStatusChange} handleOpenDialog={handleOpenDialog}/>
    </div>
  )
}

export default NotesContainer
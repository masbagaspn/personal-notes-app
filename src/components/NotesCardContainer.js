import React from 'react'
import NotesCard from './NotesCard'
import '../styles/notes-container-card.css'
import EmptyState from './EmptyState'

function NotesCardContainer({notes, searchInput, activeCategory, handleOpenEditForm, handleStatusChange, handleOpenDialog}) {
    const filteredNotes = searchInput ? notes.filter(note => note.title.includes(searchInput)) : notes
    const displayedNotes = activeCategory === 'active-notes' ? filteredNotes.filter(note => note.archived !== true) : filteredNotes.filter(note => note.archived === true)

    return (
        <div className='notes__container__card'>
            {displayedNotes.length > 0 ? displayedNotes.map((note, idx) => <NotesCard key={idx} noteDetails={note} handleOpenEditForm={handleOpenEditForm} handleStatusChange={handleStatusChange} handleOpenDialog={handleOpenDialog}/>) : <EmptyState />}
        </div>
    )
}

export default NotesCardContainer
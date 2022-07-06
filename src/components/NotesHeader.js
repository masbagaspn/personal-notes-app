import React from 'react'
import SearchBar from './SearchBar'
import '../styles/notes-header.css'

function NotesHeader({handleSearch}) {
  return (
    <div className='notes__header'>
        <h1>Personal Notes</h1>
        <SearchBar handleSearch={handleSearch}/>
    </div>
  )
}

export default NotesHeader
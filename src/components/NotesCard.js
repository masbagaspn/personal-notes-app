import React from 'react'
import EditIcon from '../assets/edit-icon.svg'
import DeleteIcon from '../assets/delete-icon.svg'
import { showFormattedDate } from '../utils'
import '../styles/notes-card.css'

function NotesCard({noteDetails: {id, title, createdAt, body, archived}, handleOpenEditForm, handleStatusChange, handleOpenDialog}) {
  
  return (
    <article className='card'>
      <div className="card__header">
        <h2 className='card__header__title'>{title}</h2>
        <span className='card__header__date'>{showFormattedDate(createdAt)}</span>
      </div>
      <p className='card__body'>{body}</p>
      <div className="card__action">
        <span className='card__action__status'
          style={{backgroundColor: archived ? 'yellow' : 'rgb(55, 255, 145)'}}
          onClick={() => handleStatusChange(id)}
        >
          {archived ? 'Archived' : 'Active'}
        </span>
        <div className='card__action__button'>
          <button className='card__action__button__edit' onClick={() => handleOpenEditForm(id)}>
            <img src={EditIcon} alt='edit-icon'/>
          </button>
          <button className='card__action__button__delete' onClick={() => handleOpenDialog(id)}>
            <img src={DeleteIcon} alt="delete-icon" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default NotesCard
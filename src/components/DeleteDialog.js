import React from 'react'
import TrashIcon from '../assets/delete-icon.svg'
import '../styles/delete-dialog.css'

function DeleteDialog({handleDeleteTrue, handleDeleteFalse}) {
  return (
    <div className='delete_dialog'>
        <div className='dialog'>
            <div className='dialog__header'>
              <img src={TrashIcon} alt='trahs-icon' className='dialog__header__icon' />
              <div className='dialog__header__text'>
                <h2 className='dialog__header__text__warning'>You are about to delete this note.</h2>
                <p className='dialog__header__text__desc'>This will delete your note from your storage. Are you sure?</p>
              </div>
            </div>
            <div className='dialog__action'>
              <button className='dialog_-action__cancel' onClick={handleDeleteFalse}>Cancel</button>
              <button className='dialog__action__delete' onClick={handleDeleteTrue}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteDialog
import { useState } from 'react';
import AddFormModal from './components/AddFormModal';
import DeleteDialog from './components/DeleteDialog';
import EditFormModal from './components/EditFormModal';
import NotesContainer from './components/NotesContainer';
import NotesHeader from './components/NotesHeader';
import './styles/app.css'
import { getInitialData } from './utils';

function App() {
  const [notes, setNotes] = useState(getInitialData())
  const [searchInput, setSearchInput] = useState('')
  const [activeCategory, setActiveCategory] = useState('active-notes')
  const [openAddForm, setOpenAddForm] = useState(false)
  const [editForm, setEditForm] = useState({
    show: false,
    id: null
  })
  const [deleteDialog, setDeleteDialog] = useState({
    show: false,
    id: null
  })
  // const [edit, setEdit] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const handleActiveCategory = (e) => {
    setActiveCategory(e.target.id)
  }

  const handleStatusChange = (id) => {
    const selectedNote = notes.find(note => note.id === id)
    if(selectedNote == null) return

    const changeStatusNote = {...selectedNote, archived: !selectedNote.archived}
    const updateNotes = notes.map(note => note.id === id ? {...changeStatusNote} : note)
    setNotes(updateNotes)
  }

  const handleNotes = obj => {
    setNotes(obj)
  }

  const handleOpenEditForm = id => {
    setEditForm({
      show: true,
      id
    })
  }

  const handleCloseEditForm = () => {
    setEditForm({
      show: false,
      id: null
    })
  }

  const handleOpenDialog = id => {
    setDeleteDialog({
      show: true,
      id
    })
  }

  const handleDeleteTrue = () => {
    if(deleteDialog.show && deleteDialog.id){
      let filteredNotes = notes.filter(note => note.id !== deleteDialog.id)
      setNotes(filteredNotes)
      setDeleteDialog({
        show: false,
        id: null
      })
    }
  }

  const handleDeleteFalse = () => {
    setDeleteDialog({
      show: false,
      id: null
    })
  }

  return (
    <div className="app__container">
      <NotesHeader handleSearch={handleSearch}/>
      <NotesContainer notes={notes} 
        searchInput={searchInput}
        activeCategory={activeCategory} 
        handleOpenAddForm={() => setOpenAddForm(true)}
        handleOpenEditForm={handleOpenEditForm} 
        handleOpenDialog={handleOpenDialog}
        handleActiveCategory={e => handleActiveCategory(e)} 
        handleStatusChange={handleStatusChange}
      />
      {openAddForm && <AddFormModal notes={notes} handleNotes={handleNotes} handleCloseAddForm={() => setOpenAddForm(false)}/>}
      {editForm.show && <EditFormModal notes={notes} id={editForm.id} handleNotes={handleNotes} handleCloseEditForm={handleCloseEditForm}/>}
      {deleteDialog.show && <DeleteDialog handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse}/>}
    </div>
  );
}

export default App;

import React from 'react'
import '../styles/searchbar.css'

function SearchBar({handleSearch}) {
  return (
    <div className='search_bar'>
        <input className='search_bar__input' 
          type="text" 
          onChange={e => handleSearch(e)}
          placeholder='Search Here'/>
    </div>
  )
}

export default SearchBar
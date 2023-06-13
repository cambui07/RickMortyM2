import React from 'react'
import SearchBar from './SearchBar'
import "../styles/Nav.css"

export default function Nav({onSearch}) {
  return (
    <div className='ContenedorNav'>
        <div className='DivSearchbar'>

        <SearchBar onSearch={onSearch} />
        </div>
    </div>
  )
}

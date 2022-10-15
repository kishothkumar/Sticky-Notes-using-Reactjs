import React from 'react'
import './Notes.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Notes = (props) => {
   
  const handleClick = () => {
    props.deleteNote(props.id)
  }

  return (
    <div className='note'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleClick} >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Notes
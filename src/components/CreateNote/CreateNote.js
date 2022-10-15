import React,{useState} from 'react'
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import './CreateNote.css';

const CreateNote = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const expand = () => {
    setIsExpanded(true);
  }

  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote((previous)=>{
      return{
        ...previous,
        [name]:value
      }
    })
  }

  const submitNote = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    setIsExpanded(false);
  }
  return (
    <div>
        <form className='create-note'>
          { isExpanded && <input name='title' 
                                placeholder='Title' 
                                type='text' 
                                onChange={handleChange} 
                                value={note.title} 
                                autoFocus />}
          <textarea name='content' 
                    placeholder='Take a note...' 
                    onClick={expand} 
                    onChange={handleChange} 
                    rows={isExpanded ? 3 : 1} 
                    value={note.content} />
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
    </div>
  )
}

export default CreateNote
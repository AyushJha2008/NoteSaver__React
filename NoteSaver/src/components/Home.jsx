import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToNotes, updateToNotes } from '../redux/noteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId")
  const dispatch = useDispatch();

  function createNote() {
    const note = {
      title: title,
      content: value,
      _id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
  
    if(noteId){
      //update
      dispatch(updateToNotes(note))
    }
    else{
      //create
      dispatch(addToNotes(note))
    }
    //after this
    setTitle(""); setValue(""); setSearchParams({});
  }

  return (
    <div className='cont'>
      <div className='home-cont'>
        <input className='home-input' type='text'
         placeholder='enter title here'
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
        />

        <button className='home-btn' onClick={createNote}>
          {noteId? "Update": "Create"}
        </button>
      </div>

      <div className='text-div'>
        <textarea value={value} placeholder='Enter content here' className='text-area'
          onChange={(e)=>setValue(e.target.value)} rows={20} />
      </div>
    </div>
  )
}

export default Home
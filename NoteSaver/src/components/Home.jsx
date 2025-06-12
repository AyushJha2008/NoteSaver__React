import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const noteId = searchParams.get("noteId")
  return (
    <div className='cont'>
      <div className='home-cont'>
        <input className='home-input' type='text'
         placeholder='enter title here'
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
        />

        <button className='home-btn'>
          {noteId? "update note": "create note"}
        </button>
      </div>

      <div>
        <textarea value={value} placeholder='Enter content here' className='text-area'
          onChange={(e)=>setValue(e.target.value)} rows={20} />
      </div>
    </div>
  )
}

export default Home
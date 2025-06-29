import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <div className="navbar">
        <span>Create Note</span>
        <span>My Notes</span>
      </div>

      <div className="createNote">
        <input className='noteTitle' type="text" placeholder='Enter Title of Note' />
        <button className='create-btn'>Create Note</button>
        <textarea className='textarea'></textarea>
      </div>
      <div className="myNotes">
        <h2>My Saved Notes</h2>
        <div className="note-grid">

          {/* note1 */}
          <div className="notes">
            <h1>Title</h1>
            <span>Created on DD/MM/YYYY</span>
            <div className='note-btns'>
              <button>Completed</button>
              <button>Delete</button>
            </div>
          </div>

          {/* note1 */}
          <div className="notes">
            <h1>Title</h1>
            <span>Created on DD/MM/YYYY</span>
            <div className='note-btns'>
              <button>Completed</button>
              <button>Delete</button>
            </div>
          </div>

          {/* note1 */}
          <div className="notes">
            <h1>Title</h1>
            <span>Created on DD/MM/YYYY</span>
            <div className='note-btns'>
              <button>Completed</button>
              <button>Delete</button>
            </div>
          </div>

          {/* note1 */}
          <div className="notes">
            <h1>Title</h1>
            <span>Created on DD/MM/YYYY</span>
            <div className='note-btns'>
              <button>Completed</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
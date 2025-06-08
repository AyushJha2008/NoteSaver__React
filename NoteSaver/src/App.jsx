import React from 'react'

const router = createBrowserRouter(
  [
    {path: "/",
      Element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {path:"/notes",
      Element: <div>
        <Navbar/>
        <Note/>
      </div>
    },
    {path:"/notes/:id",
      Element: <div>
        <Navbar/>
        <ViewNotes />
      </div>
    }
  ]
);

const App = () => {
  return (
    <div className='cont'>
        {/* navbar */}
    </div>
  )
}

export default App
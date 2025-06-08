import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewNotes from './components/ViewNotes';
import Note from './components/Note'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {path: "/",
      element:(
      <div>
        <Navbar/>
        <Home/>
      </div>)
    },
    {path:"/notes",
      element:( <div>
        <Navbar/>
        <Note/>
      </div>)
    },
    {path:"/notes/:id",
      element: <div>
        <Navbar/>
        <ViewNotes />
      </div>
    }
  ]);

const App = () => {
  return (
    <div className='app-cont'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
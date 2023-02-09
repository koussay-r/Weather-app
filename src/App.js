import React, { createContext, useState } from 'react'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Recentwork from './components/Recentwork'
import Service from './components/Service'
import './index.css'
export const modeContext=createContext()
export default function App() {
  const [dark_Light,setDark_Light]=useState(true)
  return (
    <div>

    
      <modeContext.Provider value={[dark_Light,setDark_Light]}>
      <div id="root1" className='mx-auto overflow-x-hidden mt-2 sm:max-w-[70%]'>
      <Navbar/>
      <Home/>
      <Profile/>
      <Experience/>
      <Service/>
      <Recentwork/>
      <Contact/>
      </div>
      <Copyright/>
      </modeContext.Provider>
    
    </div>
  )
}

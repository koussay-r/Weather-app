import React, { createContext, useState } from 'react'
import HomePgae from './components/HomePage/HomePgae'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
export const navbarContext=createContext()
export default function App() {
  const [menuShowed,setMenuShowed]=useState(false)
  return (
    <>
    <navbarContext.Provider value={[menuShowed,setMenuShowed]} >
    <BrowserRouter>
    <NavBar/> 
    <HomePgae/>
    </BrowserRouter>
    </navbarContext.Provider>
    </>
  )
}

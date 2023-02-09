import React, { createContext, useState } from 'react'
import HomePgae from './components/HomePage/HomePgae'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
import lenovo from "./assets/lenovo.png";
import logitech from "./assets/logitech.png";
import samsung from "./assets/samsung.png";
import sony from "./assets/sony.png";
import waitrose from "./assets/waitrose.png";
import webflow from "./assets/webflow.png";
export const navbarContext=createContext()
export default function App() {
  const [menuShowed,setMenuShowed]=useState(false)
  const AllImages=[
        {id:1,image:sony},
        {id:2,image:webflow},
        {id:3,image:samsung},
        {id:4,image:logitech},
        {id:5,image:lenovo},
        {id:6,image:waitrose},
  ]
  return (

    <>
    <navbarContext.Provider value={[menuShowed,setMenuShowed,AllImages]} >
    <BrowserRouter>
    <NavBar/> 
    <HomePgae/>
    </BrowserRouter>
    </navbarContext.Provider>
    </>
  )
}

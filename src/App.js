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
import bolaDisc from "./assets/bola disc.png";
import bolaHalo from "./assets/product1.png"
export const navbarContext=createContext()
export default function App() {
  const [menuShowed,setMenuShowed]=useState(false)
  const AllImages=[
        {id:1,name:"",image:sony},
        {id:2,name:"",image:webflow},
        {id:3,name:"",image:samsung},
        {id:4,name:"",image:logitech},
        {id:5,name:"",image:lenovo},
        {id:6,name:"",image:waitrose},
        {id:7,name:"",image:bolaDisc},
        {id:8,name:"",image:bolaHalo},
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

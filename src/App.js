import React, { createContext, useState } from 'react'
import HomePgae from './components/HomePage/HomePgae'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';
import lenovo from "./assets/lenovo.png";
import logitech from "./assets/logitech.png";
import samsung from "./assets/samsung.png";
import sony from "./assets/sony.png";
import waitrose from "./assets/waitrose.png";
import webflow from "./assets/webflow.png";
import bolaDisc from "./assets/bola disc.png";
import bolaHalo from "./assets/product1.png";
import cielo from './assets/cielo.png'
import bolaStears from './assets/bolaStears.jpg'
import cornerOffice from './assets/corner-office.jpg'
import solis from './assets/solis.jpg';
import giraffa from './assets/giraffa_light.png'
import bel_occhio from './assets/bel_occhio.jpg'
import belMont from './assets/belMont.jpg'
import bola_sphere from './assets/bola_sphere.jpg'
import uma_mini from './assets/uma_mini.jpg'
import contour from './assets/contour.jpg'
import circa from './assets/circa.png'
import Products from './components/All Products/Products';
import belmonte from './assets/Belmonte.jpg'
export const navbarContext=createContext()
export default function App() {
  const [menuShowed,setMenuShowed]=useState(false)
  const AllImages=[
        {id:1,name:"",price:0,image:sony},
        {id:2,name:"",price:0,image:webflow},
        {id:3,name:"",price:0,image:samsung},
        {id:4,name:"",price:0,image:logitech},
        {id:5,name:"",price:0,image:lenovo},
        {id:6,name:"",price:0,image:waitrose},
        {id:7,name:"",price:0,image:bolaDisc},
        {id:8,name:"",price:0,image:bolaHalo},
        {id:9,name:"",price:0,image:bolaStears},
        {id:10,name:"Giraffa",price:"99.99",image:giraffa},
        {id:11,name:"Solis",price:"79.99",image:solis},
        {id:12,name:"Corner Office",price:"190.00",image:cornerOffice},
        {id:13,name:"Cielo",price:"89.99",image:cielo},
        {id:14,name:"Uma Mini",price:"155.99",image:uma_mini},
        {id:15,name:"Contour",price:"245.99",image:contour},
        {id:16,name:"Circa",price:"398.99",image:circa},
        {id:17,name:"Bola Sphere",price:"789.99",image:bola_sphere},
        {id:18,name:"Bola Disc",price:"1,125.99",image:bolaDisc},
        {id:19,name:"Belmont",price:"717.99",image:belMont},
        {id:20,name:"Bel Occhio",price:"515.99",image:bel_occhio},
        {id:21,name:"Bola Halo",price:"159.99",image:bolaHalo},
        {id:22,name:"",price:0,image:belmonte},]
  return (
    <>
    <navbarContext.Provider value={[menuShowed,setMenuShowed,AllImages]} >
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' index element={<HomePgae/>}/>
      <Route path='Products' element={<Products/>}/>
    </Routes> 
    </BrowserRouter>
    </navbarContext.Provider>
    </>
  )
}

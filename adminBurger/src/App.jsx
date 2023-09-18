import { useState } from 'react'

// import './App.css';
import { RouterProvider } from 'react-router-dom'
// import routers from './routers';
import router from './routers/index'
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
function App() {


  return (
    <>
         <>
  
 
   <RouterProvider router={router} /> 
      
  
    </>
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from "react-router-dom";
import PageHome from '../Pages/PageHome';

const Approutes = () => {
  return (

    <Routes>
    <Route path="/" element={<PageHome />} />
    
    </Routes>
  )
}

export default App
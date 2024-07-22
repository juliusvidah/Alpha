import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Desk1 from './components/desk1/Desk1'
import Nav from './components/nav/Nav'
import ResetPassword from './components/resetpassword/ResetPassword'
import ConfirmPassword from './components/confirmpassword/ConfirmPassword'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/resetpassword' element={ <ResetPassword/>}/>
      <Route path='/confirmpassword' element={ <ConfirmPassword/>}/>
      <Route path='/desk1' element={ <Desk1/>}/>
     </Routes>
    </>
  )
}

export default App

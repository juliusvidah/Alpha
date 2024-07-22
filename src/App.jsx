import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Desk1 from './components/desk1/Desk1'
import Nav from './components/nav/Nav'
import ResetPassword from './components/resetpassword/ResetPassword'
import ConfirmPassword from './components/confirmpassword/ConfirmPassword'
import Dashboard from './components/dashboard/DashBoard'
import Tracker from './components/tracker/Tracker'
import './App.css'
import Terms from './components/terms/Terms'
import Faq from './components/faq/Faq'

function App() {

  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/resetpassword' element={ <ResetPassword/>}/>
      <Route path='/confirmpassword' element={ <ConfirmPassword/>}/>
      <Route path='/dashboard' element={ <Dashboard/>}/>
      <Route path='/tracker' element={ <Tracker/>}/>
      <Route path='/terms' element={ <Terms/>}/>
      <Route path='/faq' element={ <Faq/>}/>
      <Route path='/desk1' element={ <Desk1/>}/>
     </Routes>
    </div>
  )
}

export default App

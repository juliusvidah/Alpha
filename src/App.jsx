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
import Onboard from './components/onboard/Onboard'
import OTPInput from './components/otpinput/OTPInput'
import Reset from './components/reset/Reset'
import Transactions from './components/transactions/Transactions'
import Budget from './components/budget/Budget'

function App() {

  return (
    <div className='app'>
     <Routes>
      <Route path='/' element={ <Onboard/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/resetpassword' element={ <ResetPassword/>}/>
      <Route path='/confirmpassword' element={ <ConfirmPassword/>}/>
      <Route path='/dashboard' element={ <Dashboard/>}/>
      <Route path='/tracker' element={ <Tracker/>}/>
      <Route path='/transactions' element={ <Transactions/>}/>
      <Route path='/terms' element={ <Terms/>}/>
      <Route path='/otpinput' element={ <OTPInput/>}/>
      <Route path='/faq' element={ <Faq/>}/>
      <Route path='/budget' element={ <Budget/>}/>
      <Route path='/reset' element={ <Reset/>}/>
      <Route path='/desk1' element={ <Desk1/>}/>
     </Routes>
    </div>
  )
}

export default App

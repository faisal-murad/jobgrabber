import React from 'react'
import Maindiv from './components/MainPage/Maindiv'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Jobs from './components/MainPage/Jobs'
import Jobdetails from './components/MainPage/Jobdetails'
import Employeemain from './components/MainPage/Employeemain'
import Postjob from './components/MainPage/Postjob'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login'element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main' element={<Maindiv/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/jobdetails' element={<Jobdetails/>}/>
        <Route path='/employee' element={<Employeemain/>}/>
        <Route path='/postjob' element={<Postjob/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
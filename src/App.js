import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage';
import Login from './Components/Loginpage';
import EmailExtract from './Components/EmailExtract';
import ErrorPage from './Components/ErrorPage';
import SignUp from './Components/SignUp';
import ProtectRoute from './Components/ProtectorRoute';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectRoute Component={Home}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/email-extract' element={<ProtectRoute Component={EmailExtract}/>}/>``
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
 
  </>
}


export default App;

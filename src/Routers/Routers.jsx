import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './../Mainpages/Home';
import About  from './../Mainpages/About';
import Contact from './../Mainpages/Contact';
import Login from './../Mainpages/Login';

import Sign from '../Mainpages/Sigin';
import Addvoucher from './../Mainpages/Addvouchaer';
import Demologin from '../Mainpages/Demologin';



const Routers = () => {
  return (
    <> 
    <Routes>
      <Route path='/' element={<Navigate to = 'Home'/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/sign' element={<Sign/>}/> 
      <Route path='/voucher' element={<Addvoucher/>} />
      
      <Route path='/demo' element={<Demologin/>}/> 

    </Routes>
    
    </>
  );
}

export default Routers;

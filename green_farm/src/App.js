import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FaQ from './Pages/faq.jsx'
import Contact from './Pages/contact.jsx'
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'
import Home from './Pages/home.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/faq' element={<FaQ/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>

    </>
  );
}

export default App;

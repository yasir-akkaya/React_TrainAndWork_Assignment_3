import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FaQ from './Pages/Faq.jsx'
import Contact from './Pages/Contact.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Cart from './Pages/Cart.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import LoginRegister from './Pages/LoginRegister.jsx'
import Blogs from './Pages/Blogs.jsx'
import SingleBlog from './Pages/SingleBlog.jsx'
import ShopList from './Pages/ShopList.jsx'
import SearchResult from './Pages/SearchResult.jsx'
import ShopListAll from './Pages/ShopListAll.jsx';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dealProducts, setDealProducts] = useState([]);


  fetch('http://localhost:3000/Blogs')
    .then(response => response.json())
    .then(data => setBlogs(data))
    .catch(error => console.error('Error fetching blogs:', error));

    

    

  return (
    <>
      <Header />
      <Routes>
        {/* ANASAYFA */}
        <Route path='/' element={<Home /> }/>
        {/* DİNAMİK/SÜREKLİ DEĞİŞİM */}
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
        <Route path='/shop-list/:id' element={<ShopList/>}/>
        <Route path='/shop-list/' element={<ShopListAll/>}/>
        <Route path='/search-result' element={<SearchResult/>}/>

        {/* BLOG/STATİK YAPI */}
        <Route path="/blogs" element={<Blogs blogs={blogs} />} />
        <Route path="/single-blog/:blogId" element={<SingleBlog blogs={blogs} />} />


        {/* BENZER YAPIDAKİLER */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />


        {/*  FORM YAPISI */}
        <Route path='/login-register' element={<LoginRegister />} />


        {/* STATİK YAPIDAKİLER */}
        <Route path='/faq' element={<FaQ />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer />

    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FaQ from './Pages/faq.jsx'
import Contact from './Pages/contact.jsx'
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'
import Home from './Pages/home.jsx'
import SingleProduct from './Pages/singleProduct.jsx'
import Cart from './Pages/cart.jsx'
import Checkout from './Pages/checkout.jsx'
import Wishlist from './Pages/wishlist.jsx'
import LoginRegister from './Pages/loginRegister.jsx'
import Blogs from './Pages/blogs.jsx'
import SingleBlog from './Pages/singleBlog.jsx'
import ShopList from './Pages/shopList.jsx'
import SearchResult from './Pages/searchResult.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>

        {/* ANASAYFA */}
        <Route path='/' element={<Home />} />

        {/* DİNAMİK/SÜREKLİ DEĞİŞİM */}
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/shop-list' element={<ShopList />} />
        <Route path='/search-result' element={<SearchResult />} />

        {/* BLOG/STATİK YAPI */}
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/single-blog' element={<SingleBlog />} />


        {/* BENZER YAPIDAKİLER */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />


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

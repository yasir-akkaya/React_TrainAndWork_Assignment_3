import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/UserSlice";
import { allProducts } from '../redux/slices/CommerceSlice';

function Header() {
    const dispatch = useDispatch();

    function Logout() {
        dispatch(logout());
    }

    const user = useSelector((s) => s.UserSlice.currentUser);

    const all = () => {
        dispatch(allProducts());
    };

    

    return (
        <header>
            <div className="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12  text-center text-sm-end">
                            <div className="header-top-menu">
                                <ul>
                                    <li>
                                        {user && <p>Welcome <b>{user.name}</b>  !</p>}
                                    </li>
                                    {user && <li><Link to="wishlist">Wishlist</Link></li>}
                                    {user != null ?
                                        (<li>
                                            <a className='text-danger fw-bold' onClick={() => Logout()}>Logout</a>
                                        </li>
                                        )
                                        :
                                        <li>
                                            <Link className='text-success fw-bold' to="/login-register">Login/Register</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=======  End of Header top  =======*/}
            {/*=======  Header bottom  =======*/}
            <div className="header-bottom Header-bottom-one Header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12 text-lg-start text-md-center text-sm-center">
                            {/* logo */}
                            <div className="logo mt-15 mb-15">
                                <Link to="/">
                                    <img width={111} height={111} src="assets/images/logo.webp" className="img-fluid" alt="" />
                                </Link>
                            </div>
                            {/* end of logo */}
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="menubar-top d-flex justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15">
                                {/* Header phone number */}
                                <div className="header-contact d-flex">
                                    <div className="phone-icon">
                                        <img width={40} height={35} src="assets/images/icon-phone.webp" className="img-fluid" alt="" />
                                    </div>
                                    <div className="phone-number">
                                        Phone: <span className="number">1-888-123-456-89</span>
                                    </div>
                                </div>
                                {/* end of Header phone number */}
                                {/* search bar */}
                                <div className="header-advance-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search your product" />
                                        <button><span className="icon_search" /></button>
                                    </form>
                                </div>
                                {/* end of search bar */}
                                {/* shopping cart */}
                                <div className="shopping-cart" id="shopping-cart">
                                    <Link to="/cart">
                                        <div className="cart-icon d-inline-block">
                                            <span className="icon_bag_alt" />
                                        </div>
                                        <div className="cart-info d-inline-block">
                                            <p>Shopping Cart
                                                <span>
                                                   Click here to go Cart!
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li className="">
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li className="">
                                            <Link onClick={() => all()} to="/shop-list/">SHOP</Link>
                                        </li>
                                        <li><Link to="/blogs">BLOGS</Link></li>
                                        <li><Link to="/contact">CONTACT</Link></li>
                                        <li><Link to="/faq">FaQ</Link></li>

                                    </ul>
                                </nav>
                            </div>
                            {/* end of navigation section */}
                        </div>
                        <div className="col-12">
                            {/* Mobile Menu */}
                            <div className="mobile-menu d-block d-lg-none" />
                        </div>
                    </div>
                </div>
            </div>
            {/*=======  End of Header bottom  =======*/}
        </header>

    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

function header() {
    return (
        <header>
            {/*=======  header top  =======*/}
            <div className="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12  text-center text-sm-end">
                            <div className="header-top-menu">
                                <ul>
                                    <li>
                                        <Link to="/login-register">Login/Register</Link>
                                    </li>
                                    <li><Link to="wishlist">Wishlist</Link></li>
                                    <li><Link to="checkout">Checkout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=======  End of header top  =======*/}
            {/*=======  header bottom  =======*/}
            <div className="header-bottom header-bottom-one header-sticky">
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
                                {/* header phone number */}
                                <div className="header-contact d-flex">
                                    <div className="phone-icon">
                                        <img width={40} height={35} src="assets/images/icon-phone.webp" className="img-fluid" alt="" />
                                    </div>
                                    <div className="phone-number">
                                        Phone: <span className="number">1-888-123-456-89</span>
                                    </div>
                                </div>
                                {/* end of header phone number */}
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
                                                    0 items - $0.00
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                    {/* end of shopping cart */}
                                    {/* cart floating box */}
                                    <div className="cart-floating-box" id="cart-floating-box">
                                        <div className="cart-items">
                                            <div className="cart-float-single-item d-flex">
                                                <span className="remove-item"><Link to="#"><i className="fa fa-times" /></Link></span>
                                                <div className="cart-float-single-item-image">
                                                    <Link to="/single-product"><img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="" /></Link>
                                                </div>
                                                <div className="cart-float-single-item-desc">
                                                    <p className="product-title"> <Link to="single-product">Duis pulvinar
                                                        obortis eleifend </Link></p>
                                                    <p className="price"><span className="count">1x</span> $20.50</p>
                                                </div>
                                            </div>
                                            <div className="cart-float-single-item d-flex">
                                                <span className="remove-item"><Link to="#"><i className="fa fa-times" /></Link></span>
                                                <div className="cart-float-single-item-image">
                                                    <Link to="single-product"><img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="" /></Link>
                                                </div>
                                                <div className="cart-float-single-item-desc">
                                                    <p className="product-title"> <Link to="single-product">Fusce ultricies
                                                        dolor vitae</Link></p>
                                                    <p className="price"><span className="count">1x</span> $20.50</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-calculation">
                                            <div className="calculation-details">
                                                <p className="total">Subtotal <span>$22</span></p>
                                            </div>
                                            <div className="floating-cart-btn text-center">
                                                <Link to="checkout">Checkout</Link>
                                                <Link to="cart">View Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li className="">
                                            <Link to="/">HOME</Link>
                                        </li>
                                        <li className="">
                                            <Link to="/shop-list">SHOP</Link>
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
            {/*=======  End of header bottom  =======*/}
        </header>

    )
}

export default header
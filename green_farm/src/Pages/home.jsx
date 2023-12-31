import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div>
            <div className="slider category-slider mb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3>top categories</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-slider-container">
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Vegetables">
                                            <img width={121} height={121} src="assets/images/categories/category1.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Vegetables</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Fast Food">
                                            <img width={121} height={121} src="assets/images/categories/category2.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Fast Food</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Fish & Meats">
                                            <img width={121} height={121} src="assets/images/categories/category3.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Fish &amp; Meats</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Fruits">
                                            <img width={121} height={121} src="assets/images/categories/category4.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Fruits</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Salads">
                                            <img width={121} height={121} src="assets/images/categories/category5.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Salads</Link>
                                        </h3>
                                    </div>
                                </div>
                                <div className="single-category col-2 float-start">
                                    <div className="category-image">
                                        <Link to="shop-list" title="Bread">
                                            <img width={121} height={121} src="assets/images/categories/category6.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                    <div className="category-title">
                                        <h3>
                                            <Link to="shop-list"> Bread</Link>
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="double-banner-section mb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-xs-35">
                            <div className="single-banner">
                                <Link to="shop-list">
                                    <img width={570} height={170} src="https://source.unsplash.com/random/675x200/?Fruit" className="img-fluid" alt="" />
                                    <div width={570} height={170} className='bg-success text-light text-center'> <p>CLICK TO START SHOPPING</p></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="single-banner">
                                <Link to="shop-list">
                                    <img width={570} height={170} src="https://source.unsplash.com/random/675x200/?Vegetable" className="img-fluid" alt="" />
                                    <div width={570} height={170} className='bg-success text-light text-center'> <p>CLICK TO START SHOPPING</p></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-product-image-gallery mb-80 pt-120 section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-product-container">
                                <div className="row no-gutters">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-1.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-2.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-3.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-4.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-5.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-featured-product">
                                            <Link to="single-product">
                                                <img width={390} height={229} src="assets/images/product-banners/fullbanner-6.webp" className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider multisale-slider mb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3>greenfarm deal of the day</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="multisale-slider-wrapper">
                                <div className="gf-product multisale-slider-product col-3 float-start">
                                    <div className="image">
                                        <Link to="single-product">
                                            <span className="onsale">Sale!</span>
                                            <img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="" />
                                        </Link>
                                        <div className="product-hover-icons">
                                            <Link to="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></Link>
                                            <Link to="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> </Link>
                                        </div>
                                    </div>
                                    <div className="product-countdown" data-countdown="2023/05/01" />
                                    <div className="product-content">
                                        <div className="product-categories">
                                            <Link to="shop-list">Fast Foods</Link>,
                                            <Link to="shop-list">Vegetables</Link>
                                        </div>
                                        <h3 className="product-title"><Link to="single-product">Ornare sed consequat nisl eget</Link></h3>
                                        <div className="price-box">
                                            <span className="main-price">$89.00</span>
                                            <span className="discounted-price">$80.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="gf-product multisale-slider-product col-3 float-start">
                                    <div className="image">
                                        <Link to="single-product">
                                            <span className="onsale">Sale!</span>
                                            <img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="" />
                                        </Link>
                                        <div className="product-hover-icons">
                                            <Link to="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></Link>
                                            <Link to="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> </Link>
                                        </div>
                                    </div>
                                    <div className="product-countdown" data-countdown="2023/02/01" />
                                    <div className="product-content">
                                        <div className="product-categories">
                                            <Link to="shop-list">Fast Foods</Link>,
                                            <Link to="shop-list">Vegetables</Link>
                                        </div>
                                        <h3 className="product-title"><Link to="single-product">Ornare sed consequat nisl eget</Link></h3>
                                        <div className="price-box">
                                            <span className="main-price">$89.00</span>
                                            <span className="discounted-price">$80.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="gf-product multisale-slider-product col-3 float-start">
                                    <div className="image">
                                        <Link to="single-product">
                                            <span className="onsale">Sale!</span>
                                            <img width={350} height={350} src="assets/images/products/product04.webp" className="img-fluid" alt="" />
                                        </Link>
                                        <div className="product-hover-icons">
                                            <Link to="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></Link>
                                            <Link to="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> </Link>
                                        </div>
                                    </div>
                                    <div className="product-countdown" data-countdown="2023/05/21" />
                                    <div className="product-content">
                                        <div className="product-categories">
                                            <Link to="shop-list">Fast Foods</Link>,
                                            <Link to="shop-list">Vegetables</Link>
                                        </div>
                                        <h3 className="product-title"><Link to="single-product">Ornare sed consequat nisl eget</Link></h3>
                                        <div className="price-box">
                                            <span className="main-price">$89.00</span>
                                            <span className="discounted-price">$80.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="gf-product multisale-slider-product col-3 float-start">
                                    <div className="image">
                                        <Link to="single-product">
                                            <span className="onsale">Sale!</span>
                                            <img width={350} height={350} src="assets/images/products/product05.webp" className="img-fluid" alt="" />
                                        </Link>
                                        <div className="product-hover-icons">
                                            <Link to="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></Link>
                                            <Link to="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> </Link>
                                        </div>
                                    </div>
                                    <div className="product-countdown" data-countdown="2022/01/10" />
                                    <div className="product-content">
                                        <div className="product-categories">
                                            <Link to="shop-list">Fast Foods</Link>,
                                            <Link to="shop-list">Vegetables</Link>
                                        </div>
                                        <h3 className="product-title"><Link to="single-product">Ornare sed consequat nisl eget</Link></h3>
                                        <div className="price-box">
                                            <span className="main-price">$89.00</span>
                                            <span className="discounted-price">$80.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tripple-banner-section mb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-xs-35">
                            <div className="single-banner">
                                <Link to="shop-list">
                                    <img width={383} height={531} src="https://source.unsplash.com/random/385x530/?Farm" className="img-fluid" alt="" />
                                    <div width={383} height={170} className='bg-success text-light text-center'> <p>CLICK TO START SHOPPING</p></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-xs-35">
                            <div className="single-banner">
                                <Link to="shop-list">
                                    <img width={383} height={531} src="https://source.unsplash.com/random/385x530/?fruit" className="img-fluid" alt="" />
                                    <div width={383} height={170} className='bg-success text-light text-center'> <p>CLICK TO START SHOPPING</p></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-banner">
                                <Link to="shop-list">
                                    <img width={383} height={531} src="https://source.unsplash.com/random/385x530/?vegetable " className="img-fluid" alt="" />
                                    <div width={383} height={170} className='bg-success text-light text-center'> <p>CLICK TO START SHOPPING</p></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider brand-logo-slider mb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3>brand logos</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-logo-wrapper pt-20 pb-20">
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand1.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand2.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand3.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand4.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand5.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-2 float-start">
                                    <div className="single-brand-logo">
                                        <Link to="#">
                                            <img width={186} height={92} src="assets/images/brands/brand6.webp" className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default home
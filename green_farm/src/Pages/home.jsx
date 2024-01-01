import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts, getWishlist } from "../redux/slices/CommerceSlice";
import { filterByCategory, allProducts, selectCategory, selectedCategory } from "../redux/slices/CommerceSlice";

function Home() {

    const dispatch = useDispatch();
    const products = useSelector((s) => s.CommerceSlice.filteredProducts);
    const categories = useSelector((s) => s.CommerceSlice.categories);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [dispatch]);

    const filter = (id)=>{
        dispatch(filterByCategory(id))
    }

   


    const topFour = products.filter((item, index) => index < 4);
    const sixProducts = products.filter((item, index) => index < 25 && index > 18);
    const [timeRemaining, setTimeRemaining] = useState(3600);




    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime === 0) {
                    clearInterval(timer);
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;




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
                                {categories.map(category => (
                                    <div className="single-category col-2 float-start" key={category.id}>
                                        <div className="category-image">
                                            <Link onClick={() => filter(category.id)} to={`/shop-list/${category.id}`} title="Vegetables">
                                                <img width={121} height={121} src={category.image_slug} className="img-fluid rounded-circle" alt="" />
                                            </Link>
                                        </div>
                                        <div className="category-title">
                                            <h3>
                                                <Link to="shop-list"> {category.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}

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
                                    {sixProducts.map(item => (
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="single-featured-product">
                                                <Link to={`single-product/${item.id}`}>
                                                    <img width={350} height={350} src={item.image} className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))}

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
                                {/* Başla */}
                                {topFour.map(product => (
                                    <div className="gf-product multisale-slider-product col-3 float-start" key={product.id}>
                                        <div className="image">
                                            <Link to={`single-product/${product.id}`}>
                                                <span className="onsale">Sale!</span>
                                                <img width={350} height={350} src={product.image} className="img-fluid" alt="" />
                                            </Link>
                                            <div className="product-hover-icons">
                                                <Link to="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></Link>
                                                <Link to="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> </Link>
                                            </div>
                                        </div>
                                        <div className="product-countdown" data-countdown="2023/05/01" />
                                        <div className="product-content">
                                            <h3 className="product-title"><Link to={`single-product/${product.id}`}>{product.title}</Link></h3>
                                            <div className="price-box">
                                                <span className="main-price">$ {product.price * 1.5}</span>
                                                <span className="discounted-price">$ {product.price}</span>
                                            </div>
                                        </div>
                                        <div className="container mt-5">
                                            <div className="text-center bg-success">
                                                <h4 className='text-light'>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* bitir */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tripple-banner-section mb-35 mt-35">
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

export default Home
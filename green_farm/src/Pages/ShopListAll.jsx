import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

function ShopList() {

  const listedItems = useSelector((state) => state.CommerceSlice.filteredProducts);

  return (
    <div className="shop-page-container mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-sm-35 mb-xs-35">
            {/*=======  shop page banner  =======*/}
            <div className="shop-product-wrap list row no-gutters mb-35">
              {/* BAŞLA */}
              {listedItems && listedItems.map(item => (

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={item.id}>

                  <div className="gf-product shop-list-view-product">
                    <div className="image">
                      <Link to={`/single-product/${item.id}`}>
                        <span className="onsale">Sale!</span>
                        <img width={350} height={350} src={item.image} className="img-fluid" alt="" />
                      </Link>
                      <div className="product-hover-icons">
                      </div>
                    </div>
                    <div className="product-content">
                      <h3 className="product-title"><Link to={`/single-product/${item.id}`}>{item.title}</Link></h3>
                      <div className="price-box mb-20">
                        <span className="main-price">{item.price * 1.5}</span>
                        <span className="discounted-price">{item.price}</span>
                      </div>
                    </div>
                  </div>
                  {/*=======  End of Shop list view product  =======*/}
                </div>
              ))}
              {/* BİTİŞ */}

            </div>
            {/*=======  End of Grid list view  =======*/}
            {/*=======  Pagination container  =======*/}
            {/*=======  End of Pagination container  =======*/}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShopList
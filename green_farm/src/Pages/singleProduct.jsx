import React from 'react'

function singleProduct() {
  return (
    <div>
      <div className="single-product-content ">
        <div className="container">
          {/*=======  single product content container  =======*/}
          <div className="single-product-content-container mb-35">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* product image gallery */}
                <div className="product-image-slider d-flex flex-custom-xs-wrap flex-sm-nowrap align-items-center mb-sm-35">
                  {/*Modal Tab Menu Start*/}
                  <div className="product-small-image-list">
                    <div className="nav small-image-slider-single-product" role="tablist">
                      <div className="single-small-image img-full">
                        <a data-bs-toggle="tab" id="single-slide-tab-1" href="#single-slide1"><img width={600} height={600} src="assets/images/big-product-image/product04.webp" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="single-small-image img-full">
                        <a data-bs-toggle="tab" id="single-slide-tab-2" href="#single-slide2"><img width={600} height={600} src="assets/images/big-product-image/product05.webp" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="single-small-image img-full">
                        <a data-bs-toggle="tab" id="single-slide-tab-3" href="#single-slide3"><img width={600} height={600} src="assets/images/big-product-image/product06.webp" className="img-fluid" alt="" /></a>
                      </div>
                      <div className="single-small-image img-full">
                        <a data-bs-toggle="tab" id="single-slide-tab-4" href="#single-slide4"><img width={600} height={600} src="assets/images/big-product-image/product07.webp" className="img-fluid" alt="" /></a>
                      </div>
                    </div>
                  </div>
                  {/*Modal Tab Menu End*/}
                  {/*Modal Tab Content Start*/}
                  <div className="tab-content product-large-image-list">
                    <div className="tab-pane fade show active" id="single-slide1" role="tabpanel" aria-labelledby="single-slide-tab-1">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img easyzoom img-full">
                        <img width={600} height={600} src="assets/images/big-product-image/product04.webp" className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product04.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img easyzoom img-full">
                        <img width={600} height={600} src="assets/images/big-product-image/product05.webp" className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product05.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="tab-pane fade" id="single-slide3" role="tabpanel" aria-labelledby="single-slide-tab-3">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img easyzoom img-full">
                        <img width={600} height={600} src="assets/images/big-product-image/product06.webp" className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product06.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                    <div className="tab-pane fade" id="single-slide4" role="tabpanel" aria-labelledby="single-slide-tab-4">
                      {/*Single Product Image Start*/}
                      <div className="single-product-img easyzoom img-full">
                        <img width={600} height={600} src="assets/images/big-product-image/product07.webp" className="img-fluid" alt="" />
                        <a href="assets/images/big-product-image/product07.webp" className="big-image-popup"><i className="fa fa-search-plus" /></a>
                      </div>
                      {/*Single Product Image End*/}
                    </div>
                  </div>
                  {/*Modal Content End*/}
                </div>
                {/* end of product image gallery */}
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* product quick view description */}
                <div className="product-feature-details">
                  <h2 className="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>
                  <p className="product-rating">
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star active" />
                    <i className="fa fa-star" />
                    <a href="#">(1 customer review)</a>
                  </p>
                  <h2 className="product-price mb-15">
                    <span className="main-price">$12.90</span>
                    <span className="discounted-price"> $10.00</span>
                  </h2>
                  <p className="product-description mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis
                    vulputate, tristique ut lectus</p>
                  <div className="cart-buttons mb-20">
                    <div className="pro-qty mr-20 mb-xs-20">
                      <input type="text" defaultValue={1} />
                    </div>
                    <div className="add-to-cart-btn">
                      <a href="#"><i className="fa fa-shopping-cart" /> Add to Cart</a>
                    </div>
                  </div>
                  <div className="single-product-action-btn mb-20">
                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" /> Add to
                      wishlist</a>
                  </div>
                  
                </div>
                {/* end of product quick view description */}
              </div>
            </div>
          </div>
          {/*=======  End of single product content container  =======*/}
        </div>
      </div>
      {/*=====  End of single product content  ======*/}
      {/*=============================================
    =            single product tab         =
    =============================================*/}
      <div className="single-product-tab-section mb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-slider-wrapper">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-selected="true">Description</a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p className="product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                      obcaecati tempore reiciendis neque facere! Eos, necessitatibus? Fugit iure veritatis
                      quidem velit quaerat quos qui pariatur dolore facilis, aliquid quae voluptatibus
                      dicta. Quae harum velit hic molestias, eius ab cum quidem voluptates modi maiores
                      laboriosam iusto excepturi ex, recusandae aut, facere earum ad vero aperiam. Minima
                      dolores dignissimos ab ipsam atque placeat sapiente officia debitis nobis porro at
                      quia veritatis, quidem id repudiandae ex tempore non. Enim soluta explicabo atque
                      adipisci itaque.</p>
                  </div>
                  <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="features-tab">
                    <table className="table-data-sheet">
                      <tbody>
                        <tr className="odd">
                          <td>Name</td>
                          <td>Kaoreet lobortis sagittis laoreet</td>
                        </tr>
                        <tr className="even">
                          <td>Color</td>
                          <td>Yellow</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of single product tab  ======*/}
      {/*=============================================
	=            Related Product slider         =
	=============================================*/}
      <div className="slider related-product-slider mb-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  multisale  slider section title  =======*/}
              <div className="section-title">
                <h3>Related Product</h3>
              </div>
              {/*=======  End of multisale slider section title  =======*/}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=======  related product slider wrapper  =======*/}
              <div className="related-product-slider-wrapper">
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product float-start col-3">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product float-start col-3">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product float-start col-3">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product03.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product float-start col-3">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product04.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                
                {/*=======  End of single related slider product  =======*/}
              </div>
              {/*=======  End of related product slider wrapper  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of Related product slider  ======*/}
      {/*=============================================
	=            Upsell Product slider         =
	=============================================*/}
      <div className="slider related-product-slider mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  multisale  slider section title  =======*/}
              <div className="section-title">
                <h3>Upsell Product</h3>
              </div>
              {/*=======  End of multisale slider section title  =======*/}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*=======  related product slider wrapper  =======*/}
              <div className="related-product-slider-wrapper">
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product col-3 float-start">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product col-3 float-start">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product col-3 float-start">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product03.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                {/*=======  End of single related slider product  =======*/}
                {/*=======  single related slider product  =======*/}
                <div className="gf-product related-slider-product col-3 float-start">
                  <div className="image">
                    <a href="single-product.html">
                      <span className="onsale">Sale!</span>
                      <img width={350} height={350} src="assets/images/products/product04.webp" className="img-fluid" alt="" />
                    </a>
                    <div className="product-hover-icons">
                      <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt" /></a>
                      <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt" />
                      </a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-categories">
                      <a href="shop-left-sidebar.html">Fast Foods</a>,
                      <a href="shop-left-sidebar.html">Vegetables</a>
                    </div>
                    <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl
                      eget</a></h3>
                    <div className="price-box">
                      <span className="main-price">$89.00</span>
                      <span className="discounted-price">$80.00</span>
                    </div>
                  </div>
                </div>
                
                {/*=======  End of single related slider product  =======*/}
              </div>
              {/*=======  End of related product slider wrapper  =======*/}
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default singleProduct
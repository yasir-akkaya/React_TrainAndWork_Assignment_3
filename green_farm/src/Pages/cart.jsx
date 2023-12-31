import React from 'react'

function Cart() {
    return (
        <div>
            <div className="page-section section mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                {/*=======  Cart table  =======*/}
                                <div className="cart-table table-responsive mb-40">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Image</th>
                                                <th className="pro-title">Product</th>
                                                <th className="pro-price">Price</th>
                                                <th className="pro-quantity">Quantity</th>
                                                <th className="pro-subtotal">Total</th>
                                                <th className="pro-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product01.webp" className="img-fluid" alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">Cillum dolore tortor nisl fermentum</a></td>
                                                <td className="pro-price"><span>$29.00</span></td>
                                                <td className="pro-quantity">
                                                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                                </td>
                                                <td className="pro-subtotal"><span>$29.00</span></td>
                                                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                            </tr>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product02.webp" className="img-fluid" alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">Auctor gravida pellentesque</a></td>
                                                <td className="pro-price"><span>$30.00</span></td>
                                                <td className="pro-quantity">
                                                    <div className="pro-qty"><input type="text" defaultValue={2} /></div>
                                                </td>
                                                <td className="pro-subtotal"><span>$60.00</span></td>
                                                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                            </tr>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product03.webp" className="img-fluid" alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">Condimentum posuere consectetur</a></td>
                                                <td className="pro-price"><span>$25.00</span></td>
                                                <td className="pro-quantity">
                                                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                                </td>
                                                <td className="pro-subtotal"><span>$25.00</span></td>
                                                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                            </tr>
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img width={350} height={350} src="assets/images/products/product04.webp" className="img-fluid" alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">Habitasse dictumst elementum</a></td>
                                                <td className="pro-price"><span>$11.00</span></td>
                                                <td className="pro-quantity">
                                                    <div className="pro-qty"><input type="text" defaultValue={1} /></div>
                                                </td>
                                                <td className="pro-subtotal"><span>$11.00</span></td>
                                                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/*=======  End of Cart table  =======*/}
                            </form>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    {/*=======  Calculate Shipping  =======*/}
                                    <div className="calculate-shipping">
                                        <h4>Calculate Shipping</h4>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-25">
                                                    <select className="nice-select">
                                                        <option>Bangladesh</option>
                                                        <option>China</option>
                                                        <option>country</option>
                                                        <option>India</option>
                                                        <option>Japan</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-12 mb-25">
                                                    <select className="nice-select">
                                                        <option>Dhaka</option>
                                                        <option>Barisal</option>
                                                        <option>Khulna</option>
                                                        <option>Comilla</option>
                                                        <option>Chittagong</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-12 mb-25">
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                </div>
                                                <div className="col-md-6 col-12 mb-25">
                                                    <input type="submit" defaultValue="Estimate" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*=======  End of Calculate Shipping  =======*/}
                                    {/*=======  Discount Coupon  =======*/}
                                    <div className="discount-coupon">
                                        <h4>Discount Coupon Code</h4>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-25">
                                                    <input type="text" placeholder="Coupon Code" />
                                                </div>
                                                <div className="col-md-6 col-12 mb-25">
                                                    <input type="submit" defaultValue="Apply Code" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*=======  End of Discount Coupon  =======*/}
                                </div>
                                <div className="col-lg-6 col-12 d-flex">
                                    {/*=======  Cart summery  =======*/}
                                    <div className="cart-summary">
                                        <div className="cart-summary-wrap">
                                            <h4>Cart Summary</h4>
                                            <p>Sub Total <span>$1250.00</span></p>
                                            <p>Shipping Cost <span>$00.00</span></p>
                                            <h2>Grand Total <span>$1250.00</span></h2>
                                        </div>
                                        <div className="cart-summary-button">
                                            <button className="checkout-btn">Checkout</button>
                                            <button className="update-btn">Update Cart</button>
                                        </div>
                                    </div>
                                    {/*=======  End of Cart summery  =======*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====  End of Cart page content  ======*/}
            {/*=============================================
	=            Footer         =
	=============================================*/}
            </div>

    )
}

export default Cart
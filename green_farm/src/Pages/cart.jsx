import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {
    removeToCart,
    addOrderAsync,
    removeAllCart,
} from "../redux/slices/CommerceSlice";


function Cart() {


    const dispatch = useDispatch();
    const cart = useSelector((s) => s.CommerceSlice.cart);
    const user = useSelector((s) => s.UserSlice.currentUser);
    const handleRemoveItem = (productId) => {
        dispatch(removeToCart(productId));
    };

    const handlePurchase = () => {
        if (user) {
            dispatch(addOrderAsync({ user_id: user.id, products: cart }));
            dispatch(removeAllCart());
        }
    };
    let total = 0;
    cart.forEach((i) => (total += i.product.price * i.quantity));

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
                                            {cart.map(i => (

                                                <tr key={i.id}>
                                                    <td className="pro-thumbnail"><img width={350} height={350} src={i.product.image} className="img-fluid" alt="Product" /></td>
                                                    <td className="pro-title"><a href="#"> {i.product.title}</a></td>
                                                    <td className="pro-price"><span> {i.product.price} </span></td>
                                                    <td className="pro-quantity"><span> {i.quantity} </span></td>
                                                    <td className="pro-subtotal"><span>$ {i.product.price * i.quantity}</span></td>
                                                    <td className="pro-remove"><a onClick={() => handleRemoveItem(i.product.id)}><i className="fa fa-trash-o" /></a></td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                                {/*=======  End of Cart table  =======*/}
                            </form>
                            <div className="row">
                                <div className="col-12">


                                    <div className="col-6 d-flex float-start">
                                        {/*=======  Cart summery  =======*/}
                                        <div className="cart-summary">
                                            <div className="cart-summary-wrap">
                                                <h4>Cart Summary</h4>
                                                <p>Sub Total <span>$ {total}</span></p>
                                                <p>Shipping Cost <span>$ 5</span></p>
                                                <h2>Grand Total <span>$ {Math.round(total + 5)}</span></h2>
                                            </div>
                                        </div>
                                        {/*=======  End of Cart summery  =======*/}
                                    </div>
                                    <div className="col-5 d-flex float-start ms-1">
                                        <div className="checkout-payment-method">
                                            <h4 className="checkout-title">Payment Method</h4>
                                            <div className="single-method">
                                                <input type="radio" id="payment_check" name="payment-method" defaultValue="check" />
                                                <label htmlFor="payment_check">Check Payment</label>
                                                <p data-method="check">Please send a Check to Store name with Store Street, Store Town, Store
                                                    State, Store Postcode, Store Country.</p>
                                            </div>
                                            <div className="single-method">
                                                <input type="radio" id="payment_bank" name="payment-method" defaultValue="bank" />
                                                <label htmlFor="payment_bank">Direct Bank Transfer</label>
                                                <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store
                                                    State, Store Postcode, Store Country.</p>
                                            </div>
                                            <div className="single-method">
                                                <input type="radio" id="payment_cash" name="payment-method" defaultValue="cash" />
                                                <label htmlFor="payment_cash">Cash on Delivery</label>
                                                <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store
                                                    State, Store Postcode, Store Country.</p>
                                            </div>
                                            <div className="single-method">
                                                <input type="radio" id="payment_paypal" name="payment-method" defaultValue="paypal" />
                                                <label htmlFor="payment_paypal">Paypal</label>
                                                <p data-method="paypal">Please send a Check to Store name with Store Street, Store Town, Store
                                                    State, Store Postcode, Store Country.</p>
                                            </div>
                                            <div className="single-method">
                                                <input type="radio" id="payment_payoneer" name="payment-method" defaultValue="payoneer" />
                                                <label htmlFor="payment_payoneer">Payoneer</label>
                                                <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store
                                                    State, Store Postcode, Store Country.</p>
                                            </div>
                                            <div className="single-method">
                                                <input required type="checkbox" id="accept_terms" />
                                                <label className='text-danger' htmlFor="accept_terms">I’ve read and accept the terms &amp; conditions*</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 ms-5 cart-summary-button'>
                                        <Link to="/">
                                            <button className="update-btn">Update Cart</button>
                                        </Link>
                                    <a onClick={handlePurchase} className="place-order">Place order</a>
                                    </div>
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
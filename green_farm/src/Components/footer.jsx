import React from 'react'

function footer() {
    return (
        <footer>

            {/*=======  social contact section  =======*/}
            <div className="social-contact-section pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 order-2 order-md-2 order-sm-2 order-lg-1">
                            {/*=======  social media links  =======*/}
                            <div className="social-media-section">
                                <h2>Follow us</h2>
                                <div className="social-links">
                                    <a className="facebook" href="http://www.facebook.com/" data-tooltip="Facebook"><i className="fa fa-facebook" /></a>
                                    <a className="twitter" href="http://www.twitter.com/" data-tooltip="Twitter"><i className="fa fa-twitter" /></a>
                                    <a className="instagram" href="http://www.instagram.com/" data-tooltip="Instagram"><i className="fa fa-instagram" /></a>
                                    <a className="linkedin" href="http://www.linkedin.com/" data-tooltip="Linkedin"><i className="fa fa-linkedin" /></a>
                                    <a className="rss" href="http://www.rss.com/" data-tooltip="RSS"><i className="fa fa-rss" /></a>
                                </div>
                            </div>
                            {/*=======  End of social media links  =======*/}
                        </div>
                        <div className="col-lg-8 col-md-12 order-1 order-md-1 order-sm-1 order-lg-2  mb-sm-50 mb-xs-50">
                            {/*=======  contact summery  =======*/}
                            <div className="contact-summery">
                                <h2>Contact us</h2>
                                {/*=======  contact segments  =======*/}
                                <div className="contact-segments d-flex justify-content-between flex-wrap flex-lg-nowrap">
                                    {/*=======  single contact  =======*/}
                                    <div className="single-contact d-flex mb-xs-20">
                                        <div className="icon">
                                            <span className="icon_pin_alt" />
                                        </div>
                                        <div className="contact-info">
                                            <p>Address: <span>123 New Design Str, Melbourne, Australia</span></p>
                                        </div>
                                    </div>
                                    {/*=======  End of single contact  =======*/}
                                    {/*=======  single contact  =======*/}
                                    <div className="single-contact d-flex mb-xs-20">
                                        <div className="icon">
                                            <span className="icon_mobile" />
                                        </div>
                                        <div className="contact-info">
                                            <p>Phone: <span>1-888-123-456-89</span></p>
                                        </div>
                                    </div>
                                    {/*=======  End of single contact  =======*/}
                                    {/*=======  single contact  =======*/}
                                    <div className="single-contact d-flex">
                                        <div className="icon">
                                            <span className="icon_mail_alt" />
                                        </div>
                                        <div className="contact-info">
                                            <p>Email: <span>support@hastech.company</span></p>
                                        </div>
                                    </div>
                                    {/*=======  End of single contact  =======*/}
                                </div>
                                {/*=======  End of contact segments  =======*/}
                            </div>
                            {/*=======  End of contact summery  =======*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*=======  End of social contact section  =======*/}
            {/*=======  footer navigation  =======*/}
            <div className="footer-navigation-section pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                            {/*=======  single navigation section  =======*/}
                            <div className="single-navigation-section">
                                <h3 className="nav-section-title">INFORMATION</h3>
                                <ul>
                                    <li> <a href="about-us.html">About Us</a></li>
                                    <li> <a href="#">Delivery Information</a></li>
                                    <li> <a href="#">Privacy Policy</a></li>
                                    <li> <a href="#">Terms &amp; Condition</a></li>
                                </ul>
                            </div>
                            {/*=======  End of single navigation section  =======*/}
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                            {/*=======  single navigation section  =======*/}
                            <div className="single-navigation-section">
                                <h3 className="nav-section-title">MY ACCOUNT</h3>
                                <ul>
                                    <li> <a href="my-account.html">My Account</a></li>
                                    <li> <a href="wishlist.html">Wishlist</a></li>
                                    <li> <a href="cart.html">Shopping Cart</a></li>
                                    <li> <a href="#">Newsletter</a></li>
                                </ul>
                            </div>
                            {/*=======  End of single navigation section  =======*/}
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
                            {/*=======  single navigation section  =======*/}
                            <div className="single-navigation-section">
                                <h3 className="nav-section-title">CUSTOMER SERVICE</h3>
                                <ul>
                                    <li> <a href="contact.html">Contact</a></li>
                                    
                                </ul>
                            </div>
                            {/*=======  End of single navigation section  =======*/}
                        </div>
                        
                    </div>
                </div>
            </div>
            {/*=======  End of footer navigation  =======*/}
            {/*=======  copyright section  =======*/}
            <div className="copyright-section pt-35 pb-35">
                <div className="container">
                    <div className="row align-items-md-center align-items-sm-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center text-md-start">
                            {/*=======  copyright text	  =======*/}
                            <div className="copyright-segment">
                                <p>
                                    <a href="#">Privacy Policy</a>
                                    <span className="separator">|</span>
                                    <a href="#">Term and conditions</a>
                                </p>
                                <p className="copyright-text">© 2022 <a href="https://htmldemo.net/">Greenfarm</a>. All Rights
                                    Reserved</p>
                            </div>
                            {/*=======  End of copyright text	  =======*/}
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
                            {/*=======  payment info  =======*/}
                            <div className="payment-info text-center text-md-end">
                                <p>Allow payment base on <img width={316} height={44} src="assets/images/payment-icon.webp" className="img-fluid" alt="" /></p>
                            </div>
                            {/*=======  End of payment info  =======*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*=======  End of copyright section  =======*/}
        </footer>

    )
}

export default footer
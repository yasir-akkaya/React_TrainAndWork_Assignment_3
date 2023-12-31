import React from 'react'
import { Link } from 'react-router-dom'

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
                                    <a target='_blank' className="facebook" href="http://www.facebook.com/" data-tooltip="Facebook"><i className="fa fa-facebook" /></a>
                                    <a target='_blank' className="twitter" href="http://www.twitter.com/" data-tooltip="Twitter"><i className="fa fa-twitter" /></a>
                                    <a target='_blank' className="instagram" href="http://www.instagram.com/" data-tooltip="Instagram"><i className="fa fa-instagram" /></a>
                                    <a target='_blank' className="linkedin" href="http://www.linkedin.com/" data-tooltip="Linkedin"><i className="fa fa-linkedin" /></a>
                                    <a target='_blank' className="rss" href="http://www.rss.com/" data-tooltip="RSS"><i className="fa fa-rss" /></a>
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
        </footer>

    )
}

export default footer
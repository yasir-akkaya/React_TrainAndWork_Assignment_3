import React from 'react'

function Contact() {
    return (
        <div className="page-content mb-50">
            <div className="google-map-container mb-70">
                <iframe title='map' className="map-size" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd">
                </iframe>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mb-xs-35">
                        <div className="contact-page-side-content">
                            <h3 className="contact-page-title">Contact Us</h3>
                            <div className="single-contact-block">
                                <h4><img width={34} height={40} src="assets/images/icons/contact-icon1.webp" alt="" /> Address
                                </h4>
                                <p>123 Main Street, Anytown, CA 12345 – USA</p>
                            </div>
                            
                            <div className="single-contact-block">
                                <h4><img width={36} height={40} src="assets/images/icons/contact-icon2.webp" alt="" /> Phone</h4>
                                <p>Mobile: (08) 123 456 789</p>
                                <p>Hotline: 1009 678 456</p>
                            </div>
                           
                            <div className="single-contact-block">
                                <h4><img width={38} height={42} src="assets/images/icons/contact-icon3.webp" alt="" /> Email</h4>
                                <p>yourmail@domain.com</p>
                                <p>support@hastech.company</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 pl-100 pl-xs-15">
                        <div className="contact-form-content">
                            <h3 className="contact-page-title">Tell Us Your Message</h3>
                            <div className="contact-form">
                                <form id="contact-form" action="https://htmldemo.net/greenfarm/greenfarm/assets/php/mail.php" method="post">
                                    <div className="form-group">
                                        <label>Your Name <span className="required">*</span></label>
                                        <input type="text" name="customerName" id="customername" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Email <span className="required">*</span></label>
                                        <input type="email" name="customerEmail" id="customerEmail" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="contactSubject" id="contactSubject" />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Message</label>
                                        <textarea name="contactMessage" id="contactMessage" defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="submit" id="submit" className="contact-form-btn" name="submit">send</button>
                                    </div>
                                </form>
                            </div>
                            <p className="form-messege pt-10 pb-10 mt-10 mb-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
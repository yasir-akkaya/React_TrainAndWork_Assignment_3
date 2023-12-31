import React from 'react'

function singleBlog() {
    return (
        <div className="blog-page-container mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-2">
                    </div>
                    <div className="col-lg-12 order-1 mb-sm-35 mb-xs-35">
                        <div className="blog-single-post-container mb-50">
                            <h3 className="post-title">Blog post image format</h3>
                            <div className="post-meta">
                                <p> <span><i className="fa fa-calendar" /> Posted On: <a href="#">24 August, 2022</a></span></p>
                            </div>
                            <div className="single-blog-post-media mb-xs-20">
                                <div className="image">
                                    <img width={1170} height={810} src="assets/images/single-post-image/blog01.webp" className="img-fluid" alt="" />
                                </div>
                               
                            </div>
                            <div className="post-content mb-40">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus
                                    nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam
                                    voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit
                                    quisquam, ut, numquam voluptatem quas cum!</p>
                                <blockquote>
                                    <p>ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem,
                                        ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae
                                        numquam! VitaeLorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum
                                        deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum
                                        dolor.</p>
                                </blockquote>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae
                                    alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit
                                    odit quisquam, u Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum
                                    deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum
                                    dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae numquam!
                                    Vitae alias ullam voluptatibus asperiores fugit ea soluta consectetur adipisci enim,
                                    impedit odit quisquam, ut, numquam voluptatem quas cum!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus
                                    nam deserunt vitae ullam amet quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Quod, vitae numquam! Vitae alias ullam
                                    voluptatibus asperiores fugit ea soluta consectetur adipisci enim, impedit odit
                                    quisquam, ut, numquam voluptatem quas cum! repellendus nam deserunt vitae ullam amet
                                    quos! Nesciunt, quo. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quod, vitae numquam! Vitae alias ullam voluptatibus asperiores fugit
                                    ea soluta consectetur adipisci enim, impedit odit quisquam, ut, numquam voluptatem quas
                                    cum!</p>
                            </div>
                            
                            <div className="social-share-buttons mb-40">
                                <h3>share this product</h3>
                                <ul>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="google-plus" href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a className="pinterest" href="#"><i className="fa fa-pinterest" /></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>
                                </ul>
                            </div>
                            <div className="related-post-container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="related-post-title mb-30">RELATED POSTS</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 mb-xs-20">
                                        <div className="single-related-post">
                                            <div className="image">
                                                <a href="blog-post-image-format.html">
                                                    <img width={500} height={300} src="assets/images/blog-image/blog01.webp" className="img-fluid" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <a href="blog-post-image-format.html">Blog image post</a>
                                                    <span>April 24, 2022</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-xs-20">
                                        <div className="single-related-post">
                                            <div className="image">
                                                <a href="blog-post-image-format.html">
                                                    <img width={500} height={300} src="assets/images/blog-image/blog01.webp" className="img-fluid" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <a href="blog-post-image-format.html">Blog image post</a>
                                                    <span>April 24, 2022</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-xs-20">
                                        <div className="single-related-post">
                                            <div className="image">
                                                <a href="blog-post-image-format.html">
                                                    <img width={500} height={300} src="assets/images/blog-image/blog01.webp" className="img-fluid" alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <a href="blog-post-image-format.html">Blog image post</a>
                                                    <span>April 24, 2022</span>
                                                </h3>
                                            </div>
                                        </div>
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

export default singleBlog
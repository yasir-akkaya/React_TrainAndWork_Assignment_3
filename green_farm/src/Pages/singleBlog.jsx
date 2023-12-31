import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleBlog({ blogs }) {
    const { blogId } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(blogId));

    if (!blog) {
        return <div>Blog not found</div>;
    }


    return (
        <div className="blog-page-container mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-2">
                    </div>
                    <div className="col-lg-12 order-1 mb-sm-35 mb-xs-35">
                        <div className="blog-single-post-container mb-50">
                            <h3 className="post-title">{blog.title}</h3>
                            <div className="post-meta">
                                <p> <span><i className="fa fa-calendar" /> Posted On: <a href="#">{blog.date}</a></span></p>
                            </div>
                            <div className="single-blog-post-media mb-xs-20">
                                <div className="image">
                                    <img width={1170} height={810} src={blog.image} className="img-fluid" alt="" />
                                </div>

                            </div>
                            <div className="post-content mb-40">
                                <p>{blog.short_desc}</p>
                                <blockquote>
                                    <p>{blog.long_desc}</p>
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
                                                <Link to="/blogs">
                                                    <img width={500} height={300} src="https://source.unsplash.com/random/1200x800/?Organic" className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <Link to="/blogs">Organic Living Tips</Link>
                                                    <span>2023-01-06</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-xs-20">
                                        <div className="single-related-post">
                                            <div className="image">
                                                <Link to="/blogs">
                                                    <img width={500} height={300} src="https://source.unsplash.com/random/1200x800/?fruitsalad" className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <Link to="/blogs">Seasonal Delights Showcase</Link>
                                                    <span>2023-01-08</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 mb-xs-20">
                                        <div className="single-related-post">
                                            <div className="image">
                                                <Link to="/blogs">
                                                    <img width={500} height={300} src="https://source.unsplash.com/random/1200x800/?Fresh" className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <h3 className="related-post-title">
                                                    <Link to="/blogs">Fresh Produce Insights</Link>
                                                    <span>2023-01-03</span>
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

export default SingleBlog
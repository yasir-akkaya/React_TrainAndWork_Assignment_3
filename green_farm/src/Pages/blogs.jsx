import React from 'react'
import { Link } from 'react-router-dom'

function Blogs({blogs}) {


    return (
        <div className="blog-page-container mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/*=======  blog post container  =======*/}
                        <div className="blog-post-container">
                            <div className="row">
                                {/* BAŞLA */}
                                {blogs && blogs.map(blog => (
                                <div className="col-lg-4 col-md-6" key={blog.id}>
                                    <div className="single-blog-post mb-35">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="single-blog-post-media mb-20">
                                                    <div className="image">
                                                        <Link to={`/single-blog/${blog.id}`}><img width={700} height={665} src={blog.image} className="img-fluid" /></Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single-blog-post-content">
                                                    <h3 className="post-title"> <Link to={`/single-blog/${blog.id}`}> {blog.title} </Link></h3>
                                                    <div className="post-meta">
                                                        <p> <span><i className="fa fa-calendar" /> Posted On: {blog.date} </span></p>
                                                    </div>
                                                    <p className="post-excerpt">
                                                        {blog.long_desc}
                                                    </p>
                                                    <Link to={`/single-blog/${blog.id}`} className="blog-readmore-btn">continue</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                                {/* BİTİR */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blogs
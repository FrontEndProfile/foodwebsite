import React from 'react'

import heroLeftHome from '../../assets/img1.png';
import heroImgHome from '../../assets/hero-img.png';
import RatingHome from '../../assets/rating.png';
import backImgHeroHome from '../../assets/bg.png';

const Hero = () => {
    return (
        <section id="hero" style={{backgroundImage:`url(${backImgHeroHome})`}}>
            <div className="container">
                <div className="row mt-0 mt-md-4">
                    <div className="col-lg-5 col-md-6 pt-4 mt-5">
                        <button className="btn btn-fast" data-aos="fade-right" data-aos-duration="500">More Than Faster</button>
                        <h1 className="font-weight-bold pt-3" data-aos="fade-right" data-aos-duration="1000">
                            Be The Fastest In <span className="red-color">Delivering</span> Your Food
                        </h1>
                        <p className="pt-2" data-aos="fade-right" data-aos-duration="1500">Our Job is to filling your tummy with
                            delicious food <br /> and with fast and free
                            delivery</p>
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <button className="btn btn-start text-white mt-2">Get Started</button>
                        </div>
                        <div className="row mt-5" data-aos="fade-right" data-aos-duration="2500">
                            <div className="col-lg-4 col-md-4 text-md-left text-center">
                                <img src={heroLeftHome} className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-8 pt-2 text-md-left text-center">
                                <h6>Our Happy Customer</h6>
                                <p><img src={RatingHome} className="img-fluid" />4,8 (13.5k Reviews)</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 offset-lg-1" data-aos="zoom-in">
                        <img src={heroImgHome} className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
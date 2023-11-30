import React from 'react'
import aroojProfile from '../../assets/img2.png';
import profileRating from '../../assets/star.png';
import profileChef from '../../assets/img.png';

const WhatSay = () => {
  return (
    <section className="mt-0 pt-2 mt-md-5">
    <div className="container">
        <div className="row">
            <div className="col-md-5 mt-0 mt-md-5  pt-0 pt-md-4">
                <h6 className="red-color text-uppercase font-weight-bold" data-aos="fade-right" data-aos-duration="500">
                    What They Say</h6>
                <h2 className="font-weight-bold" data-aos="fade-right" data-aos-duration="1000">Your Favourite Food
                    Delivery Partner</h2>
                <p className="pt-3" data-aos="fade-right" data-aos-duration="1500">Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their
                    default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                <div className="row" data-aos="fade-right" data-aos-duration="2000">
                    <div className="col-2">
                        <img src={aroojProfile} className="img-fluid" width="45"/>
                    </div>
                    <div className="col-9 pl-0">
                        <h6 className="size font-weight-bold">Shumaila Arooj</h6>
                        <h6 className="size text-muted">Food Enthusiast</h6>
                    </div>
                </div>
                <p className="pt-3" data-aos="fade-right" data-aos-duration="2500">
                    <img src={profileRating} className="img-fluid " width="100" />
                    <span className="pl-2 font-weight-bold">4.9</span></p>
            </div>
            <div className="col-md-5 offset-md-2" data-aos="zoom-in">
                <img src={profileChef} className="img-fluid"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default WhatSay
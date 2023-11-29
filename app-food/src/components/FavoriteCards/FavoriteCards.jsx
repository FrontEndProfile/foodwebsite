import React from 'react'

import easyToOrder from '../../assets/easy.png';
import fastToOrder from '../../assets/fast.png';
import bestToOrder from '../../assets/best.png';

const FavoriteCards = () => {
  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center  mt-0 mt-md-5">
          <div className="col-lg-5 col-md-6">
            <div className="text-center">
              <h6 className="red-color font-weight-bold">WHAT WE SERVE</h6>
              <h2 className="font-weight-bold">Your Favourite Food Delivery Partner</h2>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img src={easyToOrder} className="img-fluid" data-aos="flip-left"/>
                    <div data-aos="fade-up" data-aos-duration="800">
                      <h6 className="font-weight-bold pt-3">Easy To Order</h6>
                      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of
                        letters, as opposed</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img src={fastToOrder} className="img-fluid" data-aos="flip-up"/>
                    <div data-aos="fade-up" data-aos-duration="1600">
                      <h6 className="font-weight-bold pt-3">Fastest Delivery</h6>
                      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of
                        letters, as opposed</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img src={bestToOrder} className="img-fluid" data-aos="flip-right"/>
                    <div data-aos="fade-up" data-aos-duration="2400">
                      <h6 className="font-weight-bold pt-3">Best Quality</h6>
                      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of
                        letters, as opposed</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteCards
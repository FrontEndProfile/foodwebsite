import React from "react";

import foodBoxArrived from "../../assets/bag.png";
import foodBoxCall from "../../assets/img4.png";
import foodBoxPizza from "../../assets/pizza.png";
import foodBoxBurger from "../../assets/burger.png";
import foodBoxCake from "../../assets/cupcake.png";
import foodBoxBurgerTypeOne from "../../assets/img3.png";
import foodBoxBurgerTypeTwo from "../../assets/img5.png";

const DownloadApp = () => {
  return (
    <section id="app" className="mt-3 mt-md-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <h6 className="red-color text-uppercase font-weight-bold">
              Download App
            </h6>
            <h2 className="font-weight-bold">Get Started With Fudo Today!</h2>
            <p className="pt-3">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search.
            </p>
            <button type="button" className="btn btn-app text-white mt-3">
              Get The App
            </button>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 pt-5">
            <div className="card border-0 app-card">
              <div className="card-body">
                <div className="text-center">
                  <img src={foodBoxArrived} className="img-fluid" width="55" />
                  <h6 className="size pt-4">Your Food Has Arrived</h6>
                </div>
              </div>
            </div>
            <div className="mt-0 mt-md-5 pt-0 pt-md-5">
              <img src={foodBoxCall} className="img-fluid mt-5" />
            </div>
          </div>
          <div className="col-md-5 mt-5 mt-md-0">
            <div className="card border-0">
              <div className="card-body">
                <h6 className="size font-weight-bold pt-5">
                  The Fastest Food
                  <br /> In Delivery Food
                </h6>
                <button type="button" className="btn btn-app text-white mt-3">
                  Order Now
                </button>
                <h6 className="size font-weight-bold pt-5">Categories</h6>
                <div className="row mt-4">
                  <div className="col-lg-4 col-md-6 mt-lg-0  mt-3">
                    <div className="feature3">
                      <input type="checkbox" />
                      <div className="check-box2">
                        <p className="p-2">
                          <img
                            src={foodBoxPizza}
                            className="img-fluid"
                            width="33"
                          />
                          <span className="pl-2">Pizza</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6  mt-lg-0  mt-3">
                    <div className="feature3">
                      <input type="checkbox" />
                      <div className="check-box2">
                        <p className="p-2">
                          <img
                            src={foodBoxBurger}
                            className="img-fluid"
                            width="33"
                          />
                          <span className="pl-2">Burger</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-3 mt-3">
                    <div className="feature3">
                      <input type="checkbox" />
                      <div className="check-box2">
                        <p className="p-2">
                          <img
                            src={foodBoxCake}
                            className="img-fluid"
                            width="33"
                          />
                          <span className="pl-2">Cake</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="size font-weight-bold pt-5">Popular Now</h6>
                <div className="row mt-5">
                  <div className="col-6">
                    <img src={foodBoxBurgerTypeOne} className="img-fluid" />
                  </div>
                  <div className="col-6">
                    <img src={foodBoxBurgerTypeTwo} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

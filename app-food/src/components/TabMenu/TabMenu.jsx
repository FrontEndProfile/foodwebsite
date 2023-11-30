import React from 'react'

const TabMenu = () => {
    return (
        <section className="mt-5 pt-0 pt-md-5" id="menu">
            <div className="container">
                <div className="row  mt-0 mt-md-5">
                    <div className="col-md-5">
                        <h6 className="red-color  font-weight-bold">OUR MENU</h6>
                        <h2 className="font-weight-bold">Your Favourite Food Delivery Partner</h2>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-3 scroller " id="menu">
                        <div className="mt-3 pointer   border-0 p-2" id="acc">
                            <img src="images/burger.png" className="img-fluid" width="40" />
                            <span className="pl-2">Burger</span>
                        </div>
                        <div className="mt-3 active-tab pointer border-0 p-2" id="sol" >
                            <img src="images/piza.png" className="img-fluid" width="40" />
                            <span className="pl-2">Pizza</span>
                        </div>
                        <div className=" mt-3 p-2 pointer border-0" id="exp" >
                            <img src="images/cake.png" className="img-fluid" width="40" />
                            <span className="pl-2">Cupcake</span>
                        </div>

                        <div className=" mt-3 p-2 pointer border-0" id="vid" >
                            <img src="images/cup.png" className="img-fluid" width="40" />
                            <span className="pl-2">Ramen</span>
                        </div>

                        <div className="mt-3 p-2 pointer border-0" id="ana" >
                            <img src="images/ice.png" className="img-fluid" width="40" />
                            <span className="pl-2">Ice Cream</span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* <!-- ====================== ONE ============================= --> */}
                        <div id="one" >
                            <div className="center slider  mb-5">
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 ">
                                    <div className="card-body p-0">
                                        <img src="images/burger1.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ==========two================ --> */}
                        <div id="two" style={{ display: 'none' }}>
                            <div className="center slider  mb-5">
                                <div className="card  border-0 mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/pizza1.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0 mb-5">
                                    <div className="card-body  p-0">
                                        <img src="images/pizza2.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0 mb-5">
                                    <div className="card-body p-0">
                                        <div>
                                            <img src="images/pizza3.png" className="img-fluid" />
                                            <div className="body">
                                                <h6>Italian Pizzza</h6>
                                                <p><span>$</span> 8.56</p>
                                                <button className="btn btn-order">Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/pizza1.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body  p-0">
                                        <img src="images/pizza2.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0  mb-5">
                                    <div className="card-body p-0">
                                        <div>
                                            <img src="images/pizza3.png" className="img-fluid" />
                                            <div className="body">
                                                <h6>Italian Pizzza</h6>
                                                <p><span>$</span> 8.56</p>
                                                <button className="btn btn-order">Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ==========three================ --> */}
                        <div id="three" style={{ display: 'none' }}>
                            <div className="center slider  mb-5">
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ================four================ --> */}
                        <div id="four" style={{ display: 'none' }}>
                            <div className="center slider  mb-5">
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/cupcake.jpg" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ==========five================ --> */}
                        <div id="five" style={{ display: 'none' }}>
                            <div className="center slider mb-5">
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card  border-0  mb-5">
                                    <div className="card-body p-0">
                                        <img src="images/ice-cream.png" className="img-fluid" />
                                        <div className="body">
                                            <h6>Italian Pizzza</h6>
                                            <p><span>$</span> 8.56</p>
                                            <button className="btn btn-order">Order Now</button>
                                        </div>
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

export default TabMenu
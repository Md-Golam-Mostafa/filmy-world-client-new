import React from 'react';
import banner1 from "../../../images/banner (1).jpg";
import banner2 from "../../../images/banner (2).jpg";
import banner3 from "../../../images/banner (3).jpg";
import banner4 from "../../../images/banner (4).jpg";
import banner5 from "../../../images/banner (5).jpg";
import banner6 from "../../../images/banner (6).jpg";
const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="col-md-7 carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={banner1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner3} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner4} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner5} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner6} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
    );
};

export default Banner;
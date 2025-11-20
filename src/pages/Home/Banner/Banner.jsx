import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      {/* <div>
        <img src={bannerImg1} />
      </div> */}
      <div
        className="h-full bg-cover bg-center flex items-end justify-start"
        style={{ backgroundImage: `url(${bannerImg1})` }}
      >
        <div className="mb-14 ml-22">
            <button className="btn btn-primary mr-4 text-secondary font-bold">Track your parcel</button>
        <Link to='/rider' className="btn text-secondary font-bold">Be a rider</Link>
        </div>
      </div>

      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;

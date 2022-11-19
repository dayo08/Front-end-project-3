import React from "react";
import Slider from "react-slick";
import aboutc6 from "../../img/about-c6.png";
import aboutc7 from "../../img/about-c7.jpg";
import aboutc8 from "../../img/about-c8.jpg";
import aboutc9 from "../../img/about-c9.jpg";
import aboutc1 from "../../img/about-c1.png";
import aboutc4 from "../../img/about-c4.jpg";

function Clients() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "sample1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = [
    {
      id: 0,
      img: aboutc6,
    },
    {
      id: 1,
      img: aboutc7,
    },

    {
      id: 3,
      img: aboutc8,
    },
    {
      id: 4,
      img: aboutc9,
    },
    {
      id: 5,
      img: aboutc1,
    },
    {
      id: 5,
      img: aboutc4,
    },
  ];
  return (
    <div className="container mx-auto p-5">
      <p className="text-black md:text-4xl text-2xl pb-3 font-bold ">
        OUR{" "}
        <span className="text-[#f16d07] md:text-4xl text-2xl ">CLIENTS</span>
      </p>
      <div className=" flex justify-center flex-col items-center py-20">
        <Slider {...settings}>
          {slider.map((i) => (
            <div className=" flex justify-center items-center">
              <img src={i.img} alt="" className="w-64 mx-auto my-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Clients;

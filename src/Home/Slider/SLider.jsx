import React from "react";
import banner9 from "../../img/banner9.jpg";
import slider23 from "../../img/slider23.jpg";
import slider22 from "../../img/slider22.jpg";
import slider3 from "../../img/slider3.jpg";
import slider4 from "../../img/slider4.jpg";
import sliderr2 from "../../img/sliderr2.jpg";
import Slider from "react-slick";
import AOS from "aos";
function SLider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "sample",
  };
  AOS.init();
  const team = [
    {
      id: 0,
      img: banner9,
    },

    {
      id: 1,
      img: slider23,
    },
    {
      id: 2,
      img: slider22,
    },
    {
      id: 3,
      img: slider3,
    },
    {
      id: 4,
      img: slider4,
    },
    {
      id: 5,
      img: sliderr2,
    },
  ];
  return (
    <div className=" md:p-10 md:px-0 px-2 flex my-auto  justify-center items-center">
      <Slider {...settings}>
        {team.map((items, key) => (
          <div
            className=" "
            key={key}
          >
            <div
              className="flex flex-col  items-center justify-center gap-5  py-7 transition ease-in-out delay-150 p-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img className="" src={items.img} alt="Bonnie" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SLider;

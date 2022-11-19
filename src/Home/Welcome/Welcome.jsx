import React from "react";
import aboutimg from "../../img/aboutimg.jpg";
import as1 from "../../img/as1.jpg";
import cp3 from "../../img/cp3.jpg";
import mh6 from "../../img/mh6.jpg";
import slider11 from "../../img/slider11.jpg";
import ps4 from "../../img/ps4.jpg";
import AOS from "aos";
function Welcome() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: as1,
      name: "OUR PURPOSE",
      dec: `We are dedicated to enhancing our consumer’s quality of life with effective solutions and creating a positive impact on society.`,
    },
    {
      id: 1,
      img: aboutimg,
      name: "OUR VISION",
      dec: `‘To be a leader by’ Driving excellence Developing innovative and efficient services & solutions Delivering the best in class quality, consistently`,
    },
    {
      id: 2,
      img: cp3,
      name: "OUR MISSION",
      dec: `‘To offer varied & unique products & services’ Alkush Group aims to provide a wide spectrum of unique services and solutions with the best talent available. We endeavour to offer complete, best in class solutions and augment our clients’ base.`,
    },
    {
      id: 3,
      img: mh6,
      name: "OUR MISSION",
      dec: `‘To offer varied & unique products & services’ Alkush Group aims to provide a wide spectrum of unique services and solutions with the best talent available. We endeavour to offer complete, best in class solutions and augment our clients’ base.`,
    },
    {
      id: 3,
      img: slider11,
      name: "OUR MISSION",
      dec: `‘To offer varied & unique products & services’ Alkush Group aims to provide a wide spectrum of unique services and solutions with the best talent available. We endeavour to offer complete, best in class solutions and augment our clients’ base.`,
    },
    {
      id: 3,
      img: ps4,
      name: "OUR MISSION",
      dec: `‘To offer varied & unique products & services’ Alkush Group aims to provide a wide spectrum of unique services and solutions with the best talent available. We endeavour to offer complete, best in class solutions and augment our clients’ base.`,
    },
  ];
  return (
    <div className="py-5">
      <div className="container mx-auto">
        {" "}
        <div className=" p-5 lg:w-2/3 mx-auto">
          <p className="text-black md:text-4xl text-2xl pb-3 font-bold underline">
            About{" "}
            <span className="text-[#db241c] md:text-4xl text-2xl ">
              Vibhuty  Enterprises
            </span>
          </p>
          <p className="text-justify">
            We pride ourselves on providing our customer with the highest
            quality and values in every order Vibhuty  Enterprises has the
            knowledge, experience, and capabilities required to meet and exceed
            sheet metal fabrication needs of large and small companies. Our
            endeavors are directed towards achieving the maximum level of client
            satisfaction and therefore we try to design products as per their
            demand and suggestion we manufacture supply precision sheet metal
            components, assemblies cabinets, enclosures panels, elect panel for
            some major companies and job work market. If you can draw it and it
            can be made from metal Vibhuty  Enterprises can make you're drawing a
            reality an essential requirement of the company's objective is the
            implementation and certification of the quality system to ISO
            9001/:2015 status. .
          </p>
          <br />
          <p className="text-justify">
            If you can draw it and it can be made from metal Vibhuty  Enterprises
            can make you're drawing a reality an essential requirement of the
            company's objective is the implementation and certification of the
            quality system to ISO 900/:2008 status.
          </p>
        </div>
        <div className=" p-5">
          <p className="text-black md:text-4xl text-2xl pb-6 font-bold underline">
            Our{" "}
            <span className="text-[#db241c] md:text-4xl text-2xl ">Products</span>
          </p>
          <div className=" gap-10  md:px-0 px-2 flex flex-wrap justify-evenly items-center  ">
            {team.map((items, key) => (
              <div
                className="w-full max-w-md my-auto bg-[black] text-white  hover:bg-opacity-70 rounded-3xl border-[#db241c] border-2  shadow-lg text-center  hover:-translate-y-1 hover:scale-110 duration-700 hover:shadow-2xl"
                key={key}
              >
                <div
                  className="flex flex-col items-center gap-3 py-7 transition ease-in-out delay-150 p-3"
                  data-aos="flip-left"
                  data-aos-duration="3000"
                >
                  <img
                    className=" w-36 h-40 rounded-md "
                    src={items.img}
                    alt="Bonnie"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

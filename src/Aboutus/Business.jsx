import React from "react";
import aboutus from "../img/aboutus.jpg";
import md from "../img/md.jpg";
import vision from "../img/vision.jpg";
import mission from "../img/mission.jpg";

function Business() {
  const business = [
    {
      id: 0,
      img: vision,
      title: "CORPORATE",
      dec: `To create new Dimensions in metal works.

      `,
    },
    {
      id: 1,
      img: mission,
      title: "INSTITUTION",
      dec: `To give extra ordinary solution by adopting world class manufacturing systems`,
    },
  ];
  return (
    <div>
      <div >
        <img src={aboutus} alt="" className="max-w-full mx-auto w-full"/>
      </div>
      <div className="container mx-auto p-5 lg:w-2/3">
        <div>
          <p className="lg::text-4xl  md:text-3xl text-xl mb-5 font-extrabold md:py-10 text-[#db241c] underline">
            MD Massage
          </p>
          <img src={md} alt="" className="max-w-3xl mx-auto w-full" />
        </div>
        {business.map((i) => (
          <div className=" py-3 ">
            <div className="">
              <p className="lg::text-4xl  md:text-3xl text-xl font-extrabold  text-[#db241c] underline">
                {i.title}
              </p>
              <div>
                <p className="text-justify pb-4 md:pt-10 pt-5 ">{i.dec}</p>
              </div>
              <img
                src={i.img}
                alt=""
                className="pt-2 hover:-translate-y-1 hover:scale-110 duration-700 hover:shadow-2xl max-w-3xl mx-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;

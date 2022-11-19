import React, { useEffect } from "react";
import cnclaser from "../img/cnclaser.jpg";
import cutting4 from "../img/cutting-4.jpg";
import laser4 from "../img/laser4.jpg";
import laser2 from "../img/laser2.jpg";
import laser3 from "../img/laser3.jpg";
import laser5 from "../img/laser5.jpg";
import laser6 from "../img/laser6.jpg";

function Prodecuts() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const team = [
    {
      id: 0,
      img: cutting4,
    },
    {
      id: 1,
      img: laser4,
    },
    {
      id: 2,
      img: laser2,
    },
    {
      id: 3,
      img: laser3,
    },
    {
      id: 4,
      img: laser5,
    },
    {
      id: 5,
      img: laser6,
    },
  ];
  return (
    <div className="container mx-auto p-5 max-w-6xl text-justify">
      <div>
        <p className="text-2xl">CNC Laser Cutting</p>
        <img src={cnclaser} alt="" className="py-5" />
        <p className="text-black  text-2xl pb-3 font-bold underline">
          CNC <span className="text-[#db241c] text-2xl ">Laser Cutting</span>
        </p>
        <p>
          By victimisation optical device technology you may be able to produce
          elements quickly and value effectively. There aren't any tooling
          necessities attributable to the very fact simply program the pc and
          therefore the optical device is ready to accurately cut and reproduce
          the planning over and yet again.? not like ancient cutting ways a beam
          of light exerts no mechanical or outside contact on the piece being
          cut.
        </p>
        <br />
        <p>
          A beam of light will be targeted on an especially little space from
          zero.1 to onemm in diameter. due to the flexibility to focus a beam of
          light that may equal 1,000,000 Watts per cm2, the incident beam of
          light causes a sort of superficial fusion that triggers the cutting
          method in nearly all metals, in spite of the high levels of surface
          reflectivity.
        </p>
        <br />
        <p>
          We provide prime quality, value effective sub-contract CNC optical
          device cutting services for optical device cut flat profiles and
          optical device cut beams and open sections. we tend to offers a larger
          vary of tailored elements as well as sq., rectangular tubes, oval and
          spherical pipe, open sections, angles and beams (in three dimensional
          / vi axis mode) along side ancient flat bed cutting of sheet and
          plate. plus our vary of post-cutting services, we tend to square
          measure able to die variety of value and time saving edges to assist
          alter the availability chain. we square measure able to satisfy all of
          your necessities, from occurrence cuts to giant scale batch runs.
        </p>
        <br />
        <p>
          Steel — up to one.0‘’ Stainless — up to .75‘’ Aluminum — up to .375‘’
        </p>
      </div>
      <div>
        <p className="text-2xl text-[#db241c] text-center my-9">
          Gallery CNC Laser Cutting
        </p>

        <div className="gap-10 md:p-4 p-0 md:px-0 px-2 flex flex-wrap justify-evenly items-center ">
          {team.map((items, key) => (
            <div
              className="w-full max-w-xs  text-white  hover:bg-opacity-70 rounded-3xl border-[#db241c] border-2  shadow-lg   hover:translate-y-2 hover:rotate-6 hover:scale-110 duration-700 hover:shadow-2xl"
              key={key}
            >
              <div
                className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <img
                  className="mb-3 w-44 rounded-md hover:origin-center"
                  src={items.img}
                  alt="Bonnie"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prodecuts;

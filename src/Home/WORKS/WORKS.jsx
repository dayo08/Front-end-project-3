import React from "react";
import AOS from "aos";

function WORKS() {
  AOS.init();
  const team = [
    {
      id: 0,
      name: "PLANNING & STRATEGY",
      dec: `Appropriately productivate distributed infrastructures for one-to-one expertise..`,
    },
    {
      id: 1,
      name: "Design & Developed",
      dec: `Credibly develop cross functional internal or "organic" sources vis-a-vis magnetic e-services..`,
    },
    {
      id: 2,
      name: "Test & Deliver",
      dec: `Customer Satisfaction is our satisfaction but not on the grounds of compromise on Quality.`,
    },
  ];
  return (
    <div>
      {" "}
      <div className="container mx-auto p-5">
        <div className=" gap-10 md:p-10 md:px-0 px-2 flex flex-wrap justify-evenly items-center  ">
          {team.map((items, key) => (
            <div
              className="w-full max-w-md my-auto bg-[black] text-white  hover:bg-opacity-70 rounded-3xl border-[#db241c] border-2  shadow-lg text-center  hover:translate-y-2 hover:rotate-6 hover:scale-110 duration-700 hover:shadow-2xl"
              key={key}
            >
              <div
                className="flex flex-col items-center gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h5 className="mb-1 text-xl font-bold member-name">
                  {items.name}
                </h5>
                <p>{items.dec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WORKS;

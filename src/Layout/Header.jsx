/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../img/logo.png";

import { Link, NavLink, useLocation } from "react-router-dom";
function Header() {
  const [active, setactive] = useState(1);
  const [toggle, settoggle] = useState(false);
  const loction = useLocation();
  const { pathname } = loction;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <nav className="bg-[#fffef9] ">
        {/* ===============Desktop size============== */}
        <div className=" flex  md:pt-5 justify-between  container mx-auto items-center  p-5 font-Josefin_Sans">
          <div className="">
            <Link to="/" className="flex justify-center items-center gap-3">
              <div className="relative hover:-translate-y-1 hover:scale-110 duration-700 flex justify-center items-center gap-3">
                <img src={logo} alt="" className="md:w-24 w-16" />
                <div>
                  {" "}
                  <h5 className="md:text-2xl text-base text-[#db241c] font-bold underline pb-2">
                    <span className="md:text-3xl text-xl">Vibhuty  </span>{" "}
                    Enterprises
                  </h5>
                  <p>Build a culture of innovation……</p>
                </div>
              </div>
            </Link>
          </div>
          <div className=" gap-10   justify-end lg:flex hidden">
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black  ${
                pathname === "/" && "border-b-2 border-black"
              }`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black  ${
                pathname === "/aboutUs" && "border-b-2 border-black"
              }`}
              to="/aboutUs"
            >
              About
            </NavLink>
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black  ${
                pathname === "/ourproducts" && "border-b-2 border-black"
              }`}
              to="/ourproducts"
            >
              Our Products
            </NavLink>
            
            <NavLink
              className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black  ${
                pathname === "/contact" && "border-b-2 border-black"
              }`}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="  lg:hidden px-5 ">
            <i
              className={`${
                toggle ? "hidden" : "block fa-solid fa-bars text-black text-3xl"
              }`}
              onClick={() => settoggle(!toggle)}
            ></i>
            {toggle && (
              <i
                className="fa-solid fa-xmark text-3xl  fixed top-2 right-10 z-50 mt-5"
                onClick={() => settoggle(!toggle)}
              ></i>
            )}
          </div>
        </div>
        {/* ===============Mobile size============== */}

        {toggle && (
          <>
            <div className="fixed right-0 left-0 flex flex-col items-center justify-center lg:hidden gap-5 bg-white z-10 h-[100vh] top-0 font-Josefin_Sans">
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black  ${
                  active === 1 ? "border-b-2 border-black  " : "deActive"
                }`}
                onClick={() => {
                  setactive(1);
                  settoggle(false);
                }}
              >
                <Link to="/">Home</Link>
              </div>

              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black ${
                  active === 2 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(2);
                  settoggle(false);
                }}
              >
                <Link to="/aboutUs">About</Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black ${
                  active === 3 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(3);
                  settoggle(false);
                }}
              >
                <Link to="/ourproducts">Our Products </Link>
              </div>
              <div
                className={`transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-700 hover:border-black hover:border-b-2 text-black ${
                  active === 4 ? "border-b-2 border-black" : "deActive"
                }`}
                onClick={() => {
                  setactive(4);
                  settoggle(false);
                }}
              >
                <Link to="/contact">contact</Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Header;

"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import OutlineButton from "../reusables/OutlineButton";
import {
  FaAngleRight,
  FaArrowLeft,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWikipediaW,
  FaYoutube,
} from "react-icons/fa6";
import { PiHandsPrayingBold } from "react-icons/pi";

const OpenNavItem = ({ items }) => {
  return (
    <ul className="text-2xl md:text-base space-y-5 my-10">
      {items.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

const Navbox = ({ isNavOpen, setIsNavOpen, navItems }) => {
  const [isNavItemOpen, setIsNavItemOpen] = useState({
    state: false,
    item: null,
  });
  const handleOpenNavItem = (item) => {
    setIsNavItemOpen({ state: true, item: item.children });
  };
  const closeOpenNavItem = () => {
    setIsNavItemOpen({ state: false });
  };

  return (
    <div
      className={`${
        isNavOpen
          ? `translate-y-0 md:translate-x-0`
          : `-translate-y-full md:translate-y-0 md:translate-x-full`
      } transition-all duration-300 overflow-y-scroll h-[100vh] bg-orange-700 md:bg-neutral-50 text-white md:text-black fixed z-50 top-0 left-0 md:left-auto md:right-0 w-full md:w-1/4 px-4 py-10`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* close bar */}
      <div className="flex items-center">
        {isNavItemOpen.state ? (
          <button>
            <FaArrowLeft className="text-xl" onClick={closeOpenNavItem} />
          </button>
        ) : (
          <OutlineButton className="px-3 py-1 md:border-orange-600 md:text-orange-600">
            Login
          </OutlineButton>
        )}
        <button className="text-3xl ml-auto">
          <IoClose onClick={() => setIsNavOpen(false)} />
        </button>
      </div>

      {/* items */}
      {isNavItemOpen.state ? (
        <OpenNavItem items={isNavItemOpen.item} />
      ) : (
        <>
          <ul className="text-2xl md:text-base space-y-2 my-10">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center hover:cursor-pointer hover:bg-slate-100 p-2"
                onClick={item.children ? () => handleOpenNavItem(item) : null}
              >
                {item.name}
                {item.children && <FaAngleRight className="ml-auto text-sm" />}
              </li>
            ))}
            <OutlineButton className="bg-white md:border-orange-600 w-fit px-4 py-2 ml-2 text-lg font-bold flex gap-2 shadow-lg hover:bg-orange-600 *:hover:text-white transition-all">
              <PiHandsPrayingBold className="text-orange-600" />
              <span className="text-orange-600">Donate</span>
            </OutlineButton>
          </ul>
          <div className="bg-white md:bg-gray-300 h-[1px]" />

          {/* footer part */}
          <ul className="text-2xl md:text-base *:p-2 my-5 hover:*:cursor-pointer hover:*:bg-slate-100">
            <li>About</li>
            <li>PAF</li>
            <li>In Media</li>
          </ul>
          <div className="flex justify-center gap-5 hover:*:cursor-pointer hover:*:scale-[97%] transition-all">
            <div className="flex-1">
              <img
                src="/images/playstore.png"
                alt="Google Play Link"
                className=""
              />
            </div>
            <div className="flex-1">
              <img
                src="/images/appstore.png"
                alt="App Store Link"
                className=""
              />
            </div>
          </div>

          {/* links */}
          <div className="space-y-4 mt-5">
            <p className="text-lg">For English</p>
            <ul className="text-2xl md:text-base flex gap-4">
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaWikipediaW />
              </li>
            </ul>
            <p className="text-lg">For Hindi</p>
            <ul className="text-2xl md:text-base flex gap-4">
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbox;

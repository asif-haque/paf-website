"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbox from "./Navbox";
import OutlineButton from "../reusables/OutlineButton";
import DesktopNav from "./DesktopNav";

const navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = () => setIsNavOpen(false);
    window.addEventListener("click", closeNav);
    return () => window.removeEventListener("click", closeNav);
  }, []);

  const navItems = [
    {
      name: "Live Sessions",
      children: [
        { name: "Gita Samagam" },
        { name: "Vedanta: Basics to Classics" },
      ],
    },
    { name: "AP Books" },
    { name: "AP Articles" },
    { name: "Video Series", active: true },
    { name: "AP Circle" },
    {
      name: "Invite",
      children: [
        { name: "Invite For Talk" },
        { name: "Invite For an Interview" },
      ],
    },
    { name: "Contact Us" },
    { name: "Careers" },
  ];

  return (
    <nav className="h-[8vh] bg-orange-700 text-white flex items-center px-3">
      {/* logo */}
      <Image src="/images/image.png" width={35} height={35} alt="Logo" />

      {/* desktop nav items */}
      <DesktopNav navItems={navItems} />

      {/* nav items */}
      <div className="ml-auto flex gap-4">
        <OutlineButton className="text-sm">Donate</OutlineButton>
        <button>
          <RxHamburgerMenu
            className="text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(!isNavOpen);
            }}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`${
          isNavOpen ? `block` : `hidden`
        } fixed z-20 top-0 left-0 size-full bg-[rgba(0,0,0,0.4)]`}
      />
      {/* Navbox */}
      <Navbox
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        navItems={navItems}
      />
    </nav>
  );
};

export default navbar;

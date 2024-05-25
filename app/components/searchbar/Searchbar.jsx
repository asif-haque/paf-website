"use client";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import OutlineButton from "../reusables/OutlineButton";
import { IoMdArrowRoundBack, IoMdClose } from "react-icons/io";
import "./Searchbar.css";
import DesktopInputBox from "./DesktopInputBox";

const Searchbar = () => {
  const [isSearchTapped, setIsSearchTapped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const handleSearchTap = () => {
    setIsSearchTapped(true);
  };
  const handleClearSearch = () => {
    setSearchTerm("");
    inputRef?.current?.focus();
  };

  return (
    <div className="shadow px-3 md:px-5 h-12 sticky top-0 z-10 bg-white">
      {isSearchTapped ? (
        <div className="searchTapped flex gap-2 items-center size-full">
          <button className="text-xl" onClick={() => setIsSearchTapped(false)}>
            <IoMdArrowRoundBack />
          </button>
          <input
            type="text"
            className="outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
            autoFocus
          />
          {searchTerm && (
            <button className="text-2xl ml-auto" onClick={handleClearSearch}>
              <IoMdClose />
            </button>
          )}
        </div>
      ) : (
        <div className="searchbar flex md:justify-between items-center gap-2 size-full">
          <div className="w-28 overflow-hidden">
            <img
              src="https://acharyaprashant.org/images/ic_videoseries.png"
              alt=""
              className="size-fit"
            />
          </div>
          <div className="hidden md:block">
            <DesktopInputBox />
          </div>
          <button className="md:hidden ml-auto" onClick={handleSearchTap}>
            <CiSearch className="text-2xl" />
          </button>
          <OutlineButton className="bg-orange-600 py-1">Login</OutlineButton>
        </div>
      )}
    </div>
  );
};

export default Searchbar;

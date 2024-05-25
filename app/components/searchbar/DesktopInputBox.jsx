"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import FilterModal from "./FilterModal";
import { getCategories } from "@/app/api/apiHandlers";

const DesktopInputBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filteredTerm, setFilteredTerm] = useState("");

  useEffect(() => {
    const handleClickOutside = () => {
      setIsModalOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleChooseFilterClick = async (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log("Error getting categories: ", error);
    }
  };

  return (
    <div className="shadow h-8 flex relative rounded">
      <button
        className="flex gap-2 items-center px-2 border-r-[1px]"
        onClick={handleChooseFilterClick}
      >
        <span className="text-sm">{filteredTerm || `All`}</span>
        <IoMdArrowDropdown />
      </button>
      <input className="w-[400px] lg:w-[500px] outline-none px-3" />
      <button className="bg-orange-200 px-1 rounded-r">
        <CiSearch className="text-xl" />
      </button>
      {isModalOpen && (
        <>
          <FilterModal
            categories={categories}
            filteredTerm={filteredTerm}
            setFilteredTerm={setFilteredTerm}
            setIsModalOpen={setIsModalOpen}
          />
          <div className="fixed top-0 left-0 size-full bg-[rgba(39,39,39,0.4)]" />
        </>
      )}
    </div>
  );
};

export default DesktopInputBox;

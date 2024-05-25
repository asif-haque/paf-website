import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const FilterModal = ({
  categories,
  filteredTerm,
  setFilteredTerm,
  setIsModalOpen,
}) => {
  const [expandedItem, setExpandedItem] = useState();
  const [expandedItemChildren, setExpandedItemChildren] = useState();

  const handleExpand = (el) => {
    if (expandedItemChildren && el.tagId === expandedItemChildren[0]?.parent) {
      return; // to avoid filtering again of the already expanded element
    }
    if (el.hasChildren) {
      setExpandedItem(el);
      const data = categories[1]?.filter((item) => item.parent === el.tagId);
      setExpandedItemChildren(data);
    } else {
      setExpandedItemChildren(null);
      setExpandedItem(null);
    }
  };

  const handleFilterClick = (filter) => {
    setFilteredTerm(filter);
    setIsModalOpen(false);
  };

  return (
    <div
      className="filter-modal h-[60vh] w-fit rounded-xl bg-white absolute z-50 top-12 left-0 flex py-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex-1 w-[250px]">
        <button
          className={`w-full px-3 py-2.5 text-left hover:bg-blue-50 hover:text-orange-600 ${
            filteredTerm === "" && `text-orange-600`
          }`}
          onClick={() => handleFilterClick("")}
        >
          All
        </button>
        {categories[0]?.map((el) => (
          <button
            key={el.name.english}
            className={`flex items-center justify-between w-full px-3 py-2.5 hover:bg-blue-50 hover:text-orange-600 ${
              (el === expandedItem || el.name.english === filteredTerm) &&
              `text-orange-600`
            }`}
            onMouseEnter={() => handleExpand(el)}
            onClick={() => handleFilterClick(el.name.english)}
          >
            {el.name.english}
            {el.hasChildren && (
              <button
                className=""
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand(el);
                }}
              >
                <FaAngleRight />
              </button>
            )}
          </button>
        ))}
      </div>
      {expandedItem && (
        <div className="flex-1 border-l-[1px] overflow-y-auto w-[250px]">
          {expandedItemChildren?.map((el) => (
            <button
              key={el.name.english}
              className={`flex items-center text-left w-full px-3 py-2.5 hover:bg-blue-50 hover:text-orange-600 ${
                el.name.english === filteredTerm && `text-orange-600`
              }`}
              onClick={() => handleFilterClick(el.name.english)}
            >
              {el.name.english}
              {el.hasChildren && <FaAngleRight />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterModal;

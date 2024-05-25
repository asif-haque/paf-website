import React from "react";
import Dropdown from "./Dropdown";

const DesktopNav = ({ navItems }) => {
  return (
    <div className="hidden md:flex h-full ml-1">
      {navItems.map((el) => (
        <div
          key={el.name}
          className={`text-xs lg:text-sm h-full flex items-center md:px-2 lg:px-3 hover:cursor-pointer ${
            el.active && `bg-orange-600`
          }`}
        >
          {el.children ? (
            <Dropdown options={el.children}>{el.name}</Dropdown>
          ) : (
            el.name
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;

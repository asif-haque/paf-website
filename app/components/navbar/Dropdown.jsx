import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa6";

const Dropdown = ({ children, options }) => {
  const [tapped, setTapped] = useState(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="outline-none flex items-center gap-1"
          onClick={() => setTapped(!tapped)}
        >
          {children}
          <FaCaretDown
            className={`${tapped ? `rotate-90` : `rotate-0`} transition-all`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative top-4 left-10">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.name}
              className="hover:cursor-pointer"
            >
              {option.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;

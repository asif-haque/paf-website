import React from "react";

const OutlineButton = ({ className, children, ...props }) => {
  return (
    <button
      className={`text-white border px-2 rounded flex items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;

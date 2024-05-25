import React from "react";
import { FaDownload } from "react-icons/fa";

const Downloadbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full flex px-3 py-2 bg-orange-100">
      <div className="flex-1">Read 130+ ebooks in App</div>
      <div className="flex-1">
        <button className="flex ml-auto bg-orange-600 text-white px-3 py-2 rounded-full items-center gap-2 text-sm">
          <FaDownload />
          <div>Download App</div>
        </button>
      </div>
    </div>
  );
};

export default Downloadbar;

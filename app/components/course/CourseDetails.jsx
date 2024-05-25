import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const CourseDetails = ({ details }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="md:flex gap-5">
      <div className="flex-[0.7]">
        <div className="rounded overflow-hidden relative">
          <img
            src={`${details.thumbnail.domain}/${details.thumbnail.basePath}/${details.thumbnail.qualities[0]}/${details.thumbnail.key}`}
            alt="Thumbnail"
            className="size-full object-cover"
          />
          <div className="absolute right-0 bottom-0 w-full p-2 bg-gradient-to-t from-[rgb(0,0,0)] to-transparent">
            <img
              src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
              alt="signature"
              className="w-[20%] ml-auto"
            />
          </div>
        </div>
        <div className="hidden md:block space-y-2 mt-3">
          <p>Share this series:</p>
          <ul className="flex gap-5 text-3xl *:hover:cursor-pointer">
            <li className="text-blue-800 hover:scale-110 transition-all">
              <FaFacebookF />
            </li>
            <li className="text-blue-500 hover:scale-110 transition-all">
              <FaTwitter />
            </li>
            <li className="text-green-500 hover:scale-110 transition-all">
              <FaWhatsapp />
            </li>
            <li className="text-blue-800 hover:scale-110 transition-all">
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-[600] text-neutral-800 mt-5 mb-1 md:m-0">
          {details.subtitle}
        </h3>
        <div
          className={`text-neutral-700 tracking-wider text-sm leading-6 ${
            !expanded && `line-clamp-4`
          } md:line-clamp-none`}
        >
          {details.description}
        </div>
        {!expanded && (
          <button
            className="md:hidden text-orange-600"
            onClick={() => setExpanded(true)}
          >
            Read more
          </button>
        )}
        {expanded && (
          <button
            className="md:hidden text-orange-600"
            onClick={() => setExpanded(false)}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;

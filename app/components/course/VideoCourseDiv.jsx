import React from "react";

const VideoCourseDiv = ({ course, index }) => {
  const { courseHours } = course;
  const hours = Math.floor(courseHours);
  const minutes = Math.round((courseHours - hours) * 60);
  return (
    <div className="px-3 pt-4 text-sm text-gray-500 rounded-lg cursor-pointer hover:shadow-xl hover:bg-slate-100 hover:scale-[102%] transition-all duration-200">
      <div className="w-fit bg-slate-400 text-white px-3 py-1 rounded mb-5">
        भाग {index + 1}
      </div>
      <div className="text-base text-black mb-1">{course.title}</div>
      <div className="">{course.subtitle}</div>
      <div>
        {hours > 0 && `${hours} ${hours === 1 ? `hour` : `hours`}`}{" "}
        {minutes > 0 && `${minutes} ${minutes === 1 ? `minute` : `minutes`}`}
      </div>
      <div>
        Contribution: &#8377;{course.amount}{" "}
        <span className="line-through">&#8377;{course.originalAmount}</span>
      </div>
      <div className="w-fit bg-blue-200 px-2 py-1 rounded capitalize my-2">
        {course.language}
      </div>
      <div className="flex text-orange-600">
        <button className="pr-5 border-r-2">ADD TO CART</button>
        <button className="pl-5">ENROL</button>
      </div>
      <div className="w-full h-[1px] mt-5 bg-gray-300" />
    </div>
  );
};

export default VideoCourseDiv;

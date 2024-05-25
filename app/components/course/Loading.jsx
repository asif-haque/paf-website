import React from "react";

const Loading = () => {
  return (
    <div className="h-screen animate-pulse md:flex gap-5">
      <div className="flex-[0.6] bg-neutral-300 h-[250px] rounded mb-5" />
      <div className="flex-1 space-y-3">
        <div className=" bg-neutral-300 h-[30px] w-[30%] rounded-full" />
        <div className="bg-neutral-300 h-[20px] w-[90%] rounded-full" />
        <div className="bg-neutral-300 h-[20px] w-[70%] rounded-full" />
        <div className="bg-neutral-300 h-[20px] w-[50%] rounded-full" />
      </div>
    </div>
  );
};

export default Loading;

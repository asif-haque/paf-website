import React from "react";
import OutlineButton from "../reusables/OutlineButton";

const Donatebar = () => {
  return (
    <div className="bg-slate-800 flex md:justify-center gap-2 px-3 py-1 md:py-3 text-white">
      <div className="mt-1">
        <div className="size-[14px] border bg-red-500 rounded-full" />
      </div>
      <p className="text-sm">
        Acharya Prashant is dedicated to building a brighter future for you
      </p>
      <div className="min-w-fit my-auto md:ml-5">
        <OutlineButton className="px-3 text-sm">Extend your hand</OutlineButton>
      </div>
    </div>
  );
};

export default Donatebar;

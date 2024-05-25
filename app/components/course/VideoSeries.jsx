import React from "react";
import VideoCourseDiv from "./VideoCourseDiv";

const VideoSeries = ({ courses }) => {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold py-2 border-b-2">
        Video Series ({courses?.length})
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-3 my-2">
        {courses.map((course, index) => (
          <VideoCourseDiv key={course.id} course={course} index={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoSeries;

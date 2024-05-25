"use client";
import { getCourse } from "@/app/api/apiHandlers";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { FaAngleRight, FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";
import CourseDetails from "./CourseDetails";
import VideoSeries from "./VideoSeries";

const Course = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourse()
      .then((res) => {
        setData(res);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setData("");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-5 md:px-10 py-5">
      {/* Navigation */}
      <div className="flex items-center gap-1 mb-5">
        <button className="text-orange-600 mr-3">
          <FaArrowLeft />
        </button>
        <span>Home</span>
        <span>
          <FaAngleRight />
        </span>
        <span className="font-bold">{data?.details?.title}</span>
      </div>

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {!loading && error && (
        <div className="text-red-500 font-bold text-center">
          {error.message}
        </div>
      )}

      {/* Course */}
      {!loading && !error && data && (
        <div>
          <CourseDetails details={data.details} />
          <VideoSeries courses={data.courses} />
        </div>
      )}
    </div>
  );
};

export default Course;

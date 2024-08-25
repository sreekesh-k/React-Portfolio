import React from "react";
import { ReactTyped } from "react-typed";

function Type() {
  return (
    <h1 className="text-base md:text-xl xl:text-3xl uppercase tracking-widest">
      i'm a{" "}
      <span className="text-violet-500 uppercase">
        {" "}
        <ReactTyped
          strings={[
            "Student",
            "Frontend Developer",
            "Backend Developer",
            "UI/UX Designer",
            "Fullstack Developer",
            "Software Developer",
            "Cloud Enthusiast",
            "DevOps Learner",
            "Tech Enthusiast",
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
      </span>
    </h1>
  );
}

export default Type;

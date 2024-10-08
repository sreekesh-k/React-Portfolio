import React from "react";
import Cards from "../components/Cards";

import euphoriaImage from "../assets/projects/euphoria.webp";
import attendanceImage from "../assets/projects/attendance.webp";
import cameraImage from "../assets/projects/camera.webp";
import marioImage from "../assets/projects/mario.webp";

function Projects({ theme }) {
  return (
    <section className="p-5 md:p-10 flex flex-col items-center justify-center container mx-auto relative">
      <h1 className="text-4xl md:text-5xl font-popins uppercase text-center">
        <span className="text-violet-500">Projects &</span> Portfolio
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 xl:w-4/5">
        <Cards
          imageSrc={euphoriaImage}
          projectName="EUPHORIA"
          sourceCodeUrl="https://github.com/sreekesh-k/EUPHORIA-Frontend/tree/main"
          liveUrl="https://euphoria.rlabz.in/"
          theme={theme}
        />
        <Cards
          imageSrc={attendanceImage}
          projectName="Attendance Verification System"
          sourceCodeUrl="https://github.com/sreekesh-k/RCSS-Attendance-Verification"
          liveUrl="https://rcss-attendance-verification.vercel.app/"
          theme={theme}
        />
        <Cards
          imageSrc={cameraImage}
          projectName="Camera Store"
          sourceCodeUrl="https://github.com/sreekesh-k/Camera-Store"
          liveUrl="https://camerastore.vercel.app/"
          theme={theme}
        />
        <Cards
          imageSrc={marioImage}
          projectName="Super Mario Clone"
          sourceCodeUrl="https://github.com/sreekesh-k/Super-Mario-Bros-Unity"
          liveUrl="https://sreekesh-k.github.io/Super-Mario-Bros-Unity/"
          theme={theme}
        />
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import TechCard from "../components/TechCards";

function Portfolio({ theme }) {
  return (
    <section className="p-5 md:p-10 flex flex-col items-center justify-center container mx-auto relative dura">
      <h1 className="text-xl md:text-2xl font-popins uppercase text-center">
        <span className="text-violet-500">Tech Stack</span> Used for{" "}
        <span className="text-2xl md:text-3xl">Developing </span>
        <span> & </span>
        <span className="text-2xl md:text-3xl"> deploying</span> this website:
      </h1>
      <div className="flex flex-row flex-wrap  items-center justify-center gap-10 md:gap-28 xl:w-4/5 mt-10">
        <TechCard
          logo="images/tech/react.svg"
          altText="React"
          description="React is a JavaScript library for building user interfaces."
          className="react"
        />
        <TechCard
          logo="images/tech/node.svg"
          altText="NodeJS"
          description="Tailwind CSS is a utility-first CSS framework."
          className="node"
        />
        <TechCard
          logo="images/tech/tailwind.svg"
          altText="Tailwind CSS"
          className="docker"
          description="Tailwind CSS is a utility-first CSS framework."
        />
        <TechCard
          logo="images/tech/mongo.svg"
          altText="mongoDb"
          className="mongo"
          description="Tailwind CSS is a utility-first CSS framework."
        />
        <TechCard
          logo="images/tech/docker.svg"
          altText="docker"
          className="docker"
          description="Tailwind CSS is a utility-first CSS framework."
        />
      </div>
      <div className=" w-11/12 bg-dark bg-opacity-10 rounded-xl p-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          repudiandae amet illum? Cum, repudiandae odit dolore, ea veritatis
          reiciendis aut deserunt blanditiis modi quisquam tenetur beatae facere
          vero, nihil unde.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;

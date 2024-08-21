import React, { useState } from "react";

function About({ theme }) {
  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(!more);
  };
  return (
    <section className="p-5 md:p-10 flex md:flex-row items-center justify-center container mx-auto relative">
      <span
        className={`hidden md:block aspect-square w-[5%] mr-2 rounded-full absolute top-[50%] left-0 ${
          theme === "light" ? "bg-dark" : "bg-light"
        }`}
      ></span>
      <article className=" relative flex flex-col items-center gap-10 shadow-md rounded-xl md:rounded-2xl xl:rounded-full  px-4 md:px-0 bg-dark bg-opacity-10 py-10 ">
        <h1 className="text-4xl md:text-5xl font-popins">
          <span className="text-violet-500">ABOUT</span> ME
        </h1>
        <p className="flex-1 flex flex-col items-center justify-center font-roboto text-justify gap-5 md:w-2/3">
          <li className="block">
            I am a dedicated and adaptable student at{" "}
            <a
              href="https://rajagiri.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-violet-400"
            >
              Rajagiri College of Social Sciences
            </a>
            , Kerala, with a deep passion for continuous learning and a strong
            commitment to fulfilling my responsibilities with excellence. My
            flexibility allows me to navigate diverse tasks and challenges with
            ease, while my intrinsic motivation drives me to consistently pursue
            the best possible outcomes. I thrive in environments that challenge
            me to think critically and creatively, fueled by a natural curiosity
            to explore and solve complex problems.
          </li>
          <li className={`${more ? "block" : "hidden"} md:block`}>
            I'm passionate about web development and creating innovative digital
            solutions.I thrive on turning ideas into reality through coding and
            design. With a keen eye for detail and a love for problem-solving,
            I'm dedicated to crafting user-friendly experiences that leave a
            lasting impression.{" "}
            <span className=" text-violet-400">
              Let's build something amazing together!
            </span>
          </li>
        </p>
        <button
          className={` md:hidden absolute bottom-3 right-5 text-violet-400`}
          onClick={showMore}
        >
          {more ? "show less" : "...more"}
        </button>
      </article>
      <span
        className={`hidden md:block aspect-square md:w-[12%] w-[15%] mr-2 rounded-full absolute bottom-0 right-0 ${
          theme === "light" ? "bg-dark" : "bg-light"
        } `}
      ></span>
    </section>
  );
}

export default About;

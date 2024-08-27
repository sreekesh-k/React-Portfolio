import React, { useState } from "react";

function About({ theme }) {
  const [more, setMore] = useState(false);
  const showMore = () => {
    setMore(!more);
  };
  return (
    <section className="p-5 md:p-10 flex sm:flex-row items-center justify-center container mx-auto relative">
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
          <section className="block">
            I am currently pursuing a Master's degree in Computer Applications
            at{" "}
            <a
              href="https://rajagiri.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rajagiri College Of Social Sciences"
              title="RCSS"
              className=" text-violet-500"
            >
              Rajagiri College of Social Sciences
            </a>
            , and I'm truly enjoying every moment of it. My journey here has
            been anything but traditional. Initially, I was on the path to
            becoming a Chartered Accountant, but along the way, I discovered
            that my true passion lay elsewhere. As a gamer, I was always
            intrigued by the technology behind the games I loved. I would spend
            hours troubleshooting glitches and solving issues, always wondering,
            "Why won't this game run?" This curiosity led me to dive deeper into
            computer science, and before long, I was completely hooked.
          </section>
          <section
            className={`${more ? "block transition-all" : "hidden"} md:block `}
          >
            Now, I am driven by a desire to learn and explore. Whether it's
            coding, software development, or computer systems, I am fascinated
            by how technology can solve real-world problems. My interests span
            several areas, including Web Development, DevOps, Cloud Computing,
            and Information Security. Additionally, I am passionate about Game
            Development and UI/UX Design, as I love how technology can be
            harnessed to create engaging user experiences and immersive gaming
            environments. I am excited to see where my skills will take me, and
            I am constantly seeking opportunities to collaborate with others who
            share my passion for technology. <br />
            <a
              href="https://github.com/sreekesh-k"
              aria-label="Visit Sreekesh's GitHub profile"
              title="Lets Collaborate"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-violet-500"
            >
              Let's collaborate and build something amazing together!
            </a>
          </section>
        </p>
        <button
          className={` md:hidden absolute bottom-3 right-5 text-violet-500`}
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

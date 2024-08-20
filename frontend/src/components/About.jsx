import React from "react";

function About({ theme }) {
  return (
    <section className="p-5 md:p-10">
      <article className="container flex flex-col items-center gap-10 mx-auto border shadow-md border-primary-dark rounded-xl md:rounded-full px-4 md:px-0 bg-secondary bg-opacity-10 py-10">
        <h1 className="text-4xl md:text-5xl font-popins">
          <span className="text-violet-500">ABOUT</span> ME
        </h1>
        <p className="relative flex-1 flex flex-col items-center justify-center font-roboto text-justify gap-5 md:w-2/3">
          <li>
            I am a dedicated and adaptable student at{" "}
            <span className=" text-secondary">
              Rajagiri College of Social Sciences
            </span>
            , Kerala, with a deep passion for continuous learning and a strong
            commitment to fulfilling my responsibilities with excellence. My
            flexibility allows me to navigate diverse tasks and challenges with
            ease, while my intrinsic motivation drives me to consistently pursue
            the best possible outcomes. I thrive in environments that challenge
            me to think critically and creatively, fueled by a natural curiosity
            to explore and solve complex problems.
          </li>
          <li>
            I'm passionate about web development and creating innovative digital
            solutions.I thrive on turning ideas into reality through coding and
            design. With a keen eye for detail and a love for problem-solving,
            I'm dedicated to crafting user-friendly experiences that leave a
            lasting impression.{" "}
            <span className=" text-secondary">
              Let's build something amazing together!
            </span>
          </li>
        </p>
      </article>
    </section>
  );
}

export default About;

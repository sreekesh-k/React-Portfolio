import { ReactTyped } from "react-typed";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HeroBanner({ theme }) {
  return (
    <header className="px-5 sm:my-0 md:px-10 h-[88svh] min-h-[420px] relative overflow-hidden">
      <div className=" container flex flex-col-reverse items-center gap-2 mx-auto sm:flex-row h-full">
        <div className="relative flex flex-col gap-3 xl:gap-5 w-full items-start justify-start py-5 h-full px-2 sm:justify-center flex-1 font-popins">
          <h1 className="uppercase">
            <span
              className={`block tracking-wide text-xl md:text-2xl xl:text-4xl ${
                theme === "light"
                  ? "text-white text-border-black"
                  : "text-black text-border-white"
              }`}
            >
              Hey There Its Me,
            </span>
            <span className="text-3xl md:text-3xl xl:text-5xl  text-violet-500 md:tracking-wider">
              SREEKESH K PRABHU
            </span>
          </h1>
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
          <div className="relative flex items-start justify-center gap-5 md:gap-10 mt-4">
            <a className="grid place-items-center w-6 md:w-10  aspect-square invert">
              <FaGithub
                className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                color="#333"
              />
            </a>
            <a className="grid place-items-center w-6 md:w-10  aspect-square">
              <SiGmail
                className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105 "
                color="#D44638"
              />
            </a>
            <a className="grid place-items-center w-6 md:w-10 aspect-square">
              <FaLinkedin
                className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                color="#0077B5"
              />
            </a>
            <a className="grid place-items-center w-6 md:w-10 aspect-square">
              <FaInstagram
                className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                color="#C13584"
              />
            </a>
          </div>
          <div className="text-xs sm:text-sm font-roboto font-medium xl:text-pretty text-justify w-11/12 ">
            I’m a passionate developer from India, constantly diving into new
            tech challenges. My curiosity fuels daily discoveries and an endless
            quest for knowledge.
          </div>
          <a
            href="#"
            class="mybtn tex mb-2 grid h-10  place-items-center text-center hover:scale-105 px-5"
          >
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span class="font-popins text-xs md:text-base uppercase font-medium">
              Download Resume
            </span>
          </a>
        </div>
        <figure className="flex-[2] sm:flex-1 w-full relative animate-float">
          <div className="relative w-full h-full react">
            <div
              className={`drop-shadow-glow w-[75%] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full ${
                theme === "light" ? " bg-dark" : "bg-light"
              } bg-opacity-[30%]`}
            ></div>
          </div>
          <img
            className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform object-contain hover:scale-105 ${
              theme === "light" ? "" : ""
            }`}
            src="/images/profile/profile.webp"
            alt="Me"
          />
        </figure>
      </div>
    </header>
  );
}

export default HeroBanner;

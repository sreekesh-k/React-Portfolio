import { ReactTyped } from "react-typed";

function HeroBanner({ theme }) {
  return (
    <header className="px-5 my-12 sm:my-0 md:px-10 h-[88svh] min-h-[420px] relative overflow-hidden">
      <div className=" container flex flex-col-reverse items-center gap-2 mx-auto sm:flex-row h-full">
        <div className="flex flex-col w-full items-start justify-start py-5 h-full px-2 sm:justify-center flex-1 font-popins ">
          <h1 className="uppercase mb-3">
            <span
              className={`block tracking-wide text-xl md:text-4xl ${
                theme === "light"
                  ? "text-white text-border-black"
                  : "text-black text-border-white"
              }`}
            >
              Hey There Its Me,
            </span>
            <span className="text-3xl md:text-5xl  text-violet-500 md:tracking-wider">
              SREEKESH K PRABHU
            </span>
          </h1>
          <h1 className="text-base md:text-2xl xl:text-3xl uppercase tracking-widest">
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
        </div>
        <div className="flex-[2] sm:flex-1 w-full relative animate-float">
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
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;

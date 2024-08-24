import { ReactTyped } from "react-typed";

function HeroBanner({ theme }) {
  return (
    <header className="px-5 md:px-10 my-12 sm:my-5 xl:my-0 h-[88svh] min-h-[420px] sm:min-h-[78svh] relative overflow-hidden">
      <div className=" container flex flex-col items-center gap-10 mx-auto sm:flex-row h-full">
        <div className="flex flex-col justify-center sm:flex-2 md:flex-1 font-popins">
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
        <div className=" flex-[3] md:flex-1 h-full w-full relative animate-float">
          <div
            className={`w-11/12 md:w-[75%] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full ${
              theme === "light" ? " bg-light" : "bg-dark"
            } bg-opacity-40`}
          ></div>
          <img
            className={`absolute mt-10 left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-contain hover:scale-105 ${
              theme === "light" ? " brightness-125" : ""
            }`}
            src="/images/profile/profile.webp"
            alt="Me"
          />
          {/* <div
            className={`absolute bottom-0 left-0 w-2/3 ${
              theme === "light" ? "bg-[#f2f4f8]" : "bg-[#1a1a22]"
            } h-[40%]`}
            style={{
              clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            }}
          ></div>
          <div
            className={`absolute bottom-0 right-0 w-2/3  ${
              theme === "light" ? "bg-[#f2f4f8]" : "bg-[#1a1a22]"
            } h-[40%]`}
            style={{
              clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
            }}
          ></div> */}
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;

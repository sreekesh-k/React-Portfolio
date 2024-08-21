function HeroBanner({ theme }) {
  return (
    <header className="px-10 my-12 sm:my-5 xl:my-0 h-[80svh] min-h-[600px] relative overflow-hidden">
      <div className=" container flex flex-col items-center gap-10 mx-auto xl:flex-row h-full">
        <div className="flex flex-col justify-center flex-1 font-popins">
          <h1 className="uppercase mb-3">
            <span
              className={`block tracking-wide text-2xl md:text-4xl ${
                theme === "light"
                  ? "text-white text-border-black"
                  : "text-black text-border-white"
              }`}
            >
              Hey There Its Me,
            </span>
            <span className="text-4xl md:text-5xl  text-violet-500 tracking-wider">
              SREEKESH K PRABHU
            </span>
          </h1>
          <h1 className="text-sm md:text-3xl uppercase tracking-widest">
            i'm a <span className="text-violet-500">Fullstack</span> web{" "}
            <span className="text-violet-500">developer</span>
          </h1>
        </div>
        <div className=" flex-[3] md:flex-1 h-full w-full relative animate-float">
          <div className="w-11/12 md:w-[75%] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-dark bg-opacity-40"></div>
          <img
            className="absolute mt-10 left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-contain hover:scale-105"
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

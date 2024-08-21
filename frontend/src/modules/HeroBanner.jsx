function HeroBanner({ theme }) {
  return (
    <header className="p-10 my-12 sm:my-5 xl:my-0">
      <div className=" container flex flex-col items-center gap-10 mx-auto xl:flex-row">
        <div className="grid flex-1 font-popins">
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
            i'm a <span className="text-secondary">Fullstack</span> web{" "}
            <span className="text-secondary">developer</span>
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            className="object-contain"
            src="/images/profile/profile.png"
            alt="Me"
          />
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;

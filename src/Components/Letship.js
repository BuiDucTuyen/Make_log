import React from "react";

const Letship = () => {
  return (
    <section className="w-full gap-10 px-4 py-10 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]">
        <div className="relative flex w-full max-w-3xl flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-pink-200 px-6 py-6 md:flex-row md:px-10 md:py-14">
          <div className="w-full text-left md:max-w-max">
            <h2 className="max-w-md font-display softie_2 text-6xl font-black uppercase text-inherit md:text-7xl">
              <span className="text-fuchsia-500 animate-shine">L</span>
              <span className="text-purple-500 animate-shine">e</span>
              <span className="text-violet-500 animate-shine">t</span>
              <span className="text-indigo-500 animate-shine">'</span>
              <span className="text-blue-500 animate-shine">s</span>
              <span className="animate-shine"> </span>
              <span className="text-fuchsia-500 animate-shine">s</span>
              <span className="text-purple-500 animate-shine">h</span>
              <span className="text-violet-500 animate-shine">i</span>
              <span className="text-indigo-500 animate-shine">p</span>
              <span className="text-fuchsia-500 animate-shine">!</span>
            </h2>
            <p className="text-xl font-semibold text-purple-700">
              The change management tool you need.
            </p>
          </div>
          <a
            className="mx-auto flex items-center justify-center border bg-zinc-900 text-white border-transparent px-6 py-4 text-lg font-bold rounded-2xl hover:opacity-80 transition-opacity w-full !bg-purple-600 md:mx-0 md:w-max"
            aria-label="Log in or Sign up"
            href="https://app.makelog.com"
          >
            Start now for free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Letship;

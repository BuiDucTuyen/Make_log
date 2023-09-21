import React from 'react';

const Hero = () => {
  return (
    <section className="relative -mt-24 flex w-full items-center justify-center  bg-gradient-to-b from-blue-600 via-pink-500 to-yellow-600 px-4 pb-[400px] pt-52 before:absolute before:top-1/3 before:h-[140%] before:w-[140%] before:rounded-[100%] before:bg-radial before:blur-xl before:content-[''] after:absolute after:bottom-0 after:h-52 after:w-full after:bg-gradient-to-t after:from-white md:px-10">
      <div className="absolute h-full w-full bg-grain"></div>
      <div className="relative w-full max-w-4xl text-center text-white">
        <div className="absolute -top-16 left-0 animate-loadIn motion-reduce:animate-none">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 animate-[shaker_0.8s_infinite_alternate] text-amber-300 md:w-auto">
            <path d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute -top-16 right-0 animate-loadIn motion-reduce:animate-none md:-top-14">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[shaker_0.8s_infinite_alternate-reverse] text-amber-300">
            <path d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="mt-16 w-full">
          <a
            className="mx-auto flex items-center justify-center border bg-white text-blue-600 border-transparent px-6 py-4 text-lg font-bold rounded-2xl hover:scale-[0.98] tracking-wide transition-all hover:tracking-normal mx-auto w-full sm:w-max"
            aria-label="sign up"
            href=""
          >
            Start now for free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Logo from "./Logo";
import Connect from './Connect';

function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log(1);
    setIsMobileMenuOpen(!isMobileMenuOpen);

 
  };
  
   
  return (
    <section>
      <header className="relative z-[51] flex w-full justify-center px-4 pt-10 md:px-10 text-white">
        <div className="flex w-full max-w-5xl items-center justify-between text-inherit">
          <a aria-label="Navigate to the homepage" href="/">
            <Logo />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-lg softie_1 font-black">
              <li>
                <a
                  className="transition-opacity hover:opacity-80"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="transition-opacity hover:opacity-80"
                  href="/approach"
                >
                  Approach
                </a>
              </li>
              <li>
                <a className="transition-opacity hover:opacity-80" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <Connect/>
              </li>
              <li>
                <a
                  className="mx-auto flex items-center justify-center px-3 py-2 border border-current rounded-xl"
                  aria-label="Log in or Sign up"
                  href=""
                >
                  Log in<span className="mx-3">/</span>Sign up
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden z-[52] p-2 -mr-2 text-white bg-primary-light hover:bg-primary-dark transition-all duration-300 rounded"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <button
                onClick={toggleMobileMenu}
                className="md:hidden z-[52] p-2 -mr-2 text-white bg-primary-light hover:bg-primary-dark transition-all duration-300 rounded"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2C17 2.55228 16.5523 3 16 3H2C1.44772 3 1 2.55228 1 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M1 9C1 8.44772 1.44772 8 2 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H2C1.44772 10 1 9.55228 1 9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M1 16C1 15.4477 1.44772 15 2 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2C17 2.55228 16.5523 3 16 3H2C1.44772 3 1 2.55228 1 2Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1 9C1 8.44772 1.44772 8 2 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H2C1.44772 10 1 9.55228 1 9Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M1 16C1 15.4477 1.44772 15 2 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-blue-600">
            <div className="pt-10 px-5">
              <Logo />
            </div>

            <nav className="absolute top-0 left-0 right-0  pt-16 pb-6 px-4 shadow-md">
              <ul className="flex flex-col text-left gap-5 pt-20 text-2xl softie_1 font-black">
                <li>
                  <a
                    className="transition-opacity hover:opacity-80"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="transition-opacity hover:opacity-80"
                    href="/approach"
                  >
                    Approach
                  </a>
                </li>
                <li>
                  <a
                    className="transition-opacity hover:opacity-80"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="mx-auto flex items-center justify-center border border-current px-5 py-3 rounded-xl ml-3"
                    aria-label="Log in or Sign up"
                    href=""
                  >
                    Log in<span className="mx-3">/</span>Sign up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <div className="relative -mt-24 flex w-full items-center justify-center overflow-hidden bg-blue-600 px-4 pb-[400px] pt-52 before:absolute before:top-1/3 before:h-[140%] before:w-[140%] before:rounded-[100%] before:bg-radial before:blur-xl before:content-[''] after:absolute after:bottom-0 after:h-52 after:w-full after:bg-gradient-to-t after:from-white md:px-10">
        <div className="absolute h-full w-full before:bg-radial"></div>
        <div className="relative w-full max-w-4xl text-center text-white">
          <div className="absolute -top-16 left-0 animate-loadIn motion-reduce:animate-none">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 animate-[shaker_0.8s_infinite_alternate] text-amber-300 md:w-auto"
            >
              <path
                d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="absolute -top-16 right-0 animate-loadIn motion-reduce:animate-none md:-top-14">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-[shaker_0.8s_infinite_alternate-reverse] text-amber-300"
            >
              <path
                d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="absolute -left-2 top-0 animate-[loadIn_0.3s_forwards] motion-reduce:animate-none md:top-4">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 animate-[shaker_1.2s_infinite_alternate-reverse] text-amber-300"
            >
              <path
                d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="absolute -right-2 -top-2 animate-[loadIn_0.3s_forwards] motion-reduce:animate-none md:top-4">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 animate-[shaker_1.4s_infinite_alternate] text-amber-300"
            >
              <path
                d="M12.9683 16.4794C5.21439 18.3832 0 21.934 0 26C0 30.066 5.21439 33.6168 12.9683 35.5206C15.014 45.1704 20.0776 52 26 52C31.9224 52 36.986 45.1704 39.0317 35.5206C46.7856 33.6168 52 30.066 52 26C52 21.934 46.7856 18.3832 39.0317 16.4794C36.986 6.8296 31.9224 0 26 0C20.0776 0 15.014 6.82959 12.9683 16.4794Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h1 className="font-display text-5xl softie_2 font-black uppercase md:text-5xl lg:text-6xl">
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              P
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              a
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              i
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              n
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              l
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              e
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              s
            </span>
            <span className=" inline-block animate-loadIn text-7xl motion-reduce:animate-none md:hidden md:animate-none">
              s
            </span>
            <span className="block text-5xl ">
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                R
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                e
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                l
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                e
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                a
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                s
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                e
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                {" "}
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                c
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                o
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                m
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                m
              </span>
              <span className=" inline-block animate-loadIn text-5xl motion-reduce:animate-none md:hidden md:animate-none">
                s
              </span>
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              P
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              a
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              i
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              n
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              l
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              e
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              s
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              s
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              {" "}
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              r
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              e
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              l
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              e
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              a
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              s
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              e
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              {" "}
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              c
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              o
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              m
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              m
            </span>
            <span className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn">
              s
            </span>
            <span className="block break-words text-6xl md:text-8xl lg:-mt-4 lg:text-[144px]">
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                G
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                u
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                a
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                r
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                a
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                n
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                t
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                e
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                e
              </span>
              <span className=" inline-block animate-loadIn motion-reduce:animate-none">
                d
              </span>
            </span>
          </h1>
          <p class="mx-auto mt-4 w-full max-w-sm animate-loadIn text-base font-bold  md:max-w-none lg:text-xl">
            Know what's changing, save time sharing internally &amp; externally
          </p>
          <div className="mt-10 flex items-center justify-center space-x-4">
            <a
              class="mx-auto flex items-center justify-center border bg-white text-blue-600 border-transparent px-6 py-4 text-lg font-bold rounded-2xl hover:scale-[0.98] tracking-wide transition-all hover:tracking-normal  w-full sm:w-max"
              aria-label="sign up"
              href="/"
            >
              Start now for free
            </a>
          </div>
        </div>
      </div>
      <div class="absolute flex -mt-64 w-full px-4 md:px-10">
        <div class="mx-auto  max-w-5xl flex select-none gap-10 overflow-x-hidden">
          <div class="marquee-container flex gap-20">
            <ul class="flex min-w-full run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Armory"
                  loading="lazy"
                  width="148"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="armory.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Code Combat"
                  loading="lazy"
                  width="153"
                  height="34"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="code combat.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Orb"
                  loading="lazy"
                  width="113"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="orb.c2a0ba4d.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Kong"
                  loading="lazy"
                  width="138"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="kong.44ea9500.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="PopSQL"
                  loading="lazy"
                  width="136"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="popsql-logo.11388509.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Jam"
                  loading="lazy"
                  width="117"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="jam.8d925373.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Patch"
                  loading="lazy"
                  width="142"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="patch-logo.4b3a2850.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Monte Carlo"
                  loading="lazy"
                  width="211"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="monte-carlo-logo.d856ff4f.svg"
                />
              </li>
            </ul>
            <ul class="flex min-w-full  run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Armory"
                  loading="lazy"
                  width="148"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="armory.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Code Combat"
                  loading="lazy"
                  width="153"
                  height="34"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="code combat.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Orb"
                  loading="lazy"
                  width="113"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="orb.c2a0ba4d.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Kong"
                  loading="lazy"
                  width="138"
                  height="46"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="kong.44ea9500.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="PopSQL"
                  loading="lazy"
                  width="136"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="popsql-logo.11388509.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Jam"
                  loading="lazy"
                  width="117"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="jam.8d925373.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Patch"
                  loading="lazy"
                  width="142"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="patch-logo.4b3a2850.svg"
                />
              </li>
              <li className="leading-0 !text-zinc-200">
                <img
                  alt="Monte Carlo"
                  loading="lazy"
                  width="211"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="monte-carlo-logo.d856ff4f.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

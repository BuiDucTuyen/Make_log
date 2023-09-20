import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full gap-10 px-4 py-10 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]">
        <h2 className="w-full softie_2 text-center font-display text-6xl font-black uppercase md:text-8xl">
          <span className="text-sky-500 animate-text">O</span>
          <span className="text-blue-500 animate-text">u</span>
          <span className="text-indigo-500 animate-text">r</span>
          <span className="animate-text"> </span>
          <span className="text-violet-500 animate-text">c</span>
          <span className="text-purple-500 animate-text">u</span>
          <span className="text-fuchsia-500 animate-text">s</span>
          <span className="text-pink-500 animate-text">t</span>
          <span className="text-fuchsia-500 animate-text">o</span>
          <span className="text-purple-500 animate-text">m</span>
          <span className="text-violet-500 animate-text">e</span>
          <span className="text-indigo-500 animate-text">r</span>
          <span className="text-blue-500 animate-text">s</span>
        </h2>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          {/* Testimonial 1 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md lglg:rotate-3 border-purple-950 bg-purple-300 text-purple-950">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Stephen_has_cool_hats_🎩"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Stephen Atwell"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      color: "transparent",
                    }}
                    src="stephen.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Stephen Atwell
                </h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  Armory
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Makelog makes it easy to share the right things with my customers
              at the right time.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-pink-950 bg-pink-300 text-pink-950 lg:-rotate-3">
            <div className="flex items-c  enter gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Jake_has_a_super_cute_dog_🐶"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Jake Peterson"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      color: "transparent",
                    }}
                    src="jake.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">
                  Jake Peterson
                </h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  PopSQL
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              We love how easy Makelog makes it to share updates with our users!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-amber-950 bg-amber-200 text-amber-950 lg:-rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Mei_is_awesomeee_😄"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Mei Tao"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      color: "transparent",
                    }}
                    src="mei.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">Mei Tao</h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  Monte Carlo
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Makelog is so simple and smooth to use. It makes our product
              updates effortless.
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-indigo-950 bg-indigo-300 text-indigo-950 lg:rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Nick_is_the_chillest_guy_🧊"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Nick Winter"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      color: "transparent",
                    }}
                    src="nick.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">Nick Winter</h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  CodeCombat
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              I looked at 12 different tools and none of them offer what Makelog
              does for us.
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="flex w-full rotate-0 flex-col gap-4 rounded-3xl p-6 md:p-8 lg:max-w-md border-fuchsia-950 bg-fuchsia-300 text-fuchsia-950 lg:-rotate-3">
            <div className="flex items-center gap-4 border-inherit text-inherit">
              <div className='relative border-inherit transition after:absolute after:-top-10 after:hidden after:w-max after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity hover:after:opacity-100 md:after:block md:hover:scale-110 lg:after:left-1/2 lg:after:-translate-x-1/2 after:content-["Dani_is_a_fantabulous_photographer_📸"]'>
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-inherit">
                  <img
                    className="absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
                    alt="Dani Grant"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      color: "transparent",
                    }}
                    src="dani grant.jpg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-inherit">Dani Grant</h3>
                <h4 className="text-xl font-medium text-inherit opacity-80">
                  Jam
                </h4>
              </div>
            </div>
            <p className='relative text-xl font-medium opacity-80 before:absolute before:-left-2  before:content-["“"] after:content-["”"]'>
              Teams that communicate fast ship fast, and Makelog helps us get
              the whole team on the same page and never miss a beat in release
              communications across marketing, product, customer support, and
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

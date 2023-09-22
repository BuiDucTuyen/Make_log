import React from "react";

const Hero2 = () => {
  return (
    <section className="w-full gap-10 py-10 md:px-10 md:py-20 relative px-0 pb-20 md:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]">
        <div className="relative aspect-video w-full shadow-xl shadow-indigo-500/25 md:rounded-3xl md:bg-indigo-400 md:p-3 [&amp;_video]:aspect-video [&amp;_video]:object-cover md:[&amp;_video]:overflow-hidden md:[&amp;_video]:rounded-xl">
          <div className="h-[100%] w-[100%]">
            <video
              className="h-[100%] w-[100%]"
              src="video.mp4"
              preload="auto "
              autoPlay loop playsInline webkit-playsInline x5-playsInline
            ></video>
          </div>
        </div>
        <div className="flex w-full flex-col px-4 md:flex-row md:px-0">
          <button className="w-full rounded-3xl px-8 py-6 text-left  hover:bg-zinc-100 bg-zinc-100">
            <h2 className="mb-2 text-xl font-bold text-zinc-800">
              Track changes for real
            </h2>
            <p className="text-zinc-600">
              Visibility into when a feature is ready for testing or available
              on prod.
            </p>
          </button>
          <button className="w-full rounded-3xl px-8 py-6 text-left hover:bg-zinc-100">
            <h2 className="mb-2 text-xl font-bold text-zinc-800">
              Keep your team updated
            </h2>
            <p className="text-zinc-600">
              An automated change feed your stakeholders can actually
              understand.
            </p>
          </button>
          <button className="w-full rounded-3xl px-8 py-6 text-left  hover:bg-zinc-100">
            <h2 className="mb-2 text-xl font-bold text-zinc-800">
              Save time releasing
            </h2>
            <p className="text-zinc-600">
              Beautifully formatted changelog posts you can create, publish, and
              share.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

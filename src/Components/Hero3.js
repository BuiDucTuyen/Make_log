import React from "react";

function Hero3() {
  return (
    <section className="w-full gap-10 px-4 py-10 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-[inherit]">
        <div className="grid h-auto w-full auto-rows-min grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative flex h-full w-full flex-col gap-8 rounded-3xl p-6 md:p-10 row-span-4 bg-blue-300 text-4xl text-blue-950">
            <h2 className="font-display softie_1 font-black text-left uppercase">
              Works with your tools
            </h2>
            <div className="flex w-full flex-wrap items-end gap-3">
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1s" }}
              >
                <img
                  alt="Aha logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="aha.svg"
                />
                <p className="text-xl font-bold">Aha</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.05s" }}
              >
                <img
                  alt="Asana logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="asana.svg"
                />
                <p className="text-xl font-bold">Asana</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.1s" }}
              >
                <img
                  alt="Slack logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="slack.svg"
                />
                <p className="text-xl font-bold">Slack</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.15s" }}
              >
                <img
                  alt="Github logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="gthub.svg"
                />
                <p className="text-xl font-bold">Github</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.2s" }}
              >
                <img
                  alt="Jira logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="jira.svg"
                />
                <p className="text-xl font-bold">Jira</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.25s" }}
              >
                <img
                  alt="Linear logo"
                  loading="lazy"
                  width="20"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="linear.svg"
                />
                <p className="text-xl font-bold">Linear</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.05s" }}
              >
                <img
                  alt="Asana logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="launch.svg"
                />
                <p className="text-xl font-bold">LaunchDarkly</p>
              </div>
              <div
                className="flex h-max w-max animate-bounceAround_1s_alternate_infinite gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-800 shadow-lg shadow-blue-500/50 motion-reduce:animate-none"
                style={{ animationDelay: "1.3s" }}
              >
                <img
                  alt="Trello logo"
                  loading="lazy"
                  width="28"
                  height="28"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="shortcut.svg"
                />
                <p className="text-xl font-bold">Shortcut</p>
              </div>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col gap-6 rounded-3xl text-left p-6 md:p-10 row-span-4 bg-blue-300 text-5xl text-blue-950">
            <h2 className="font-display font-bold uppercase">
              Get to "done done"
            </h2>
            <div className="relative flex w-full flex-col items-center justify-between gap-3 md:flex-row">
              <div className='relative w-full cursor-default text-base transition after:absolute after:opacity-0 md:w-1/3 after:-top-10 after:left-1/2 after:w-max after:-translate-x-1/2 after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:transition-opacity hover:after:opacity-100 after:content-["In-Progress_→_Dev"]'>
                <div className="relative flex gap-2 rounded-2xl border p-4 text-indigo-950 transition duration-500 scale-105 border-zinc-200 bg-white">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-10 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6228 10.5529C17.5935 10.5233 17.564 10.4938 17.5345 10.4643C14.9728 7.90254 12.2013 6.17544 9.8665 5.39718C7.87892 4.73465 6.61699 4.86477 5.91904 5.22506C5.79891 5.33589 5.68049 5.44963 5.56386 5.56626C5.44782 5.6823 5.33464 5.80011 5.22434 5.91961C4.86393 6.6175 4.73369 7.87949 5.39631 9.86734C6.17458 12.2021 7.90169 14.9736 10.4634 17.5353C10.493 17.5648 10.5225 17.5942 10.5521 17.6235L17.6228 10.5529ZM18.9761 12.028L12.0271 18.9769C14.1208 20.7525 16.2656 21.9804 18.1314 22.6024C20.5399 23.4052 21.8828 23.0442 22.448 22.52L22.4829 22.4852L22.5194 22.4485C23.0435 21.8833 23.4044 20.5404 22.6016 18.1322C21.9797 16.2664 20.7518 14.1216 18.9761 12.028ZM9.13785 19.0378C9.10827 19.0084 9.07872 18.979 9.04921 18.9495C5.82487 15.7252 3.73132 12.0902 3.11693 9.08957C1.10663 13.5092 1.91555 18.8885 5.53808 22.511C5.55918 22.5321 5.58035 22.5531 5.60158 22.574L9.13785 19.0378ZM7.14459 23.8594L10.6085 20.3955C13.4509 22.8356 16.472 24.4108 19.0209 24.904C15.2033 26.6665 10.6575 26.3171 7.14459 23.8594ZM20.3947 10.6094L23.8572 7.14698C26.3143 10.659 26.6641 15.2035 24.903 19.0204C24.4095 16.4718 22.8345 13.4512 20.3947 10.6094ZM22.5717 5.60398L19.037 9.13869C19.0077 9.10911 18.9782 9.07957 18.9487 9.05005C15.7249 5.8262 12.0904 3.73279 9.09 3.11807C13.5092 1.10941 18.8869 1.91874 22.5087 5.54048C22.5298 5.56158 22.5508 5.58275 22.5717 5.60398ZM23.8985 23.8992C23.8773 23.9205 23.8558 23.9414 23.8341 23.962C18.362 29.3667 9.55607 29.3574 4.12386 23.9252C-1.13468 18.6667 -1.31159 10.2468 3.58522 4.74993C3.73138 4.51436 3.90258 4.29719 4.09944 4.10032C4.29649 3.90328 4.51387 3.73196 4.74968 3.58571C10.2466 -1.30909 18.6651 -1.13155 23.9229 4.12627C29.3545 9.55777 29.3645 18.3621 23.9618 23.8343C23.941 23.8562 23.9199 23.8778 23.8985 23.8992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="relative z-10 w-min text-xl font-bold before:absolute before:-right-5 before:z-10 before:h-4 before:w-4 before:rounded-full before:bg-emerald-400 after:absolute after:-right-5 after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-emerald-300 transition before:inline after:inline">
                    Dev
                  </p>
                </div>
              </div>
              <div className='relative w-full cursor-default text-base transition after:absolute after:opacity-0 md:w-1/3 after:content-["Dev_→_Stage"]'>
                <div className="relative flex gap-2 rounded-2xl border border-transparent p-4 text-indigo-950 transition duration-500">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-10 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6228 10.5529C17.5935 10.5233 17.564 10.4938 17.5345 10.4643C14.9728 7.90254 12.2013 6.17544 9.8665 5.39718C7.87892 4.73465 6.61699 4.86477 5.91904 5.22506C5.79891 5.33589 5.68049 5.44963 5.56386 5.56626C5.44782 5.6823 5.33464 5.80011 5.22434 5.91961C4.86393 6.6175 4.73369 7.87949 5.39631 9.86734C6.17458 12.2021 7.90169 14.9736 10.4634 17.5353C10.493 17.5648 10.5225 17.5942 10.5521 17.6235L17.6228 10.5529ZM18.9761 12.028L12.0271 18.9769C14.1208 20.7525 16.2656 21.9804 18.1314 22.6024C20.5399 23.4052 21.8828 23.0442 22.448 22.52L22.4829 22.4852L22.5194 22.4485C23.0435 21.8833 23.4044 20.5404 22.6016 18.1322C21.9797 16.2664 20.7518 14.1216 18.9761 12.028ZM9.13785 19.0378C9.10827 19.0084 9.07872 18.979 9.04921 18.9495C5.82487 15.7252 3.73132 12.0902 3.11693 9.08957C1.10663 13.5092 1.91555 18.8885 5.53808 22.511C5.55918 22.5321 5.58035 22.5531 5.60158 22.574L9.13785 19.0378ZM7.14459 23.8594L10.6085 20.3955C13.4509 22.8356 16.472 24.4108 19.0209 24.904C15.2033 26.6665 10.6575 26.3171 7.14459 23.8594ZM20.3947 10.6094L23.8572 7.14698C26.3143 10.659 26.6641 15.2035 24.903 19.0204C24.4095 16.4718 22.8345 13.4512 20.3947 10.6094ZM22.5717 5.60398L19.037 9.13869C19.0077 9.10911 18.9782 9.07957 18.9487 9.05005C15.7249 5.8262 12.0904 3.73279 9.09 3.11807C13.5092 1.10941 18.8869 1.91874 22.5087 5.54048C22.5298 5.56158 22.5508 5.58275 22.5717 5.60398ZM23.8985 23.8992C23.8773 23.9205 23.8558 23.9414 23.8341 23.962C18.362 29.3667 9.55607 29.3574 4.12386 23.9252C-1.13468 18.6667 -1.31159 10.2468 3.58522 4.74993C3.73138 4.51436 3.90258 4.29719 4.09944 4.10032C4.29649 3.90328 4.51387 3.73196 4.74968 3.58571C10.2466 -1.30909 18.6651 -1.13155 23.9229 4.12627C29.3545 9.55777 29.3645 18.3621 23.9618 23.8343C23.941 23.8562 23.9199 23.8778 23.8985 23.8992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="relative z-10 w-min text-xl font-bold before:absolute before:-right-5 before:z-10 before:hidden before:h-4 before:w-4 before:rounded-full before:bg-emerald-400 after:absolute after:-right-5 after:hidden after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-emerald-300">
                    Stage
                  </p>
                </div>
              </div>
              <div className='relative w-full cursor-default text-base transition after:absolute after:opacity-0 md:w-1/3 after:content-["Stage_→_Prod"]'>
                <div className="relative flex gap-2 rounded-2xl border border-transparent p-4 text-indigo-950 transition duration-500">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-10 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6228 10.5529C17.5935 10.5233 17.564 10.4938 17.5345 10.4643C14.9728 7.90254 12.2013 6.17544 9.8665 5.39718C7.87892 4.73465 6.61699 4.86477 5.91904 5.22506C5.79891 5.33589 5.68049 5.44963 5.56386 5.56626C5.44782 5.6823 5.33464 5.80011 5.22434 5.91961C4.86393 6.6175 4.73369 7.87949 5.39631 9.86734C6.17458 12.2021 7.90169 14.9736 10.4634 17.5353C10.493 17.5648 10.5225 17.5942 10.5521 17.6235L17.6228 10.5529ZM18.9761 12.028L12.0271 18.9769C14.1208 20.7525 16.2656 21.9804 18.1314 22.6024C20.5399 23.4052 21.8828 23.0442 22.448 22.52L22.4829 22.4852L22.5194 22.4485C23.0435 21.8833 23.4044 20.5404 22.6016 18.1322C21.9797 16.2664 20.7518 14.1216 18.9761 12.028ZM9.13785 19.0378C9.10827 19.0084 9.07872 18.979 9.04921 18.9495C5.82487 15.7252 3.73132 12.0902 3.11693 9.08957C1.10663 13.5092 1.91555 18.8885 5.53808 22.511C5.55918 22.5321 5.58035 22.5531 5.60158 22.574L9.13785 19.0378ZM7.14459 23.8594L10.6085 20.3955C13.4509 22.8356 16.472 24.4108 19.0209 24.904C15.2033 26.6665 10.6575 26.3171 7.14459 23.8594ZM20.3947 10.6094L23.8572 7.14698C26.3143 10.659 26.6641 15.2035 24.903 19.0204C24.4095 16.4718 22.8345 13.4512 20.3947 10.6094ZM22.5717 5.60398L19.037 9.13869C19.0077 9.10911 18.9782 9.07957 18.9487 9.05005C15.7249 5.8262 12.0904 3.73279 9.09 3.11807C13.5092 1.10941 18.8869 1.91874 22.5087 5.54048C22.5298 5.56158 22.5508 5.58275 22.5717 5.60398ZM23.8985 23.8992C23.8773 23.9205 23.8558 23.9414 23.8341 23.962C18.362 29.3667 9.55607 29.3574 4.12386 23.9252C-1.13468 18.6667 -1.31159 10.2468 3.58522 4.74993C3.73138 4.51436 3.90258 4.29719 4.09944 4.10032C4.29649 3.90328 4.51387 3.73196 4.74968 3.58571C10.2466 -1.30909 18.6651 -1.13155 23.9229 4.12627C29.3545 9.55777 29.3645 18.3621 23.9618 23.8343C23.941 23.8562 23.9199 23.8778 23.8985 23.8992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="relative z-10 w-min text-xl font-bold before:absolute before:-right-5 before:z-10 before:hidden before:h-4 before:w-4 before:rounded-full before:bg-emerald-400 after:absolute after:-right-5 after:hidden after:h-4 after:w-4 after:animate-ping after:rounded-full after:bg-emerald-300">
                    Prod
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="/pricing" className="row-span-2">
            <div className="relative flex h-full w-full flex-col gap-8 rounded-3xl p-6 md:p-10 group bg-zinc-900 text-[64px] font-black leading-[56px] text-white transition-transform hover:scale-[0.99]">
              <h2 className="font-display font-black uppercase transition-[letter-spacing] group-hover:tracking-wide">
                View our pricing
              </h2>
            </div>
          </a>
          <div className="relative flex h-full w-full flex-col rounded-3xl p-6 md:p-10 row-span-3 justify-between gap-8 bg-fuchsia-300 text-4xl text-fuchsia-950 md:text-5xl">
            <h2 className="font-display text-left font-bold uppercase">
              Spice up your changes with AI
            </h2>
            <div className="flex flex-col gap-3">
              <button className="group relative flex w-full items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-white p-5 text-left text-sm font-bold text-zinc-800 shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[0.98] active:scale-[0.96] md:text-xl">
                <div className="pointer-events-none absolute left-0 h-full w-4">
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-2 -top-2 text-yellow-400 opacity-0"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-4 top-4 text-yellow-400 opacity-0"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </div>
                <span>Minor Updates and Bug Fixes</span>
                <div className='relative text-base transition after:absolute after:-top-10 after:left-1/2 after:w-max after:-translate-x-1/2 after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity after:content-["Enhance_🪄"] hover:scale-110 hover:after:opacity-100'>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative text-indigo-400 opacity-0 transition group-hover:animate-[shaker_0.35s_alternate_infinite] group-hover:opacity-50"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </div>
              </button>
              <button className="group relative flex w-full items-center justify-between gap-2 rounded-2xl border border-zinc-200 bg-white p-5 text-left text-sm font-bold text-zinc-800 shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[0.98] active:scale-[0.96] md:text-xl">
                <div className="pointer-events-none absolute left-0 h-full w-4">
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-2 -top-2 text-yellow-400 opacity-0"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-4 top-4 text-yellow-400 opacity-0"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </div>
                <span>Routine App Enhancements</span>
                <div className='relative text-base transition after:absolute after:-top-10 after:left-1/2 after:w-max after:-translate-x-1/2 after:rounded-lg after:bg-zinc-700 after:px-3 after:py-1 after:font-bold after:text-white after:opacity-0 after:transition-opacity after:content-["Enhance_🪄"] hover:scale-110 hover:after:opacity-100'>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative text-indigo-400 opacity-0 transition group-hover:animate-[shaker_0.35s_alternate_infinite] group-hover:opacity-50"
                  >
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="6"
                      ry="11"
                      fill="currentColor"
                    ></ellipse>
                    <ellipse
                      cx="12"
                      cy="11"
                      rx="5"
                      ry="12"
                      transform="rotate(90 12 11)"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero3;

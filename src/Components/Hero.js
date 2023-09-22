import React from "react";

function Hero() {
  return (
    <section >
    <header className="relative z-50 flex w-full justify-center px-4 pt-10 md:px-10 text-white">
      <div className="flex w-full max-w-5xl items-center justify-between text-inherit">
        <a aria-label="Navigate to the homepage" href="/">
          <svg width="203" height="32" viewBox="0 0 203 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3741 18.4554C12.2263 17.618 13.3658 17.2021 13.8069 17.9324L16.5875 22.5373C20.639 29.2465 30.6301 29.2465 34.6815 22.5373L37.4622 17.9324C37.9032 17.2021 39.0427 17.618 38.8949 18.4555L37.4449 26.6721C37.3622 27.1405 37.7279 27.5692 38.2102 27.5692H50.4922C50.9213 27.5692 51.2691 27.2263 51.2691 26.8034V10.1977C51.2691 -0.18222 37.1426 -3.90545 31.7352 5.04928L26.302 14.0468C26.0008 14.5456 25.2682 14.5456 24.967 14.0468L19.5338 5.04928C14.1265 -3.90545 0 -0.18222 0 10.1977V26.8034C0 27.2263 0.347787 27.5692 0.776804 27.5692H13.0588C13.5411 27.5692 13.9068 27.1405 13.8242 26.6721L12.3741 18.4554Z" fill="currentColor"></path><path d="M129.563 9.16679H122.179C121.588 10.4369 120.643 12.2683 119.166 14.4837L117.335 17.2899H117.128V16.4628C117.128 15.5934 117.127 14.776 117.126 14.0004L117.126 13.9856V13.9832C117.122 10.314 117.119 7.58051 117.216 4.70649H110.127C110.198 7.47872 110.193 10.251 110.189 13.3056V13.3204C110.188 14.1016 110.186 14.9014 110.186 15.7243C110.186 16.599 110.188 17.4616 110.189 18.3099V18.3345C110.193 21.6878 110.198 24.8163 110.127 27.5692H117.187C117.128 25.1471 117.128 22.9612 117.128 20.2732H117.305C118.664 21.8388 120.2 24.5563 121.411 26.8012C121.706 27.392 122.061 27.5692 122.917 27.5692H129.741C129.098 26.592 128.513 25.5439 127.933 24.5039C126.566 22.0547 125.224 19.6507 123.213 18.3237C125.428 16.7628 127.408 13.1207 128.858 10.4512L128.861 10.4464L128.863 10.4425C129.113 9.98313 129.347 9.55268 129.563 9.16679Z" fill="currentColor"></path><path d="M86.2133 27.5692H79.1832C79.3309 24.1428 79.3899 21.5434 79.4195 17.8806C79.4195 16.4332 79.5081 14.7791 79.5967 13.184L79.4195 13.1545C78.9764 14.8382 78.4742 16.5219 78.0607 17.7329L74.3389 27.5692H71.2078L67.3973 17.4966C66.9542 16.256 66.4521 14.6019 66.009 13.0068L65.8613 13.0363C65.8813 13.5753 65.9046 14.1075 65.9279 14.6387C65.9735 15.6795 66.019 16.7164 66.0386 17.792C66.0681 21.5139 66.1272 24.2019 66.2158 27.5692H60.0422C60.1309 24.3791 60.1604 21.1594 60.1604 16.4628C60.1604 11.6185 60.1309 8.31018 60.0718 5.41541H69.3173C69.9967 7.4831 71.1192 10.88 72.4779 14.4837C72.7733 15.4585 73.1278 16.7877 73.4527 18.0579H73.5413C73.8958 16.7877 74.2502 15.5176 74.5752 14.5132C75.8158 10.9686 77.0269 7.45356 77.7062 5.41541H86.1838C86.0952 8.31018 86.0656 11.6185 86.0656 16.4628C86.0656 21.1594 86.0952 24.3791 86.2133 27.5692Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.35 17.6443V16.1674C100.35 14.6905 99.7006 13.9225 98.0169 13.9225C96.2446 13.9225 95.4175 14.6609 95.5357 16.5809C94.8268 16.5219 93.7929 16.5219 92.7295 16.5219C91.4594 16.5219 90.1597 16.5219 89.3621 16.64C89.1258 11.648 91.6071 8.84187 98.1646 8.84187C104.545 8.84187 107.085 11.3526 107.085 15.7539C107.085 17.0247 107.062 18.1018 107.039 19.1518V19.1541C107.018 20.1534 106.997 21.1285 106.997 22.2228C106.997 24.2609 107.144 26.7717 107.41 27.5692H101.857C100.646 27.5692 100.439 27.4511 100.439 26.0628C100.439 25.6197 100.469 25.0585 100.498 24.4972H100.321C99.5824 26.7717 97.6034 27.8351 94.5609 27.8351C90.8095 27.8351 88.8009 26.5945 88.8009 22.8431C88.8009 19.0031 91.3412 17.4671 96.8354 17.4671C98.1646 17.4671 99.4052 17.4966 100.35 17.6443ZM97.3966 23.4929C99.1984 23.4929 100.321 22.3409 100.321 20.0665C99.5529 19.9779 98.7258 19.9483 97.8692 19.9483C96.0378 19.9483 95.2403 20.48 95.2403 21.7206C95.2403 22.9908 95.8015 23.4929 97.3966 23.4929Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M145.477 21.4252C146.718 21.4252 147.811 21.3957 148.727 21.3366C148.874 25.6197 147.397 27.9532 139.895 27.9532C133.514 27.9532 130.324 25.1471 130.324 18.4123C130.324 11.3231 133.751 8.78279 140.101 8.78279C146.836 8.78279 148.786 11.4708 148.786 16.3151C148.786 17.8216 148.727 19.0031 148.638 19.8006C146.807 19.7416 144.059 19.7416 141.608 19.7416C139.806 19.7416 138.152 19.7416 136.97 19.7711C137.118 22.6659 138.004 23.5815 140.072 23.5815C141.962 23.5815 142.523 22.8431 142.553 21.3366C143.262 21.3957 144.296 21.4252 145.477 21.4252ZM139.983 13.0363C138.181 13.0363 137.236 13.7452 137 16.9059C138.713 16.9354 140.633 16.9354 142.553 16.9059C142.583 16.6696 142.583 16.4037 142.583 16.1083C142.583 13.8634 141.874 13.0363 139.983 13.0363Z" fill="currentColor"></path><path d="M151.393 27.5692H158.453C158.364 24.1428 158.364 21.0117 158.364 16.4332C158.364 11.5003 158.364 8.13295 158.453 4.70649H151.393C151.481 8.2511 151.481 11.7366 151.481 15.9016C151.481 20.096 151.481 24.1723 151.393 27.5692Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M180.623 17.9988C180.623 24.5563 177.226 27.9532 170.58 27.9532C163.934 27.9532 160.655 24.5563 160.655 17.9988C160.655 11.4117 164.288 8.78279 170.58 8.78279C176.872 8.78279 180.623 11.4117 180.623 17.9988ZM173.77 18.1169C173.77 15.0154 172.589 13.9816 170.58 13.9816C168.601 13.9816 167.39 14.9563 167.39 18.1169C167.39 21.2776 168.571 22.4886 170.58 22.4886C172.648 22.4886 173.77 21.248 173.77 18.1169Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M197.855 13.4203V13.2431C199.45 13.3612 201.016 13.4499 201.902 13.4499C201.872 12.6228 201.872 9.81664 201.931 9.19633C198.989 9.19633 195.298 9.16642 193.169 9.14916L193.168 9.14915C192.306 9.14216 191.7 9.13725 191.504 9.13725C185.242 9.13725 182.495 11.2345 182.495 15.4289C182.495 17.9988 183.617 19.7416 186.394 20.5982V20.6868C184.267 21.248 182.82 22.3114 182.82 23.9655C182.82 25.0585 183.381 25.9446 185.094 26.3877V26.5354C182.968 26.9194 181.904 27.6874 181.904 29.0757C181.904 30.9071 183.115 32 191.681 32C199.952 32 202.109 30.4345 202.109 26.7717C202.109 23.7292 200.602 22.4295 196.939 22.4295C196.077 22.4295 195.115 22.5069 194.053 22.5922C192.75 22.6969 191.298 22.8135 189.702 22.8135C188.875 22.8135 188.491 22.5477 188.491 22.0455C188.491 21.7206 188.58 21.3957 188.757 21.0412C189.584 21.1299 190.5 21.1889 191.504 21.1889C198.416 21.1889 200.75 19.5348 200.75 16.4037C200.75 14.6905 199.952 13.952 197.855 13.4203ZM196.703 27.1557C196.703 27.9828 195.699 28.4259 191.829 28.4259C187.96 28.4259 187.221 28.1009 187.221 27.2148C187.221 27.0375 187.31 26.8603 187.457 26.6831C187.723 26.7126 188.019 26.7126 188.344 26.7126C189.297 26.7126 190.463 26.642 191.654 26.5697C192.898 26.4943 194.169 26.4172 195.256 26.4172C196.437 26.4172 196.703 26.6535 196.703 27.1557ZM188.669 15.3403C188.669 13.9816 189.555 13.1545 191.593 13.1545C193.661 13.1545 194.547 13.9816 194.547 15.3403C194.547 16.7582 193.69 17.4376 191.593 17.4376C189.525 17.4376 188.669 16.7582 188.669 15.3403Z" fill="currentColor"></path></svg>
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 text-lg softie_1 font-black">
            <li>
              <a className="transition-opacity hover:opacity-80" href="/pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-80" href="/approach">
                Approach
              </a>
            </li>
            <li>
              <a className="transition-opacity hover:opacity-80" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a
                className="mx-auto flex items-center justify-center border border-current px-5 py-3  rounded-xl ml-3"
                aria-label="Log in or Sign up"
                href=""
              >
                Log in<span className="mx-3">/</span>Sign up
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="text-lg flex items-center justify-center border rounded-xl mx-0 border-transparent p-3.5 md:hidden"
          aria-haspopup="menu"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns=""
            className="relative overflow-visible text-inherit"
          >
            <path
              d="M20.4853 3.51473L3.51477 20.4853"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute origin-center translate-y-1 rotate-45 transition-transform duration-300 motion-reduce:transition-none"
            ></path>
            <path
              d="M20.4853 20.4853L3.51477 3.51471"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute origin-center -translate-y-1 -rotate-45 transition-transform duration-300 motion-reduce:transition-none"
            ></path>
          </svg>
        </button>
      </div>
    </header>
    <div className="relative -mt-24 flex w-full items-center justify-center overflow-hidden bg-rainbow px-4 pb-[400px] pt-52 before:absolute before:top-1/3 before:h-[140%] before:w-[140%] before:rounded-[100%] before:bg-radial before:blur-xl  after:absolute after:bottom-0 after:h-52 after:w-full after:bg-gradient-to-t after:from-white md:px-10">
      
      <div className="absolute h-full w-full bg-grain"></div>
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
          <span className="block text-5xl">
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
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.25s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            P
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.30000000000000004s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            a
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.35000000000000003s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            i
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.4s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            n
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.45s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            l
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.5s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            e
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.55s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            s
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.6000000000000001s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            s
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.65s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              display: "inline",
            }}
          >
            {" "}
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            r
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.75s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            e
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.8s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            l
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.8500000000000001s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            e
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.9000000000000001s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            a
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "0.95s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            s
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            e
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.05s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              display: "inline",
            }}
          >
            {" "}
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.1s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            c
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.1500000000000001s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            o
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.2s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            m
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.25s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            m
          </span>
          <span
            className=" hidden motion-reduce:animate-none md:inline-block md:animate-loadIn"
            style={{
              animationDuration: "1.3s",
              animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
            }}
          >
            s
          </span>
          <span className="block break-words text-6xl md:text-8xl lg:-mt-4 lg:text-[144px]">
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.28s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              G
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.36s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              u
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.44s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              a
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.52s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              r
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.6s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              a
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.68s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              n
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.76s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              t
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.84s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              e
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "0.92s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              e
            </span>
            <span
              className=" inline-block animate-loadIn motion-reduce:animate-none"
              style={{
                animationDuration: "1.88s",
                animationTimingFunction: "cubic-bezier(0.5,0.5,.2,1.5)",
              }}
            >
              y
            </span>
          </span>
        </h1>
        <p class="mx-auto mt-4 w-full max-w-sm animate-loadIn text-base font-bold  md:max-w-none lg:text-xl">Know what's changing, save time sharing internally &amp; externally</p>
        <div className="mt-10 flex items-center justify-center space-x-4">
        <a class="mx-auto flex items-center justify-center border bg-white text-blue-600 border-transparent px-6 py-4 text-lg font-bold rounded-2xl hover:scale-[0.98] tracking-wide transition-all hover:tracking-normal  w-full sm:w-max" aria-label="sign up" href="/">Start now for free</a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;

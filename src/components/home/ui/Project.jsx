/* eslint-disable react/no-unescaped-entities */
import AnimationWraper from "../../animation/AnimationWraper";
const Project = () => {
  return (
    <div className="my-40 w-full grid items-center grid-cols-1 md:grid-cols-2 gap-32 max-w-7xl mx-auto px-5 md:px-10 lg:px-28">
      <div className="lg:pl:10" data-aos="fade-down">
        {/* <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
          <div>
            <div className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3 text-base">
              {" "}
              The very first DeepFake project on the internet of it's kind.{" "}
            </div>
          </div>
        </AnimationWraper> */}
        <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
          <h3 className=" bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3 text-4xl font-bold leading-snug">
            {" "}
            Feel the power of using <br />
            DeepFake technology.{" "}
          </h3>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.6, duration: 1 }}>
          <p className="text-xl text-slate-400 mb-8 ">
            DeepFakeAI can be used in Telegram and on our <br /> website.
          </p>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.8, duration: 1 }}>
          <div className="space-y-5">
            <div className="flex items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </div>
              <div className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 text-base">
                <p className="">Some related text</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
              <div className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 text-base">
                <p className="">Some related text</p>
              </div>
            </div>
          </div>
        </AnimationWraper>
      </div>

      {/* last div */}
      <div className="mx-auto w-fit">
        <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
          <div className="relative w-full over h-32 flex justify-center items-center">
            <svg
              className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
              width="280"
              height="280"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="pulse-a"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#A855F7"></stop>
                  <stop offset="76.382%" stopColor="#FAF5FF"></stop>
                  <stop offset="100%" stopColor="#6366F1"></stop>
                </linearGradient>
              </defs>
              <g fillRule="evenodd">
                <path
                  className="pulse"
                  fill="url(#pulse-a)"
                  fillRule="evenodd"
                  d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                ></path>
                <path
                  className="pulse pulse-1"
                  fill="url(#pulse-a)"
                  fillRule="evenodd"
                  d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                ></path>
                <path
                  className="pulse pulse-2"
                  fill="url(#pulse-a)"
                  fillRule="evenodd"
                  d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                ></path>
              </g>
            </svg>
            <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[300px] md:w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
              <div className="h-[200%] animate-endless">
                <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"></div>
                <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]"></div>
              </div>
            </div>

            <div style={{ display: "none" }} className="absolute">
              <div>
                <svg
                  className="relative fill-slate-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                >
                  <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z"></path>
                </svg>
              </div>
            </div>
            <div style={{ display: "none" }} className="absolute">
              <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                <svg
                  className="relative fill-slate-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="14"
                >
                  <path
                    fillRule="nonzero"
                    d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </AnimationWraper>
      </div>
    </div>
  );
};

export default Project;

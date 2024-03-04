import { IoArrowForwardOutline } from "react-icons/io5";
import AnimationWraper from "../../animation/AnimationWraper";
const Use = () => {
  return (
    <div className="my-24 px-5 md:px-10 lg:px-28 max-w-6xl mx-auto">
      
        <div className="pt-16 md:pt-32">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 font-bold text-5xl">
                How to use?
              </h2>
            </AnimationWraper>
          </div>
          <div className="relative pb-12 md:pb-20 ">
            <div
              className=" absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1"></stop>
                    <stop
                      offset="100%"
                      stopColor="#6366F1"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                ></path>
              </svg>
            </div>
            <div
              id="cards"
              onMouseMove={(e) => {
                for (const card of document.getElementsByClassName("card")) {
                  const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                  card.style.setProperty("--mouse-x", `${x}px`);
                  card.style.setProperty("--mouse-y", `${y}px`);
                }
              }}
              className="grid md:grid-cols-12 gap-5 group"
            >
              <div
                className="card md:col-span-12 aos-init aos-animate "
                data-aos="fade-down"
                // style={{
                //   "--mouse-x": "56.99999809265137px",
                //   "--mouse-y": "214.06666660308838px",
                // }}
              >
                <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
                  <div className="relative h-full bg-slate-800 rounded-[10px] p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative py-10 md:py-5 h-full w-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div
                            className="absolute right-0 top-0 blur-2xl"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="342"
                              height="393"
                            >
                              <defs>
                                <linearGradient
                                  id="bs-a"
                                  x1="19.609%"
                                  x2="50%"
                                  y1="14.544%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#6366F1"></stop>
                                  <stop
                                    offset="100%"
                                    stopColor="#6366F1"
                                    stopOpacity="0"
                                  ></stop>
                                </linearGradient>
                              </defs>
                              <path
                                fill="url(#bs-a)"
                                fillRule="evenodd"
                                d="m104 .827 461 369-284 58z"
                                transform="translate(0 -112.827)"
                                opacity=".7"
                              ></path>
                            </svg>
                          </div>
                          <div
                            className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                            aria-hidden="true"
                          >
                            <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                          </div>

                          <div className="md:max-w-[300px] md:order-none p-6 pt-0 md:p-8 md:pr-0">
                            <div className="mb-5">
                              <div>
                                <h3 className="inline-flex text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                                  Sign Up
                                </h3>
                                <p className="text-slate-400 text-xl">
                                  Create a new account on DeepFakeAI. You will
                                  need to verify your email address.
                                </p>
                              </div>
                            </div>
                            <div>
                              <a
                                className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none border rounded-full px-4 py-2"
                                href="#"
                              >
                                <span className="relative inline-flex items-center">
                                  Dashboard
                                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                    <IoArrowForwardOutline />
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </AnimationWraper>
                    </div>
                  </div>
                </AnimationWraper>
              </div>

              <div
                className="card md:col-span-7 aos-init aos-animate"
                data-aos="fade-down"
                style={{
                  "--mouse-x": "56.99999809265137px",
                  "--mouse-y": "-9.000015258789062px",
                }}
              >
                <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
                  <div className="relative h-full bg-slate-800 rounded-[10px] p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative h-full py-10 md:py-5 bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <h3 className="inline-flex text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              Buy minutes
                            </h3>
                            <p className="text-slate-400 text-xl">
                              Buy the number of minutes you want to use. You can
                              buy minutes using your credit card.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimationWraper>
              </div>

              <div
                className="card md:col-span-5 aos-init aos-animate"
                data-aos="fade-down"
                // style={{
                //   "--mouse-x": "56.99999809265137px",
                //   "--mouse-y": "214.06666660308838px",
                // }}
              >
                {" "}
                <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
                  <div className="relative h-full bg-slate-800 rounded-[10px] p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden">
                    <div className="relative h-full py-10 md:py-5 bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <h3 className="inline-flex text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              Start Generating videos
                            </h3>
                            <p className="text-slate-400 text-xl">
                              On the dashboard web app you can start generating
                              videos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimationWraper>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Use;

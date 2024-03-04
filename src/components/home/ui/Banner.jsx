import AnimationWraper from "../../animation/AnimationWraper";

import { MdOutlineDashboard } from "react-icons/md";
const Banner = () => {
  return (
    <div className="flex justify-center items-center lg:mt-28">
      <div className="my-12 text-center px-6">
        <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
          <h1
            className="text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 aos-init aos-animate"
            data-aos="fade-down"
          >
            Welcome to the world of <br />
            DeepFakeAI
          </h1>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
          <p
            className="text-xl lg:text-2xl py-7 text-slate-300 mb-8 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            DeepFakeAI is a program that allows you to create deepfakes in a few
            clicks using our <br />
            <p className="text-center">Telegram Bot and Web App.</p>
          </p>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.6, duration: 1 }}>
          <div className="">
            <div className="flex  justify-center items-center">
              {/* <button className="intro text-slate-300 hover:text-white transition duration-150 ease-in-out  group px-5 py-2 relative before:absolute before:inset-0  before:rounded-full before:pointer-events-none border rounded-full border-opacity-5 ">
                Introduction
              </button> */}
              {/* <div className=" p-0.5  hover-animate">
                <div className="-inner px-3 py-2 bg-green-500">
                  <button className=" ">Introduction</button>
                </div>
              </div> */}
              <div className="animated-button1">
                <div className="animated-bg"></div>
                <div className="animated-content ">Introduction</div>
              </div>
              {/* <div className="p-0.5 ">
                <div className="hover-animate">
                  <div className="bg-green-500 text-black px-10 py-2 m-1">A</div>
                </div>
              </div> */}

              <button className="Dashboard flex items-center text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30  transition duration-150 ease-in-out pl-5">
                Dashboard
                <span className="pl-2">
                  <MdOutlineDashboard fontSize={25} />
                </span>
              </button>
            </div>
          </div>
        </AnimationWraper>
      </div>
    </div>
  );
};

export default Banner;

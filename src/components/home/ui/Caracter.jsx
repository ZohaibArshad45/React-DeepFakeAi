import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import AnimationWraper from "../../animation/AnimationWraper";
import { Swiper, SwiperSlide } from "swiper/react";
import './card-hover.css'



/* eslint-disable react/no-unescaped-entities */
const persons = [
  {
    id: 1,
    img: "https://fakeai.io/andrew_tate.png",
    name: "Andrew Tate",
  },
  {
    id: 2,
    img: "https://fakeai.io/donald_trump.png",
    name: "Donald Trump",
  },
  {
    id: 3,
    img: "https://fakeai.io/joe-rogan.png",
    name: "Joe Rogan",
  },
  {
    id: 4,
    img: "https://fakeai.io/musk.webp",
    name: "ELon Musk",
  },
  {
    id: 5,
    img: "https://fakeai.io/cz.jpg",
    name: "Changpeng Zhao",
  },
  {
    id: 6,
    img: "https://fakeai.io/gensler-gary.jpg",
    name: "Gary Gensler",
  },
  {
    id: 7,
    img: "https://fakeai.io/vitalik.jpg",
    name: "Vitalik Buterin",
  },
  {
    id: 8,
    img: "https://deep.fakeai.io/106161367-1570054285153gettyimages-1151703932.jpeg",
    name: "Bil Gates",
  },
  {
    id: 9,
    img: "https://deep.fakeai.io/Tommy_Shelby.jpg",
    name: "Thomas Shelby",
  },
  // {
  //   id: 10,
  //   img: "https://fakeai.io/gensler-gary.jpg",
  //   name: "Gary Gensler",
  // },
];

const Caracter = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  //   const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    // console.log("click");
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    // console.log("click1");
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    786: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  };
  return (
    <div className="pt-10 max-w-7xl mx-auto">
      <div className="text-center px-5 md:px-10 lg:px-28">
        <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3 text-xl">
            {" "}
            Who you can DeepFake{" "}
          </div>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 text-4xl font-bold">
            {" "}
            Characters{" "}
          </h2>
        </AnimationWraper>
        <AnimationWraper transition={{ delay: 0.8, duration: 1 }}>
          <p className=" text-slate-400 text-2xl flex justify-center">
            {" "}
            Characters that you're currently able to use with our web app and
            telegram bot. We'll keep <br />
            adding more, sky is the limit.{" "}
          </p>
        </AnimationWraper>
      </div>
      <AnimationWraper transition={{ delay: 0.6, duration: 1 }}>
        <div
          onMouseMove={(e) => {
            for (const card of document.getElementsByClassName("card")) {
              const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            }
          }}
          id="cards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-28 py-10"
        >
          {/* <Swiper
          breakpoints={breakpoints}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="mySwiper"
        > */}
          {persons?.map((person, index) => (
            <div
              key={person?.id}
              // className=" hover:shadow-purple transition ease-in-out duration-500 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 rounded-2xl  border border-gray-400 cursor-pointer "
              className="card h-[18rem] w-full"
            >
              <div className="card-content ">
                <div className="flex flex-col p-6 h-full items-center justify-center  ">
                  <img
                    className="mb-3 rounded-full object-cover h-28 w-28"
                    src={person?.img}
                    alt="Thomas Shelby"
                  />
                  <div>
                    <div className=" text-xl  font-bold mb-1 py-3">
                      {person?.name}
                    </div>
                  </div>
                  <div className="text-right"></div>
                </div>
              </div>
            </div>
          ))}
          {/* </Swiper> */}
        </div>
      </AnimationWraper>
      {/* <div className="flex items-center text-2xl justify-end pr-10 ">
        <div className="pt-2 pl-2 mb-10">
          <button
            onClick={handlePrevClick}
            className={`${
              swiperInstance && swiperInstance.isBeginning
                ? "text-gray-500 "
                : "text-orangePrimary"
            }`}
          >
            <IoArrowBackOutline />
          </button>
          <button
            onClick={handleNextClick}
            className={`${
              swiperInstance && swiperInstance.isEnd
                ? "text-gray-500"
                : "text-orangePrimary"
            }`}
            style={{ paddingLeft: "20px" }}
          >
            <IoArrowForward />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Caracter;

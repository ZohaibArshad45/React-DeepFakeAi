import AnimationWraper from "../../animation/AnimationWraper";

const VideoSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimationWraper transition={{ delay: 0.2, duration: 1 }}>
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Watch our video
            </h2>
          </AnimationWraper>
          <AnimationWraper transition={{ delay: 0.4, duration: 1 }}>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Learn more about our product
            </p>
          </AnimationWraper>
          <AnimationWraper transition={{ delay: 0.6, duration: 1 }}>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Discover our comprehensive expertise and delve into the
              intricacies of cutting-edge technologies.
            </p>
          </AnimationWraper>
        </div>
        <AnimationWraper transition={{ delay: 0.8, duration: 1 }}>
          <div className="mt-10 w-10/12 lg:w-7/12 mx-auto">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <video controls autoPlay muted
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="/video.mp4"
              ></video>
              {/* <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/Je94CjIYQO4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </AnimationWraper>
      </div>
    </div>
  );
};

export default VideoSection;

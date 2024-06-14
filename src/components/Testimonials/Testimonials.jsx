import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonials from "./testimonials";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerPage = isSmallScreen ? 1 : 2;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const end = currentIndex + itemsPerPage;
    if (end > testimonials.length) {
      return [
        ...testimonials.slice(currentIndex),
        ...testimonials.slice(0, end - testimonials.length),
      ];
    }
    return testimonials.slice(currentIndex, end);
  };

  return (
    <div className="pt-10 flex flex-col gap-4 md:px-[1rem] px-[1rem] pb-[3rem]">
      <div className="text-3xl titleT flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1">
        What Our Users Say
      </div>
      <div className="relative w-full flex justify-center items-center">
        <div className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-transparent text-black p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
          >
            <FaChevronLeft size={35} />
          </button>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex transition-transform duration-500 ease-in-out gap-3">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 p-2">
                <div className="w-full p-4 bg-gray-900 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 p-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="bg-transparent text-black p-2 rounded-full hover:bg-gray-700 hover:text-white transition duration-300"
          >
            <FaChevronRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

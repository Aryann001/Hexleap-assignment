"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpotlightSectionCard from "./SpotlightSectionCard";
import spot1 from "../../assets/spot1.png";
import spot2 from "../../assets/spot2.png";
import Slider from "react-slick";

const spotArr = [
  {
    image: spot1,
    name: "Las Vegas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection",
  },
  {
    image: spot2,
    name: "Sacramento River Cats",
    address: "Sutter Health Park, Sacramento, California",
    button: "Orange Collection",
  },
  {
    image: spot1,
    name: "Las Vegas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection",
  },
  {
    image: spot2,
    name: "Sacramento River Cats",
    address: "Sutter Health Park, Sacramento, California",
    button: "Orange Collection",
  },
  {
    image: spot1,
    name: "Las Vegas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection",
  },
  {
    image: spot2,
    name: "Sacramento River Cats",
    address: "Sutter Health Park, Sacramento, California",
    button: "Orange Collection",
  },
  {
    image: spot1,
    name: "Las Vegas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection",
  },
  {
    image: spot2,
    name: "Sacramento River Cats",
    address: "Sutter Health Park, Sacramento, California",
    button: "Orange Collection",
  },
];

const SpotlightSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex flex-col gap-12 mb-16 mx-1 sm:mx-10 py-10 dark:bg-gradient-to-t from-[#221A2C] to-[#18282A]">
      <div className=" flex flex-col gap-4 justify-center items-center">
        <h1 className=" text-black dark:text-white text-3xl sm:text-5xl font-extrabold font-poppins text-center">
          Collection Spotlight
        </h1>
        <p className=" text-zinc-950 dark:text-white text-base sm:text-lg font-medium font-inter w-3/4 text-center">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      {/*  */}
      <div className=" w-11/12 mx-auto">
        <Slider {...settings}>
          {spotArr &&
            spotArr.map((spot, i) => (
              <SpotlightSectionCard key={i} {...spot} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpotlightSection;

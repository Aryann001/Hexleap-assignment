import Link from "next/link";
import SportSectionCard from "./SportSectionCard";
import AdvertisementCard from "../AdvertisementCard";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import adpic from "../../assets/ad.jpg";

const sportArr = [
  {
    image: pic1,
    name: "Sacramento River Cats",
    events: 48,
    sport: "Baseball",
  },
  {
    image: pic2,
    name: "Las Vegas Aviators",
    events: 28,
    sport: "Baseball",
  },
  {
    image: pic3,
    name: "New Jersey Devils",
    events: 15,
    sport: "Ice Hockey",
  },
  {
    image: pic2,
    name: "Las Vegas Aviators",
    events: 28,
    sport: "Baseball",
  },
];

const ad = {
  image: adpic,
  title: "Advertisement title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum perspiciatis consequuntur sunt officia provident perferendis quo laudantium voluptates quis ad rerum, eaque vel commodi deserunt porro veniam nisi culpa, explicabo obcaecati? At, soluta molestiae!",
};

const SportSection = () => {
  return (
    <div className="mx-8 my-9 flex flex-col gap-8">
      <div className="flex justify-start">
        <h2 className=" text-stone-950 dark:text-white text-2xl font-semibold font-poppins border-b-2 border-stone-950 dark:border-[#738FFF]">
          Sports
        </h2>
      </div>
      {/*  */}
      <div className="flex flex-row overflow-hidden justify-around flex-wrap gap-4">
        {sportArr &&
          sportArr.map((card, i) => (
            <SportSectionCard key={i} {...card} />
          ))}
        <AdvertisementCard {...ad} />
      </div>
      {/*  */}
      <div className="flex justify-center">
        <Link
          href="/"
          className="bg-sky-500 px-4 py-2 text-sm rounded transition-all duration-500 hover:bg-sky-600"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default SportSection;

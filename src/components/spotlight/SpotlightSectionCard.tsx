import Link from "next/link";
import Image from "next/image";

const SpotlightSectionCard = (props: any) => {
  return (
    <div className="flex flex-col w-64">
      <div className=" bg-white dark:bg-[#3B3E47] relative customBottom dark:before:bg-gradient-to-t dark:after:bg-gradient-to-t from-[#221A2C] to-[#18282A] border-dashed border-b-2 border-gray-200">
        <div className=" m-2">
            <Image src={props.image} alt="image" height={100} width={100} className="w-full" />
        </div>
      </div>
      {/*  */}
      <div className="bg-white dark:bg-[#3B3E47]">
        <div className=" mx-4 my-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className=" text-stone-950 dark:text-white text-lg font-medium text-center">
              {props.name}
            </h3>
            {/*  */}
            <div className=" text-stone-950 dark:text-white text-base font-normal">
              OCT 15 | SUN | 4:30 PM
            </div>
            {/*  */}
            <p className=" text-gray-600 dark:text-[#DFDFDF] text-sm font-normal text-center">
              {props.address}
            </p>
          </div>
          {/*  */}
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="transition-all duration-500 w-full font-normal text-sm bg-black text-center text-white py-4 hover:bg-stone-900"
            >
              {props.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSectionCard;

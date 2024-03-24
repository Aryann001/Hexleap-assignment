import Image from "next/image";

const AdvertisementCard = (props: any) => {
  return (
    <div className="bg-white dark:bg-[#3B3E47] flex flex-col w-56 justify-start items-center py-2">
      <div className=" w-11/12 flex flex-col gap-4">
        <div className="overflow-hidden h-36 relative">
          <Image
            src={props.image}
            alt="Image"
            width={100}
            height={100}
            className="object-cover w-full h-36"
          />
          <div className="absolute z-1 top-0 right-0 text-white bg-black text-sm px-2 py-1">
            Ad
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-center text-stone-950 dark:text-white font-inter font-medium text-xl">
            {props.title}
          </h3>
          <p className="text-start text-stone-700 dark:text-[#DFDFDF] font-inter font-medium text-sm h-40 w-11/12 text-ellipsis overflow-hidden">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;

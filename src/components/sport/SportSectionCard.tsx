import Image from "next/image";

const SportSectionCard = (props: any) => {
  return (
    <div className="bg-white dark:bg-[#3B3E47] flex flex-col w-56 justify-center items-center py-2 gap-5">
      <div className=" w-11/12 flex flex-col gap-2">
        <div className="overflow-hidden h-72">
          <Image
            src={props.image}
            alt="Image"
            width={100}
            height={100}
            className="object-cover w-full h-72"
          />
        </div>
        {/*  */}
        <div>
          <h3 className=" text-stone-950 dark:text-white font-inter font-medium text-lg">
            {props.name}
          </h3>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-row justify-between w-11/12 text-stone-950 p-2 rounded-md bg-slate-100 dark:bg-[#292B32]">
        <div className=" flex flex-col justify-start items-start">
          <h4 className=" text-stone-500 dark:text-[#DFDFDF] font-inter font-medium text-sm">
            Total Events
          </h4>
          <p className=" text-stone-950 dark:text-white font-inter font-medium text-base">
            {`${props.events} Events`}
          </p>
        </div>
        {/*  */}
        <div className=" flex flex-col justify-start items-start">
          <h4 className=" text-stone-500 dark:text-[#DFDFDF] font-inter font-medium text-sm">
            Sport
          </h4>
          <p className=" text-stone-950 dark:text-white font-inter font-medium text-base">
            {props.sport}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportSectionCard;

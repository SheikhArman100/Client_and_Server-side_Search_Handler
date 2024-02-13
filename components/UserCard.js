/* eslint-disable react/prop-types */
import Image from "next/image.js";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
const UserCard = ({user}) => {
  
  return (
    <div to={`/users/${user.id}`} className="w-[18rem] md:w-[22rem] bg-base-100 shadow-xl p-4 border  rounded-lg">
      <div className="flex flex-col items-center gap-x-3">
        {/* avatar */}
        
          <div className="relative w-24 h-24 rounded-full border  bg-white">
            <Image src={user.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={user.id} className=" object-cover"/>
          </div>
        
        <div className="flex flex-col items-center">
          <h4 className="text-base md:text-lg font-bold">{user.firstName} {user.lastName}</h4>
          <span className="text-sm md:text-base text-gray-400 font-medium">
            {user.email}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-3 gap-y-2">
        <div className=" p-2 flex   items-center justify-center whitespace-nowrap gap-x-1.5  rounded-lg bg-violet-400 text-bgColor">
          <IoLocationOutline className="size-4 shrink-0" />
          <p className="text-xs sm:text-sm font-medium overflow-hidden whitespace-nowrap ">
            {user.address.address}, {user.address.city}
          </p>
        </div>
        <div className=" p-2 flex items-center justify-center gap-x-1.5  rounded-lg bg-red-400 text-bgColor">
          <FaBuildingColumns className="size-4 shrink-0" />
          <p className="text-sm font-medium overflow-hidden whitespace-nowrap">{user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";
import Image from "next/image";
import { FaRetweet } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUpload } from "react-icons/hi";

const FeedCard: React.FC = () => {
  return (
    <div className="border-t border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/82154070?v=4"}
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Kamran Khan</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iusto ea, saepe delectus quia ullam error libero voluptas
            consequuntur, eaque rem adipisci in odit inventore. Itaque dolorem
            eveniet quos delectus!
          </p>
          <div className="flex justify-between mt-5 text-gray-500 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <HiOutlineUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
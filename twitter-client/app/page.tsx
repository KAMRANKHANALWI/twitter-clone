import React from "react";
import Image from "next/image";
import { BsTwitterX, BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import {Inter, Quicksand} from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = Inter({subsets: ["latin"]});
const quickSand = Quicksand({subsets: ["latin"]})

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />
  },
  {
    title: "Profile",
    icon: <BiUser />
  },
  {
    title: "More Options",
    icon: <SlOptions />
  }
];

export default function Home() {
  return (
    <div className={inter.className}>
    {/* <div className={quickSand.className}> */}
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-3 pt-1 px-4">
          <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-4 w-fit cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="text-xl">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] py-3 px-2 font-semibold text-lg rounded-full w-[70%]">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-l-[1px] border-r-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

"use client";

import { PlayerContext } from "@/app/player-provider";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useContext } from "react";

export const PlayerBanner = () => {
  const { isPlaying } = useContext(PlayerContext);
  return (
    <>
      {isPlaying && (
        <div className="fixed z-20 bottom-0 right-0 left-0 w-screen h-24 bg-white border p-2 shadow-inner rounded-t-lg">
          <div className="relative flex justify-between">
            <div className="px-4 flex w-2/6">
              <Image
                width={80}
                height={80}
                src={"https://picsum.photos/300/300"}
                alt={`book cover}`}
                className="rounded-md"
              />
              <div className="flex flex-col px-3">
                <span className="text-black text-lg">Book Title</span>
                <span className="flex gap-2 text-gray-700 text-sm">
                  <span>Chapter ID</span>:<span>Chapter name</span>
                </span>
                <span className="text-gray-500 text-xs">Source URL</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-evenly gap-5 items-center">
                <button className="p-2 rounded-full border bg-gray-100 hover:bg-gray-200 duration-100 shadow-sm">
                  <ArrowUturnLeftIcon className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-4 rounded-full border bg-gray-100 hover:bg-gray-200 duration-100 shadow-sm">
                  <PlayIcon className="w-8 h-8 text-gray-500" />
                </button>
                <button className="p-2 rounded-full border bg-gray-100 hover:bg-gray-200 duration-100 shadow-sm">
                  <ArrowUturnRightIcon className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
            {/* <div className="px-4 flex w-1/6">Volume control goes here</div> */}
          </div>
        </div>
      )}
    </>
  );
};

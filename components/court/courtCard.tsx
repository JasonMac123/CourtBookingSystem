"use client";

import Image from "next/image";
import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";

import { CourtWithSports } from "@/types";

interface CourtCardProps {
  data: CourtWithSports;
}

export const CourtCard = ({ data }: CourtCardProps) => {
  return (
    <Link
      href={`/court/${data.id}`}
      className="flex flex-col sm:flex-row w-full bg-neutral-300 h-[450px] sm:h-64 rounded-lg hover:scale-105 transition-all"
    >
      <div className="w-full sm:w-[55%] h-1/2 sm:h-full relative rounded-t-lg sm:rounded-l-lg overflow-auto">
        <Image
          src={data.imageId}
          alt="picture of court"
          fill
          className="object-fit"
        />
      </div>
      <div className="flex flex-col justify-between w-full sm:w-[45%] mx-4 mt-1">
        <div className="space-y-1">
          <h2 className="text-3xl">{data.title}</h2>
          <h3>{data.description.substring(0, 50)}...</h3>
          <h4>Supports {data.sports.map((item) => item.title).toString()}</h4>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FaLocationDot size={30} />
            <div>
              <h4>{data.address}</h4>
              <h4>{data.region}</h4>
            </div>
          </div>
          <h4 className="text-xl text-right mr-8 sm:mr-0">
            ${data.price} / hour
          </h4>
        </div>
      </div>
    </Link>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";

import { CourtWithSports } from "@/types";

interface CourtCardProps {
  data: CourtWithSports;
}

export const CourtCard = ({ data }: CourtCardProps) => {
  return (
    <Link
      href={`/court/${data.id}`}
      className="flex w-full bg-neutral-300 h-64 rounded-lg"
    >
      <div className="w-3/5 h-full relative rounded-l-lg overflow-auto">
        <Image
          src={data.imageId}
          alt="picture of court"
          fill
          className="object-fit"
        />
      </div>
      <div className="flex flex-col mx-4 mt-2">
        <h2 className="text-3xl">{data.title}</h2>
        <h4>
          Sports Allowed : {data.sports.map((item) => item.title).toString()}
        </h4>
        <div className="flex-row">
          <div>
            <h4>{data.address}</h4>
            <h4>{data.region}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

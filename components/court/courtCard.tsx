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
      className="flex w-full bg-neutral-300 h-64"
    >
      <div className="w-1/2 h-full relative">
        <Image
          src={data.imageId}
          alt="picture of court"
          fill
          className="object-fit"
        />
      </div>
      <div className="flex flex-col">
        <h2>{data.title}</h2>
        <h4>
          Sports Allowed : {data.sports.map((item) => item.title).toString()}
        </h4>
        <h4>
          {data.address}, {data.region}
        </h4>
      </div>
    </Link>
  );
};

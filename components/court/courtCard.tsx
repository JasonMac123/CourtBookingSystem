"use client";

import Image from "next/image";
import Link from "next/link";

import { CourtWithSports } from "@/types";

interface CourtCardProps {
  data: CourtWithSports;
}

export const CourtCard = ({ data }: CourtCardProps) => {
  return (
    <Link href={`/court/${data.id}`}>
      <div>
        <div>
          <Image
            src={data.imageId}
            alt="picture of court"
            fill
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <h2>{data.title}</h2>
        </div>
      </div>
    </Link>
  );
};

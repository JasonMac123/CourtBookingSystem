"use client";

import Link from "next/link";
import { useMemo } from "react";

import { CourtWithSports } from "@/types";

import { useFilters } from "@/hooks/useFilters";

import { Skeleton } from "./ui/skeleton";

interface CourtListProps {
  data: CourtWithSports[] | undefined;
}

export const CourtList = ({ data }: CourtListProps) => {
  const { sport, location } = useFilters();

  const filterData = (
    sport: string,
    location: string,
    data: CourtWithSports[] | undefined
  ) => {
    if (!data) {
      return undefined;
    }

    if (sport) {
      data = data.filter((court) =>
        court.sports.some((item) => item.title === sport)
      );
    }

    if (location) {
      data = data.filter((court) => court.region === location);
    }

    return data;
  };

  const courtData = useMemo(
    () => filterData(sport, location, data),
    [sport, location, data]
  );

  if (!courtData) {
    return (
      <div className="flex items-center justify-center">
        <p>Sorry could not find any courts</p>
      </div>
    );
  }

  return (
    <div>
      {courtData.map((court) => (
        <Link href={`/court/${court.id}`} key={court.id}>
          <div>{court.title}</div>
        </Link>
      ))}
    </div>
  );
};

"use client";
import { useMemo } from "react";

import { CourtWithSports } from "@/types";

import { useFilters } from "@/hooks/useFilters";
import { CourtCard } from "./courtCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-12 gap-8 mt-8">
      {courtData.map((court) => (
        <CourtCard data={court} key={court.id} />
      ))}
    </div>
  );
};

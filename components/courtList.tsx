import Link from "next/link";

import { CourtWithSports } from "@/types";

import { useFilters } from "@/hooks/useFilters";

import { Skeleton } from "./ui/skeleton";

interface CourtListProps {
  data: CourtWithSports[] | undefined;
}

export const CourtList = ({ data }: CourtListProps) => {
  const { sport, location } = useFilters();

  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <p>Sorry could not find any courts</p>
      </div>
    );
  }

  if (sport) {
    data = data.filter((court) =>
      court.sports.some((item) => item.title === sport)
    );
  }

  if (location) {
    data = data.filter((court) => court.region === location);
  }

  return (
    <div>
      {data.map((court) => (
        <Link href={`/court/${court.id}`} key={court.id}>
          <div>{court.title}</div>
        </Link>
      ))}
    </div>
  );
};

CourtList.skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
      <Skeleton className="w-full h-80" />
    </div>
  );
};

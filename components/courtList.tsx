import Link from "next/link";

import { Skeleton } from "./ui/skeleton";
import { Court } from "@prisma/client";

interface CourtListProps {
  data: Court[] | undefined;
}

export const CourtList = ({ data }: CourtListProps) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <p>Sorry could not find any courts</p>
      </div>
    );
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

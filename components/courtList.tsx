import { db } from "@/prisma";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export const CourtList = async () => {
  const courts = await db.court.findMany();

  return (
    <div>
      {courts.map((court) => (
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

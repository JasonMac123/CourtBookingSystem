import { Skeleton } from "../ui/skeleton";

export const CourtListSkeleton = () => {
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

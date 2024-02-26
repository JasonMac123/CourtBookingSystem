import { Skeleton } from "../ui/skeleton";

export const CourtCalendarSkeleton = () => {
  return (
    <div
      className="bg-white rounded-md p-24"
      style={{ height: 700, width: 600 }}
    >
      <Skeleton className="w-full h-20" />
      <Skeleton className="w-full h-full" />
    </div>
  );
};

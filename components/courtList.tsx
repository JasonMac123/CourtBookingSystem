import { db } from "@/prisma";

export const CourtList = async () => {
  const courts = await db.court.findMany();

  return (
    <div>
      {courts.map((court) => (
        <div key={court.id}>{court.title}</div>
      ))}
    </div>
  );
};

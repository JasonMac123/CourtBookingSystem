import { db } from "@/prisma";
import Link from "next/link";

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

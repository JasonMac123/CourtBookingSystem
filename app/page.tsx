import { Suspense } from "react";

import { db } from "@/prisma";

import { CourtList } from "@/components/court/courtList";
import { Filter } from "@/components/filter";
import { CourtListSkeleton } from "@/components/court/courtListSkeleton";

const Home = async () => {
  const data = await db.court.findMany({
    include: {
      sports: true,
    },
  });

  return (
    <main className="mt-20">
      <Filter />
      <Suspense fallback={<CourtListSkeleton />}>
        <CourtList data={data} />
      </Suspense>
    </main>
  );
};

export default Home;

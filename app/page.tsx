import { Suspense } from "react";

import { CourtList } from "@/components/courtList";
import { Filter } from "@/components/filter";
import { db } from "@/prisma";

const Home = async () => {
  const courts = await db.court.findMany({});

  return (
    <main className="mt-20">
      <Filter />
      <Suspense fallback={<CourtList.skeleton />}>
        <CourtList data={courts} />
      </Suspense>
    </main>
  );
};

export default Home;

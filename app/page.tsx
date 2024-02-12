import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";

import { db } from "@/prisma";

import { CourtList } from "@/components/courtList";
import { Filter } from "@/components/filter";

const Home = async () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["courts"],
    queryFn: async () =>
      await db.court.findMany({
        include: {
          sports: true,
        },
      }),
  });

  return (
    <main className="mt-20">
      <Filter />
      <Suspense fallback={<CourtList.skeleton />}>
        <CourtList data={data} />
      </Suspense>
    </main>
  );
};

export default Home;

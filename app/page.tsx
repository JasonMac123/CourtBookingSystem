import { Suspense } from "react";

import { CourtList } from "@/components/courtList";
import { Filter } from "@/components/filter";

export default function Home() {
  return (
    <main className="mt-20">
      <Filter />
      <Suspense fallback={<CourtList.skeleton />}>
        <CourtList />
      </Suspense>
    </main>
  );
}

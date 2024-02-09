import { CourtList } from "@/components/courtList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<CourtList.skeleton />}>
        <CourtList />
      </Suspense>
    </main>
  );
}

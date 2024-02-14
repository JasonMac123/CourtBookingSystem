import { db } from "@/prisma";

import { CourtDetails } from "@/components/court/courtDetails";
import { CourtCalendar } from "@/components/courtCalendar";

interface CourtIdPageProps {
  params: {
    courtId: string;
  };
}

const CourtIdPage = async ({ params }: CourtIdPageProps) => {
  const courtData = await db.court.findFirst({
    where: {
      id: params.courtId,
    },
    include: {
      reservations: true,
    },
  });

  if (!courtData) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p>Could not fetch court data</p>
      </div>
    );
  }

  return (
    <main className="mt-20">
      <div className="flex flex-row">
        <CourtCalendar />
        <CourtDetails />
      </div>
    </main>
  );
};

export default CourtIdPage;

import { db } from "@/prisma";

import { CourtDetails } from "@/components/court/courtDetails";
import { CourtCalendar } from "@/components/court/courtCalendar";

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
      sports: true,
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
    <main className="mt-24 mb-10">
      <div className="flex flex-row justify-center gap-8">
        <CourtCalendar data={courtData} />
        <CourtDetails data={courtData} />
      </div>
    </main>
  );
};

export default CourtIdPage;

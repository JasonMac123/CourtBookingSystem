import { db } from "@/prisma";

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

  return <div>{courtData.title}</div>;
};

export default CourtIdPage;

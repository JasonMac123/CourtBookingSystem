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
};

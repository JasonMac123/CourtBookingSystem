import Image from "next/image";

import { CourtWithReservationsAndSports } from "@/types";

interface CourtDetailsProps {
  data: CourtWithReservationsAndSports;
}

export const CourtDetails = ({ data }: CourtDetailsProps) => {
  return (
    <div className="flex flex-col w-2/5 bg-white rounded-md">
      <div className="w-[90%] h-1/2 relative rounded-xl overflow-auto mx-auto mt-8">
        <Image
          src={data.imageId}
          alt="picture of court"
          fill
          className="object-fit"
        />
      </div>
    </div>
  );
};

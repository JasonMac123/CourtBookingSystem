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
      <div className="flex flex-col px-8 py-4">
        <h2 className="text-4xl">{data.title}</h2>
        <h3>{data.description}</h3>
        <div className="flex flex-col items-start mt-2">
          <h4 className="text-lg">{data.address}</h4>
          <h5 className="text-sm">{data.region}</h5>
        </div>
        <div className="flex flex-col items-end">
          <h4 className="font-semibold">${data.price} per hour.</h4>
          <h5 className="text-sm">*10$ surcharge if booked for 1 hour</h5>
        </div>
      </div>
    </div>
  );
};

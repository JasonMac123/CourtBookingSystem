import { CourtReservationEvent } from "@/types";

interface CourtBookingInformationProps {
  price: number;
  reservation: CourtReservationEvent;
}

export const CourtBookingInformation = ({
  price,
  reservation,
}: CourtBookingInformationProps) => {
  const startPoint = reservation.start.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const endPoint = reservation.end.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const hours = reservation.end.getHours() - reservation.start.getHours();
  const totalPrice = hours > 1 ? price * hours : price + 10;

  return (
    <>
      <div>
        {startPoint} to {endPoint}
      </div>
      <div>${totalPrice} tax included</div>
    </>
  );
};

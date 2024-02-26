import { Sport, Court, Reservation } from "@prisma/client";

export type CourtWithSports = Court & { sports: Sport[] };

export type CourtWithReservationsAndSports = Court & {
  reservations: Reservation[];
} & {
  sports: Sport[];
};

export type CourtReservationEvent = {
  start: Date;
  end: Date;
  title: string;
};

export type CourtEvent = {
  start: Date;
  end: Date;
};

export interface CheckoutInformation extends CourtReservationEvent {
  price: number;
  courtId: string;
}

import { Moment } from "moment";
import { Sport, Court, Reservation } from "@prisma/client";

export type CourtWithSports = Court & { sports: Sport[] };

export type CourtWithReservationsAndSports = Court & {
  reservations: Reservation[];
} & {
  sports: Sport[];
};

export type CourtReservationEvent = {
  start: Moment;
  end: Moment;
  title: string;
};

export type CourtEvent = {
  start: Date;
  end: Date;
};

import { Sport, Court, Reservation } from "@prisma/client";

export type CourtWithSports = Court & { sports: Sport[] };

export type CourtWithReservationsAndSports = Court & {
  reservations: Reservation[];
} & {
  sports: Sport[];
};

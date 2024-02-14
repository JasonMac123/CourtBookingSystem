import { Sport, Court, Reservation } from "@prisma/client";

export type CourtWithSports = Court & { sports: Sport[] };

export type CourtWithReservations = Court & { reservations: Reservation[] };

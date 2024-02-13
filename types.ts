import { Sport, Court } from "@prisma/client";

export type CourtWithSports = Court & { sports: Sport[] };

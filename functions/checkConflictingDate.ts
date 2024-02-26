import moment from "moment";

import { CourtReservationEvent } from "@/types";

export const checkConflictingDate = (
  events: CourtReservationEvent[],
  date: CourtReservationEvent
): boolean => {
  for (const event of events) {
    if (
      event.start.getDay() === date.start.getDay() &&
      event.start.getMonth() === date.start.getMonth()
    ) {
      // three scenarios if date is overlapping
      // #3 starts before and and ends after the event

      // #1 starts before then ends in the middle,
      if (
        moment(event.start).isBefore(date.end) &&
        moment(event.end).isAfter(date.end)
      ) {
        return false;
      }

      // #2 starts in the middle then ends outside of the event
      if (
        moment(event.start).isBefore(date.start) &&
        moment(event.end).isAfter(date.end)
      ) {
        return false;
      }

      if (
        moment(event.start).isAfter(date.start) &&
        moment(event.end).isBefore(date.end)
      ) {
        return false;
      }
    }
  }

  return true;
};

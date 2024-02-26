import moment from "moment";

import { CourtReservationEvent } from "@/types";

export const checkConflictingDate = (
  events: CourtReservationEvent[],
  date: CourtReservationEvent
): boolean => {
  for (const event of events) {
    // three scenarios if current date is overlapping
    // #1 current reservation time ends between the start and end of past reservation date
    if (
      moment(event.start).isBefore(date.end) &&
      moment(event.end).isAfter(date.end)
    ) {
      return false;
    }

    // #2 current reservation time starts between the start and end of past reservation date
    if (
      moment(event.start).isBefore(date.start) &&
      moment(event.end).isAfter(date.end)
    ) {
      return false;
    }

    // #3 current reservation time stars before the start of the past
    //    reservation date and ends after the past reservation date
    if (
      moment(event.start).isAfter(date.start) &&
      moment(event.end).isBefore(date.end)
    ) {
      return false;
    }
  }

  return true;
};

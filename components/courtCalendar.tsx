"use client";

import { useCallback, useState } from "react";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment, { Moment } from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CourtWithReservationsAndSports } from "@/types";

const localizer = momentLocalizer(moment);

type CourtReservationEvent = {
  start: Moment;
  end: Moment;
  title: string;
};

type CourtEvent = {
  start: Date;
  end: Date;
};

interface CourtCalendarProps {
  data: CourtWithReservationsAndSports;
}

export const CourtCalendar = ({ data }: CourtCalendarProps) => {
  const eventData = data.reservations.map((item) => {
    return {
      title: `Court Booked by ${item.bookingName}`,
      start: moment(item.startTime),
      end: moment(item.endTime),
    };
  });

  const [events, setEvents] = useState<CourtReservationEvent[]>(eventData);
  const [reservation, setReservation] = useState<Array<CourtReservationEvent>>(
    []
  );

  const handleSelectSlot = useCallback(
    ({ start, end }: CourtEvent) => {
      let newStart = moment(start);
      const newEnd = moment(end);
      setReservation([
        { start: newStart, end: newEnd, title: "Court Reservation" },
      ]);
    },
    [setReservation]
  );

  const handleSelectEvent = useCallback(
    (reservation: CourtReservationEvent) => {
      return;
    },
    []
  );

  return (
    <div className="h-full">
      <Calendar
        dayLayoutAlgorithm={"no-overlap"}
        defaultView={Views.WEEK}
        localizer={localizer}
        events={events}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

"use client";

import { useCallback, useState } from "react";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CourtWithReservations } from "@/types";

const localizer = momentLocalizer(moment);

type CourtReservationEvent = {
  start: Date;
  end: Date;
  title: string;
};

type CourtEvent = {
  start: Date;
  end: Date;
};

interface CourtCalendarProps {
  data: CourtWithReservations;
}

export const CourtCalendar = ({ data }: CourtCalendarProps) => {
  const [events, setEvents] = useState(data.reservations);
  const [reservation, setReservation] = useState<Array<CourtReservationEvent>>(
    []
  );

  const handleSelectSlot = useCallback(
    ({ start, end }: CourtEvent) => {
      setReservation([{ start, end, title: "Court Reservation" }]);
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
        events={reservation}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

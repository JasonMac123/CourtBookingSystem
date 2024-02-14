"use client";

import { useCallback, useState } from "react";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

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

export const CourtCalendar = () => {
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
    (reservation: CourtReservationEvent) => window.alert(reservation.title),
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

"use client";

import { useCallback, useMemo, useState } from "react";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  CourtEvent,
  CourtReservationEvent,
  CourtWithReservationsAndSports,
} from "@/types";

const localizer = momentLocalizer(moment);

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
  const [date, setDate] = useState(moment().toDate());

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

  const onNavigate = useCallback((newDate: Date) => {
    if (newDate.getDate() < moment().toDate().getDate()) {
      return;
    }

    setDate(newDate);
  }, []);

  const { views } = useMemo(
    () => ({
      views: {
        day: true,
      },
    }),
    []
  );

  return (
    <div className="h-full bg-white rounded-xl p-4">
      <Calendar
        dayLayoutAlgorithm={"no-overlap"}
        defaultView={Views.DAY}
        localizer={localizer}
        events={events}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        date={date}
        onNavigate={onNavigate}
        views={views}
      />
    </div>
  );
};

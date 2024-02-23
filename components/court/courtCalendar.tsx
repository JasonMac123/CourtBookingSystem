"use client";

import { useCallback, useMemo, useState } from "react";

import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import { toast } from "react-toastify";

import { useCheckout } from "@/hooks/useCheckout";

import {
  CourtEvent,
  CourtReservationEvent,
  CourtWithReservationsAndSports,
} from "@/types";
import { CourtBookingInformation } from "./courtBookingInformation";

const localizer = momentLocalizer(moment);

interface CourtCalendarProps {
  data: CourtWithReservationsAndSports;
}

export const CourtCalendar = ({ data }: CourtCalendarProps) => {
  const eventData = data.reservations.map((item) => {
    return {
      title: `Court Booked by ${item.bookingName}`,
      start: moment(item.startTime).toDate(),
      end: moment(item.endTime).toDate(),
    };
  });

  const [events, setEvents] = useState<CourtReservationEvent[]>(eventData);
  const [reservation, setReservation] = useState<CourtReservationEvent>();
  const [date, setDate] = useState(moment().toDate());

  const { onOpen, setReservationData, setCourtData } = useCheckout();

  const handleSelectSlot = useCallback(
    ({ start, end }: CourtEvent) => {
      const todayDate = moment().toDate();

      const newStart = moment(start).toDate();
      const newEnd = moment(end).toDate();

      if (
        newStart.getDay() === todayDate.getDay() &&
        newStart.getMonth() === todayDate.getMonth() &&
        newStart.getHours() <= todayDate.getHours()
      ) {
        toast("Cannot book court time in the past");
        return;
      }

      setReservation({
        start: newStart,
        end: newEnd,
        title: "Court Reservation",
      });
      setEvents([
        ...events,
        {
          start: newStart,
          end: newEnd,
          title: "Court Reservation",
        },
      ]);
    },
    [setReservation]
  );

  const handleSelectEvent = useCallback(
    (reservation: CourtReservationEvent) => {
      setReservationData(reservation);
      setCourtData(data);
      onOpen();
      return;
    },
    []
  );

  const onNavigate = useCallback((newDate: Date) => {
    const currentDate = moment().toDate();

    if (
      newDate.getDate() < currentDate.getDate() &&
      newDate.getMonth() <= currentDate.getMonth()
    ) {
      toast("Cannot book dates in the past");
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

  const minDate = useMemo(
    () => moment(date).set({ hour: 8, minute: 0 }),
    [date]
  ).toDate();

  return (
    <div className="h-full bg-white rounded-xl p-4">
      <div className="flex gap-4 pb-4 justify-between">
        Booking Time
        {reservation && (
          <CourtBookingInformation
            price={data.price}
            reservation={reservation}
          />
        )}
      </div>
      <Calendar
        dayLayoutAlgorithm={"no-overlap"}
        defaultView={Views.DAY}
        localizer={localizer}
        events={events}
        step={60}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        date={date}
        min={minDate}
        onNavigate={onNavigate}
        views={views}
        style={{ height: 700, width: 600 }}
      />
    </div>
  );
};

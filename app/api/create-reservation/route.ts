import { db } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { startTime, endTime, courtId, bookingName } = body;

    const reservation = await db.reservation.create({
      data: {
        startTime: startTime,
        endTime: endTime,
        courtId: courtId,
        bookingName: bookingName,
      },
    });

    return NextResponse.json(reservation);
  } catch (e: any) {
    throw new Error(e);
  }
}

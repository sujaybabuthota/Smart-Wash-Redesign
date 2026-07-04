import { env } from "@/config/env";
import { apiRequest } from "@/services/api-client";
import type { BookingFormValues, BookingRecord } from "@/features/booking/types/booking";

const LOCAL_STORAGE_KEY = "smart-wash-bookings";

function readLocalBookings(): BookingRecord[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookingRecord[]) : [];
  } catch {
    return [];
  }
}

function writeLocalBooking(record: BookingRecord): void {
  const existing = readLocalBookings();
  existing.push(record);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
}

/**
 * Creates a booking.
 *
 * When VITE_API_BASE_URL is configured, the booking is submitted to the
 * real backend at POST /bookings. Until then, bookings are persisted to
 * localStorage so the flow stays fully functional in the meantime — swap
 * in the real endpoint any time by setting VITE_API_BASE_URL, no UI changes
 * needed.
 */
export async function createBooking(values: BookingFormValues): Promise<BookingRecord> {
  if (env.isApiConfigured) {
    return apiRequest<BookingRecord>("/bookings", {
      method: "POST",
      body: values,
    });
  }

  const record: BookingRecord = {
    ...values,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  writeLocalBooking(record);
  return record;
}

export function listLocalBookings(): BookingRecord[] {
  return readLocalBookings();
}

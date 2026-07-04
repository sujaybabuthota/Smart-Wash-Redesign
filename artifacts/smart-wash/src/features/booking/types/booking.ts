export const BOOKING_SERVICES = [
  "Premium Laundry",
  "Steam Press",
  "Dry Cleaning",
  "Wash & Fold",
  "Shoe Laundry",
  "Saree Rolling",
] as const;

export const BOOKING_TIME_SLOTS = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "5:00 PM – 7:00 PM",
] as const;

export type BookingService = (typeof BOOKING_SERVICES)[number];
export type BookingTimeSlot = (typeof BOOKING_TIME_SLOTS)[number];

export interface BookingFormValues {
  name: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
}

export interface BookingRecord extends BookingFormValues {
  id: string;
  createdAt: string;
}

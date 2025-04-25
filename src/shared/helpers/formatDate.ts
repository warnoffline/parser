import { DateTime } from "luxon";

export function formatDate(dateString: string): string {
  const date = DateTime.fromISO(dateString, { zone: "utc" }).setLocale("ru");
  const now = DateTime.now().setLocale("ru");

  if (date.hasSame(now, "day")) {
    return `Сегодня, ${date.toFormat("HH:mm")}`;
  }

  if (date.hasSame(now.minus({ days: 1 }), "day")) {
    return `Вчера, ${date.toFormat("HH:mm")}`;
  }

  const rest = date.toFormat("d MMMM yyyy, HH:mm");
  return rest;
}

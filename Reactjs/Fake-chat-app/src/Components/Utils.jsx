import dayjs from "dayjs";

export function FormatMyDate(date, format = "HH:MMA") {
  return dayjs(date).format(format);
}

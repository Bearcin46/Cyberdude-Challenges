import dayjs from "dayjs";

export function FormatMyDate(date, format = "h:mm A") {
  return dayjs(date).format(format);
}

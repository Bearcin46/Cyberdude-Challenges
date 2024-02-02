import dayjs from "dayjs";

export function FormatDate(date, format = "MMMM D, YYYY") {
  return dayjs(date).format(format);
}

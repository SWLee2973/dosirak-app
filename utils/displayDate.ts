import dayjs from "dayjs";

const displayDate = (date: Date | string) => {
  return dayjs().diff(dayjs(date), "day") > 1
    ? dayjs(date).format("YYYY.MM.DD dd")
    : // @ts-ignore
      dayjs(date).fromNow();
};

export default displayDate;

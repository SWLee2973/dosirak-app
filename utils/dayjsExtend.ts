import dayjs from "dayjs";

export default function dayjsExtend() {
  require("dayjs/locale/ko");

  dayjs.extend(require("dayjs/plugin/relativeTime"));
  dayjs.extend(require("dayjs/plugin/advancedFormat"));
  dayjs.extend(require("dayjs/plugin/updateLocale"));

  dayjs.locale("ko");

  //@ts-ignore
  dayjs.updateLocale("ko", {
    relativeTime: {
      future: "%s초 내",
      past: "%s 전",
      s: "조금",
      m: "약 1분",
      mm: "%d분",
      h: "약 1시간",
      hh: "%d시간",
      d: "하루",
      dd: "%d일",
      M: "한달",
      MM: "%d개월",
      y: "1년",
      yy: "%d년",
    },
  });
}

"use client";

import { useState } from "react";
import { StyledCalendarWrapper, StyledCalendar, StyledDate, StyledDot } from "./styles/styled-calendar";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DiaryCalendar() {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date());
  const attendDay = ["2024-05-02", "2024-05-03"]; // 출석한 날짜 예시

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        locale="ko"
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
        // 오늘 날짜에 '오늘' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
        tileContent={({ date, view }) => {
          let html = [];
          //   if (view === "month" && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
          //     html.push(<StyledToday key={"today"}>오늘</StyledToday>);
          //   }
          if (view === "month") {
            if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
            }
          }
          return <>{html}</>;
        }}
      />
      <StyledDate onClick={handleTodayClick}>오늘</StyledDate>
    </StyledCalendarWrapper>
  );
}

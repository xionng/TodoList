import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);

  const renderCalendar = useCallback(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    const newCalendarDays = [];

    // 빈 날짜(이전 달)
    for (let i = 0; i < startDayOfWeek; i++) {
      newCalendarDays.push(<EmptyDate key={`empty-${i}`} />);
    }

    // 현재 달의 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      newCalendarDays.push(<DateElement key={`date-${i}`}>{i}</DateElement>);
    }

    setCalendarDays(newCalendarDays);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    renderCalendar();
  }, [currentMonth, currentYear, renderCalendar]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  // const TodayDate = `${today.getFullYear()}년 ${
  //   today.getMonth() + 1
  // }월 ${today.getDate()}일`;

  return (
    <CalendarWrap>
      <CalendarHeader>
        <CalendarHeaderCenter>
          {/* {TodayDate} */}
          <CurrentYear>{`${currentYear}년`}</CurrentYear>
          <CurrentMonth>{`${currentMonth + 1}월`}</CurrentMonth>
          <MonthChangeBtn onClick={prevMonth}>
            <BtnIcon icon={faCaretLeft} />
          </MonthChangeBtn>
          <MonthChangeBtn onClick={nextMonth}>
            <BtnIcon icon={faCaretRight} />
          </MonthChangeBtn>
        </CalendarHeaderCenter>
      </CalendarHeader>
      <Days>
        <Day>SUN</Day>
        <Day>MON</Day>
        <Day>TUE</Day>
        <Day>WED</Day>
        <Day>THU</Day>
        <Day>FRI</Day>
        <Day>SAT</Day>
      </Days>
      <CalendarDates>{calendarDays}</CalendarDates>
    </CalendarWrap>
  );
}

const CalendarWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;
  margin-right: 25px;
  background: #fff;
  width: 350px;
  height: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CalendarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: 280px;
  height: 70px;
`;

const CalendarHeaderCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const MonthChangeBtn = styled.div`
//   width: 25px;
//   height: 25px;
//   border-radius: 5px;
//   background: #c3e1e3;
// `;

const MonthChangeBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin-left: 3px;
  background: #c3e1e3;
  display: flex;
  flex-direction: column;
  color: white;
`;

const BtnIcon = styled(FontAwesomeIcon)`
  display: flex;
  font-size: 25px;
`;

const CurrentYear = styled.p`
  color: #97b3b5;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;

const CurrentMonth = styled.p`
  color: #4e6466;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  margin-left: 5px;
  margin-right: 10px;
`;

const Days = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7c9d9f;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 18px; /* 180% */
  width: 300px;
`;

const Day = styled.p`
  width: calc(100% / 7);
  text-align: center;

  &:nth-child(7n) {
    color: rgb(148, 191, 255); /* 토요일 */
  }

  &:nth-child(7n + 1) {
    color: rgb(255, 148, 148); /* 일요일 */
  }
`;

const CalendarDates = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 150px;
`;

const DateElement = styled.div`
  width: calc(100% / 7);
  text-align: center;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  &:nth-child(7n) {
    color: rgb(148, 191, 255); /* 토요일 */
  }

  &:nth-child(7n + 1) {
    color: rgb(255, 148, 148); /* 일요일 */
  }
`;

const EmptyDate = styled.div`
  width: calc(100% / 7);
`;

// const Today = styled.section`
//   background: #000;
// `;

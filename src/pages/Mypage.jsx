import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

export default function Mypage() {
  const [value, setValue] = useState(new Date());

  const changeDate = date => {
    setValue(date); // 선택된 마지막 날짜로 상태 업데이트
  };

  const tileClassName = ({ date }) => {
    if (date.getDay() === 6) {
      return 'saturday';
    }
    if (date.getDay() === 0) {
      return 'sunday';
    }
    return '';
  };

  return (
    <CalendarWrap>
      <CalendarBox
        locale="en"
        onChange={changeDate}
        value={value}
        formatDay={(value, date) => date.toLocaleString('en', { day: 'numeric' })}
        tileClassName={tileClassName}
        showNeighboringMonth={false}
        selectRange={false}
        prevLabel={"❮"}
        nextLabel={"❯"}
        next2Label={null}
        prev2Label={null}
      />
    </CalendarWrap>
  );
}

export const CalendarWrap = styled.div`
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
/* 헤더바 */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    width: 270px;
    height: 50px;
    padding: 0px 10px;
    margin: 0px 40px;
  }

  .react-calendar__navigation button {
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin-left: 3px;
    background: #c3e1e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .react-calendar__navigation__label {
    font-size: 15px;
    font-weight: 600;
    color: #4e6466;
    background-color: white;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays {
    background: white;
    abbr {
      font-size: 10px;
      font-weight: 700;
      color: #4e6466;
    }
  }

  /* 요일 이름 변경
  .react-calendar__month-view__weekdays__weekday--saturday abbr {
    color: #6560ff; 
  }

  .react-calendar__month-view__weekdays__weekday--sunday abbr {
    color: #ff8349; 
  }
*/
  /* 날짜 */
  .react-calendar__tile {
    color: #4e6466;
    background: white;
    text-align: center;
    border: 1px solid white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    height: 35px;
  }

  .react-calendar__tile--active,
  .react-calendar__tile:enabled:focus {
    border: #4e6466;
    background-color: #e6f1f1;
  }

  .react-calendar__tile:enabled:hover {
    border: 1px solid #4e6466;
    background-color: #fff;
  }
/* 날짜 요일 별 */
  .react-calendar__tile.saturday {
    color: #6560ff;
  }

  .react-calendar__tile.sunday {
    color: #ff8349;
  }

  .react-calendar__tile--now {
    background: #c3e1e3;
    color: #4e6466;
  }
`;

export const CalendarBox = styled(Calendar)`
  border: none;
  border-radius: 30px;
  background-color: #fff;
`;

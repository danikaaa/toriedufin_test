import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import '../styles/DashboardCalendar.scss';

const DashboardCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [learnDaysInMonth, setLearnDaysInMonth] = useState(0);

    // 보여지는 달 노출
    const onClick = (type) => {
        console.log('click', type);
        // const currentMonth = new Date(date).getMonth();
        // const newDate = new Date(date);

        // console.log(currentMonth);
        // if (type === 'next'){
        //     console.log(newDate.setMonth(currentMonth+1));
        //     console.log('ext');
        // }else if (type === 'prev'){
        //     console.log(newDate.setMonth(currentMonth-1));
        // };
    };
    
    const onChange = (selectedDate) => {
        setDate(selectedDate);
        updateLearnDaysInMonth(selectedDate);
      };

    const updateLearnDaysInMonth = (selectedDate) => {
        const startOfMonth = moment(selectedDate).startOf('month');
        const endOfMonth = moment(selectedDate).endOf('month');
        const daysInMonth = learnDayList.filter(date => moment(date).isBetween(startOfMonth, endOfMonth, null, '[]'));

        setLearnDaysInMonth(daysInMonth.length);
    };
    
    


    //학습날짜체크
    const learnDayList = [
        '2023-11-02',
        '2023-11-11',
        '2023-12-24',
        '2023-01-23',
        '2023-12-01',
        '2023-12-04',
        '2023-12-13'
    ];
    const tileContent = ({ date }) => {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        if (learnDayList.includes(formattedDate)) {
          return <span className="learn_day">•</span>;
        }
        return null;
      };


    return(
    <div>
            <Calendar 
            locale="en-US" // 영어로 설정
            weekStartsOn={0} // 일요일 먼저 시작
            showNeighboringMonth={false} // 이어지는 날짜 미노출
            onChange={onChange} value={date}
            tileContent={tileContent}
            // nextLabel={<span onClick={() => onClick('next')}>›</span>}
            // prevLabel={<span onClick={() => onClick('prev')}>‹</span>}
            />
        <div className='month_total_day'>
            {moment(date).format('M')}월 출석 <span>총 {learnDaysInMonth}일</span>
        </div>
    </div>
  
    );
};

export default DashboardCalendar;
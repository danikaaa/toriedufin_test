import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import '../styles/LineChart.scss';


const LineChart = () => {


  const gradient = document.createElement('canvas').getContext('2d');
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 300);
  gradientFill.addColorStop(0, '#eb512815'); // 시작 색상
  gradientFill.addColorStop(1, '#ffffff15'); // 끝 색상


  // 데이터 설정
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월'],
    datasets: [
      {
        label: '내 데이터셋',
        data: [65, 59, 80, 81, 56, 60, 10, 30, 24, 40],
        fill: true,
        borderColor: '#EB5128',
        backgroundColor: gradientFill,
        pointBackgroundColor:'#EB5128',
        pointRadius: 5,
        tension: 0.45, // 곡선 
        borderWidth: 1.5,
      },
      {
        label: '내 데이터셋',
        data: [65, 59, 80, 81, 56, 60, 10, 30, 24, 40],
        fill: false,
        borderColor: '#000',
        pointBackgroundColor: 'whitesmoke',
        pointBorderColor:'whitesmoke',
        pointRadius: 12,
        tension: 0,
        borderDash: [3, 3], // [길이, 간격]
        borderDashOffset: 0,
        borderWidth: 1.5,
      },
    ],
  };

  // 옵션 설정
  const options = {
    scales: {
      x: {
        display:false,
        type: 'category',
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월'],
      },
      y: {
        display:false,
        type: 'linear',
        position: 'left',
      },
    },

    plugins: {
      legend: {
        display: false, // 범례를 숨김
      },
    },

    maintainAspectRatio: false, // false로 설정하면 적용
    responsive: true,

    
  };

  const style = {
    height : '230px',
  };

  return (
    <div style={style}>
      <div className='align'>
        <select name='chart'>
          <option value='day'>일별</option>
          <option value='month'>월별</option>
          <option value='year'>년도별</option>
        </select>
      </div>
      

      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
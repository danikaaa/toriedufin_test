import '../styles/Dashboard.scss';
import DashBoardImg from '../assets/Dashboard_img.png';
import Calendar from '../components/Calendar';
import LineChart from '../components/LineChart';


const Main = () => {


    return (
        <div className="Dashboard">
            <div className="grade">🏅 GOLD</div>
            <div className="uesr_name">반갑습니다 <span>토리</span>님</div>
            <div className="box_1">
                <div className="DashInfo_box">
                    <div className ="DashInfo">
                        <div className="DashInfo_text">
                        <div>토리에듀핀과 함께</div>
                        <div className="total_day">총 <span>11</span>일</div>
                        <div className="entry_day">가입 <span>2023.08.01</span></div>
                        </div>
                        <img src={DashBoardImg} alt="img"/>
                    </div>
                    <div className ="info_box">
                        <div className="info">금융지능순위 <span>9위</span></div>
                        <div className="info">정답율 <span>97%</span></div>
                        <div className="info">학습량 <span>70%</span></div>
                        <div className="info">총 학습 Gold <span>150,000</span></div>
                    </div>
                </div>
        
                    <div className="Calendar">
                        <Calendar></Calendar>
                    </div>
            </div>
           
            <div className="box_2">
                <div className="box_title">💰 수익률 현황</div>
                <div className="Graph">
                    <LineChart></LineChart>
                </div>
                <div className="info_box">
                    <div className="info">이달의 수익률 <span className="cl_blue">-3%</span></div>
                    <div className="info">누적 수익률 <span className="cl_red">23%</span></div>
                    <div className="info">손익금액 <span className="cl_red">25,340</span></div>
                </div>
            </div>
            
        </div>
    );

};

export default Main;
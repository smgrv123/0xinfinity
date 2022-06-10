import timelineData from './data';
import TimelineItem from './Timelineitem';
import './Timeline.css';
const Timeline = () =>
    timelineData.length > 0 && (
        <div className="Timeline" id='map'>
            <h1>R<span>o</span>ad map</h1>
            <p>PHASE - 1 (2022 Q2- Q3)</p>
            <div className="timelineContainer">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );


export default Timeline;





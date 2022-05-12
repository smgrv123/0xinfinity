import timelineData from './data';
import TimelineItem from './Timelineitem';
import '../components/Timeline.css';
const Timeline = () =>
    timelineData.length > 0 && (
        <div className="Timeline">
            <h1>R<span>o</span>ad map</h1>
            <div className="timelineContainer">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );


export default Timeline;





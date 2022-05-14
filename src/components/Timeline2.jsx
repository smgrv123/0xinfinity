import timelineData from './data2';
import TimelineItem from './Timelineitem2';
import '../components/Timeline2.css';
const Timeline2 = () =>
    timelineData.length > 0 && (
        <div className="Timeline2">
            {/* <h1>R<span>o</span>ad map</h1> */}
            <div className="timelineContainer2">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );


export default Timeline2;
import '../components/Timeline.css'
const TimelineItem = ({ data }) => (
    <div className="timelineItemContent">
        <h5>{data.title}</h5>
        <p>{data.text}</p>
        <span className="circle" />
    </div>
);

export default TimelineItem;
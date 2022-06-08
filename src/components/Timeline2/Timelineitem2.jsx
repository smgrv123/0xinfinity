import './Timeline2.css'
const TimelineItem = ({ data }) => (
    <div className="timelineItemContent2" data-aos="zoom-in">
        <h5>{data.title}</h5>
        <p>{data.text}</p>
        <span className="circle2" />
    </div>
);

export default TimelineItem;
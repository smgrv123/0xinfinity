import timelineData from "./data2";
import TimelineItem from "./Timelineitem2";
import "./Timeline2.css";

const Timeline2 = () =>

  timelineData.length > 0 && (
    <div className="Timeline2">
      {/* <h1>R<span>o</span>ad map</h1> */}
      <div className="timelineContainer2">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
      <div className="phase-2">
        <h1>PHASE - 2 (2022 Q4)</h1>
        <p>After the successful launch of the first project, marketing campaign for the second phase will begin. We plan to organize the biggest ideathon ever seen in the NFT space! Infinity club will be at the centre of it. Detailed roadmap will be revealed soon...</p>
      </div>
    </div>
  );

export default Timeline2;

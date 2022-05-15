import "./FAQ.css";
const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="FAQHeadings">
        <p>FAQs</p>
        <h1>
          FREQUENTLY ASKED
          <br />
          QUESTI<span>O</span>NS
        </h1>
      </div>
      <div className="FAQQuestions">
        <div className="SubFAQ">
          <div className="QuestOne">
            <p>Who is it for?</p>
          </div>
          <div className="AnsOne">
            <h1>Who is it for?</h1>
            <p>
              If you’re an artist, creator, or IP owner and have a unique
              proposition for an NFT project, but don’t necessarily have the
              knowledge or resources to bring it to life.
            </p>
          </div>
        </div>
        <div className="SubFAQ">
          <div className="QuestOne">
            <p>What service we will provide?</p>
          </div>
          <div className="AnsOne">
            <h1>What service we will provide?</h1>
            <p>
              The whole package. From project management, smart marketing
              campaigns, community building and management, state-of-the-art
              minting tech, and utility creation to post-launch support, we’ll
              take care of everything.
            </p>
          </div>
        </div>
        <div className="SubFAQ">
          <div className="QuestOne">
            <p>How much do we charge?</p>
          </div>
          <div className="AnsOne">
            <h1>How much do we charge?</h1>
            <p>
              It’s free* (No upfront charge). We will take a % of revenue
              generated from the sales. Yes, we are that confident in our
              services and your ideas.
            </p>
          </div>
        </div>
        <div className="SubFAQ">
          <div className="QuestOne">
            <p>How do we select a project?</p>
          </div>
          <div className="AnsOne">
            <h1>How do we select a project?</h1>
            <p>
              We wil focus on our efforts on one project at a time. Apply with
              your idea/art in the ‘submit your applications’ channel. You will
              have a chance to pitch your idea to our Infinity Club. After that
              voting will begin and the project with the most votes will be
              selected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
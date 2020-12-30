import "../assets/workArea.css";
const MyWork = (props) => {
  return (
    <div className="mywork-card-container">
      <div className="mywork-card">
        <div className="mywork-card-front">
          <img src={props.img} alt="test" />
        </div>
        <div className="mywork-card-back">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;

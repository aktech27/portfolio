import profilePic from "../assets/profilePic.jpg";
import "../assets/bioArea.css";
import "../assets/animations.css";

const Bio = () => {
  return (
    <div className="bio-area" id="bio-area">
      <div className="bio-image">
        <img src={profilePic} alt="Me" width="100%" />
      </div>
      <h1 className="bio-tagline head1">Hi, I am Ahamed Kabeer !</h1>
      <h2 className="bio-tagline head2">A Budding MERN developer</h2>
      <p className="bio-tagline para">
        Pursuing my UG degree in Computer Applications, I am an enthusiastic coder who loves to code
        in Python and Javascript. My other hobbies include puzzle solving and internet surfing
      </p>
    </div>
  );
};

export default Bio;

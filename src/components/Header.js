import Logo from "../assets/aktechtbg.png";
import "../assets/headerArea.css";

const Header = () => {
  return (
    <div className="header-area">
      <div className="header-logo">
        <img src={Logo} alt="logo" width="75%" padding="75%" />
      </div>
      <div className="header-tagline">
        <h1>The Coding Noob</h1>
      </div>
      <div className="header-links">
        <a href="#bio-area">
          <h3>About Me</h3>
        </a>
        <a href="#mywork-area">
          <h3>My Works</h3>
        </a>
        <a href="#footer-area">
          <h3>Contact Me</h3>
        </a>
      </div>
    </div>
  );
};

export default Header;

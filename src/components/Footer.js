import "../assets/footerArea.css";
import SocialIcon from "./socialIcons";
const Footer = () => {
  return (
    <div className="footer-area" id="footer-area">
      <p>Find me on social media.</p>
      <div className="footer-social-container">
        <SocialIcon font="'Average Sans', sans-serif" name="Linkedin" />
        <SocialIcon font="'Martel Sans', sans-serif" name="github" />
        <SocialIcon font="'Fira Sans', sans-serif" name="WhatsApp" />
        <SocialIcon font="'Titillium Web', sans-serif" name="facebook" />
        <SocialIcon font="'Grand Hotel', cursive" name="Instagram" />
      </div>
    </div>
  );
};

export default Footer;

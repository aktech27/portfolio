import React from "react";
import Logo from "../assets/work1.jpg";
import Header from "../components/Header";
import Mybio from "../components/myBio";
import Footer from "../components/Footer";
import MyWork from "../components/myWork";
const Portfolio = () => {
  return (
    <React.Fragment>
      <Header />
      <Mybio />
      <div className="mywork-area" id="mywork-area">
        <MyWork
          img={Logo}
          heading="MERN Login App"
          description="A simple demonstartion of Login/Register functionality with email verification and reset password features"
        />
        <MyWork
          img={Logo}
          heading="Context API"
          description="A simple demonstration of Context API, where options are shown/hidden based on drop-down selection"
        />
        <MyWork
          img={Logo}
          heading="File Uploading in MERN"
          description="A complete File handling system in MERN stack, with proper upload status and storing in MongoDB"
        />
        <MyWork
          img={Logo}
          heading="Python Color Chooser"
          description="A GUI interface that returns the RGB and Hex-code value of the color chosen from the palette"
        />
        <MyWork img={Logo} heading="Login App" description="Description" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Portfolio;

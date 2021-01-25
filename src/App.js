import React, { useEffect } from "react";
import MyNavbar from "./components/MyNavbar/MyNavbar.component";
import MyCarousal from "./components/MyCarousal/MyCarousal.component";
import MyTitleMessage from "./components/TitleMessage/TitleMessage.component";
import About from "./pages/About/About.component";
import Skills from "./pages/Skills/Skills.component";
import Container from "react-bootstrap/Container";
import TimeLine from "./components/ProjectsTimeline/ProjectsTimeline.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/ContactForm/ContactForm.component";
import AOS from 'aos';
import Footer from "./components/Footer/Footer.component";

import "./App.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <div>

        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </div>

      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <Footer />
    </div>
  );
};

export default App;

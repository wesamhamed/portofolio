import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.styles.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div data-aos="fade-right" id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5">
            <Col xs={12} md={4}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" style={{ maxWidth: "100%" }} alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={8}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi There! I am <strong>&nbsp;Wesam Mohammed Hamed Hamed.</strong>
                <br />I am a full stack web architect with more than 2 years of experience in a vast variety of web technologies.
                I have graduated with a bachelor's in Computer System Engineering which have given me a strong foundation in Computer Science theory and algorithms as well as related mathematics. I am not just a developer but know how to architect applications to fit my client's business needs.
                Although my experience has been with a wide variety of technologies my main focus is on Javascript and it's related frameworks. Below I list them in more detail.
                REACT - react-hooks, GatsbyJS, NextJS/JAMStack, create-react-app, routing using react-router (v4), state management via redux, async API communication via redux-thunk/redux-saga, testing via Jest/Mocha with ReactTestUtils/Enzyme, component lifecycle methods, presentational/container components, CSSTransitionGroups for animation, props checking, Material UI, optimization etc.
                NODE/EXPRESS - routing, middleware, template engines like EJS,Pug etc, Nodemailer for mailing, Passport.js for authentication, Mongoose for MongoDB, Knex for SQL, streams, concurrency model/event loop, testing using Mocha etc.

                GENERAL FRONTEND - Typescript, HTML5, CSS3 with flexbox, BEM syntax, Semantic UI, Sass/Compass for modular CSS, ES6 transpilation with Babel, JQuery, Gulp/Webpack as build system, ESLint for linting, Material Design, Percy for visual testing, Accessibility compliance (WCAG), Progressive Web Apps etc

                DATABASES - MongoDB, MySQL, PostgreSQL, Redis.

                WORKFLOW: Git/Github for version control, JIRA for scrum sprints, Trello/Asana for kanban, Slack for communication, Skype/Google Hangouts for meetups, Zeplin/Invision for frontend designs, Photoshop for pixel perfect layouts, Swagger for API documentation, Circle CI for continuous integration, AWS etc
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/14tFhSmGwO5FvaCNWZaPBVL7O9zmFUAyW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/wesamhamed" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.cn/in/wesam-hamed-74350a120/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

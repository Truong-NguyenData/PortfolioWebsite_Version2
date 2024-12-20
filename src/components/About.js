import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import myPicture from "../assets/img/my-picture.png"; 

export const About = () => {
const handleConnectClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
        connectSection.scrollIntoView({ behavior: "smooth" });
    }
    };
    

  return (
    <section className="about" id="about">
      <p className="section_text_p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="picture-frame">
              <img
                src={myPicture}
                alt="My Portrait"
                className="profile-picture"
              />
            </div>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <p className="about-description">
                    Hi, I’m Truong! I’m passionate about uncovering insights from data and building impactful solutions using machine learning and data visualization.
                  </p>
                  <div className="education">
                    <h5 className="education-heading">Education</h5>
                    <p>San Jose State University</p>
                    <p>Bachelor of Science in Data Science</p>
                    <p>Expected Graduation: May 2025</p>
                  </div>
                  < br />
                  <Button variant="primary" onClick={handleConnectClick}>
                    Let’s Talk
                  </Button>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

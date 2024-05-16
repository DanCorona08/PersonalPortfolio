import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/info-gif.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const MyInfo = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>My Contact Information</h2>
                <ul>
                  <li>Email: Djcorona9308@gmail.com</li>
                  <li>Phone:+16262095648</li>
                  <li>LinkedIn: www.linkedin.com/in/daniel-corona-8747222b0</li>
                </ul>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

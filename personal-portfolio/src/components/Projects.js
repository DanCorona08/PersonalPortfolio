import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/quiz-mania-login-img.PNG";
import projImg2 from "../assets/img/quiz-mania-gif.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
      {
        title: "Quiz Mania Login",
        description: "Login page for Quiz mania allows for new user registration and user login.",
        imgUrl: projImg1,
      },
      {
        title: "Attempted Quiz",
        description: "User attempts science quiz selects three answers leaving the rest blank. User submits and total score is shown.",
        imgUrl: projImg2,
      },
    ];
  
    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={{ backgroundColor: 'transparent' }}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Quiz Mania</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Future Project</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Future Project</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <div>
                            <p>Quiz Mania is a web-based app utilizing node.js to integrate a server to handle user registration, login, and quiz data. The app lets you choose from four different quizzes. You submit the quiz when done, and your score is shown to you along with the correct answers.</p>
                          </div>
                          <Row>
                            {projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      );
  };
  
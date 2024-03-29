import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg1,
    },
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg2,
    },
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg3,
    },
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg1,
    },
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg2,
    },
    {
      title: "Qhunter",
      description: "PHP Developer & Database Management",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              This is a workplace project resulting from coding and training.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={ isVisible ? "animate__animated animate__slideInUp animate__delay-2s" : "" } >
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </div>
                    )}
                  </TrackVisibility>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

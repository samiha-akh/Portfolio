import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import obj from "../../Assets/Projects/objdec.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obj}
              isBlog={false}
              title="Object Detection and Surrounding Environment Description
              for Visually Impaired People"
              description="Used Tensorflow API module and SSD MobileNet model trained in COCO dataset.
              A Raspberry Pi camera captures real-time video where 
              real-time object detection is done frame by frame with Raspberry Pi 4B microcontroller 
              and gives audio feedback with the help of Google-Text-to-Speech, Pyaudio, and Speech Recognition. 
              It also describes the weather in Ambiance Mode where  the last three convolutional layers of 
              SSDLite MobileNetV2 are trained through transfer learning on a weather dataset."
              ghLink="https://github.com/samiha-akh/Object-Detection-for-Visually-Impaired-People"
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublicationCard from "./PublicationCards";
import Particle from "../Particle";
import obj from "../../Assets/Projects/detect.PNG";


function Publication() {
  return (
    <Container fluid className="publication-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My Recent <strong className="purple">Publication </strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a look at my publication.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="publication-card">
            <PublicationCard
              imgPath={obj}
              isBlog={false}
              title="Deep learning based object detection and surrounding environment description for visually impaired people"
              description="An assistence for the visually impaired people 
              for their day to day lives."
              FaLink="https://www.cell.com/heliyon/fulltext/S2405-8440(23)04131-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2405844023041312%3Fshowall%3Dtrue&fbclid=IwAR0Csmho10Xh2o8ZNCVmfINmI9K0b6FOJ8jP2SaXYL-S0N7ErfAKY0OUxnE"
              
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publication;

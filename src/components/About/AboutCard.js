import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Samiha Akhter </span>
            living in <span className="purple"> Uppsala, Sweden.</span>
            <br />
            I am from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I have completed my BSC in Computer Science and Engineering from North South University. 
            My academic journey has equipped me with a solid foundation in computer science principles, 
            coupled with a deep understanding of the intricacies of machine learning algorithms and applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Card, Col, Button, Row } from 'react-bootstrap';

const Resume = () => {
  return (
    <div className="ResumeTab">
      <Row className="mx-auto my-3" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Col>
          <Card className="my-2 bg-secondary text-white">
            <Card.Body>
              <Card.Text >
                <h2>Frond-End</h2>
                <div className="my-3">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Reaponsive UI</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="my-2 bg-secondary text-white">
            <Card.Body>
              <Card.Text >
                <h2>Back-End</h2>
                <div className="my-3">
                  <ul>
                    <li>MongoDB</li>
                    <li>Node JS</li>
                    <li>Login and JWT's</li>
                    <li>PWA's</li>
                    <li>MySQL with Sequelize</li>
                    <li>GraphQL</li>
                    <li>Express JS</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button href="https://docs.google.com/document/d/1Rz07VMmrQfT96ISxdtbnQ2DtVN8g6eLDc5YPycYSOJU/edit?usp=sharing" variant="dark" className="m-2">My Resume</Button>
    </div>
  );
};
export default Resume;
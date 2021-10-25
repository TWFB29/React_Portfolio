import React from 'react';

import coverPic from '../../assets/images/profilePic.JPG';
import { Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section>
      <Row>
        <Col m={4}>
          <img src={coverPic} alt="This is my profile picture" />
        </Col>
        <Col m={8}>
          <h1>Full Stack Web Developer</h1>
          <p>

          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;

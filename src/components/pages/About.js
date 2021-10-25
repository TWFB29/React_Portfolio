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
            Im a 34 year old full stack developer who is just now finishing up my bootcamp. This is what I intend to do with my life. Web development is very challenging,
            and I've always loved a challenge, challenges always motivate me and push me. These are the main reasons I have choosen this line of work. When I learn new code
            and come across a new hurdle its like doing a puzzle, you have to find out exactly where it fits and why. Ouside of coding I enjoy playing softball and working out.
            Anything that pushes me and makes me smarter and stronger I am always up for the challenge.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default About;

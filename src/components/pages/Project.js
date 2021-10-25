import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Col id={'deckCol'} xs={2} >
      <Card className="my-2 bg-secondary text-dark" >
        <Card.Img variant="top" src={require(`../../assets/images/${props.image}`).default} />
        <Card.Body>
          <Card.Text>
            <p>{props.name}</p>
              <a href={props.deploy} variant="outline-light" className="m-2">Demo</a>
              <a href={props.githubPages} variant="outline-light" className="m-2">Github</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProjectCard;

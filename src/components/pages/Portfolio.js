import React, { useState } from 'react';
import ProjectTemplate from './Project';
import projects from '../../assets/projectData.json'
import { Container, Row } from 'react-bootstrap'

function Portfolio() {
  const [projectList] = useState(projects);

  return (
    <Container className="PortfolioTab">
        <Row>
          <h1>Weekly Assignments</h1>
        </Row>

        {Array.from({ length: 1 }).map((_, idx) => (
          <Row>
            {projectList.map(project => (
              <ProjectTemplate
                name={project.name}
                image={project.image}
                deploy={project.deploy}
                githubPages={project.githubPages}
                
              />
            ))}
          </Row>
        ))}
    </Container>
  );
}

export default Portfolio;

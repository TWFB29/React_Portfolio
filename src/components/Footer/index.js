import React from 'react';
import gitHubLogo from '../../assets/images/4747499_github_icon.png'
import linkedInLogo from '../../assets/images/linkedinLogo.png'
import { Row } from 'react-bootstrap';


function Footer() {

  return (
    <div>

      <Row className="bg-dark py-2" sm={12}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <img href="https://github.com/TWFB29" src={gitHubLogo} style={{ width: "3%" }} alt="Github" />
          <img href="https://www.linkedin.com/in/taylor-black-31540b211/" src={linkedInLogo} style={{ width: "3%" }} alt="LinkedIn" />
        </div>
      </Row>
      
    </div>
  )
}


export default Footer;
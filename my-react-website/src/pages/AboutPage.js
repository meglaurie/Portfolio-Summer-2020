import React from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutPage = () => (
  <React.Fragment>
  <main className="page-body">
      <section>
        <h1 className="page-title"><span className="underline">About Me</span></h1>
        <img className="aboutImg" src={require('../imgs/photo.jpg')} alt="profile of me"/>
        <p>
          Hello World!
        </p>
        <p>
          My name is Megan Laurie and I am a Frontend Developer and UX/UI Designer. I am passionate about designing and building user friendly websites and applications that are both functional and aesthetically pleasing. I am currently looking for my next opportunity/adventure.
        </p>
        <p>
          This portfolio was built using React.js, Node.js, NPM, custom CSS/CSS3, semantic HTML5, and SASS. I have been carefully going through W3C/ARIA/WCAG recommendations to make this site as accessible as possible. This website is currently under construction and I am still working out a few bugs. Thank you for you patience!
        </p>
        <p>
          I have almost 4 years of experience working with:
        </p>
        <div className="grid-container">
          <div className="grid-item-text">
            <h4>Development</h4>
            <ul>
              <li>HTML/HTML5</li>
              <li>CSS/CSS3</li>
              <li>SASS/LESS/PostCSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>Node</li>
              <li>NPM</li>
              <li>W3C/ARIA/WCAG</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="grid-item-text">
            <h4>Design</h4>
            <ul>
              <li>Information architecture</li>
              <li>UI design</li>
              <li>UX testing</li>
              <li>responsive web design</li>
              <li>Sketch</li>
              <li>InVision</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>XD</li>
            </ul>
          </div>
        </div>
        <p>I thrive in roles that allow me to utilize both my design and development skills. I am currently seeking new opportunities in the area of Frontend and UI Development. To see some of my work and the projects that I am currently working on please check out my Github, Codepen, and Dribbble.</p>
      </section>
      <section className="icon-container">
          <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/meglaurie"><FontAwesomeIcon icon={faGithubAlt} /></a>
          <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://codepen.io/mlaur568"><FontAwesomeIcon icon={faCodepen} /></a>
          <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/mlaurie"><FontAwesomeIcon icon={faDribbble} /></a>
          <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-laurie"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="fa-icon about-icon" target="_blank" rel="noopener noreferrer" href="mailto:hello@meganlaurie.ca"><FontAwesomeIcon icon={faEnvelope} /></a>
      </section>
    </main>

  </React.Fragment>

);

export default AboutPage;

import React, { Component } from 'react';
import App from './App.js'

const ExperienceAndSkills = () => {


  return (
    <div>
      <section className='e-s-container'>
        <section className='experience-container'>
          <div className='experience-container-background'></div>
          <p className='experience-title'>EXPERIENCE</p>

          <p className='exp-title'>Turing School of Software Design</p>
          <p className='exp-date'>Denver, CO. 2017 - Present</p>
          <p className='exp-description'>Front End Engineering Program</p>

          <p className='exp-title'>Electrical Estimator | Chatham Electric, Inc.</p>
          <p className='exp-date'>Juneau, AK 2014 - 2017</p>
          <p className='exp-description'>Electrical Estimator and Project Manager</p>

          <p className='exp-title'>Owner/ Artist | Lucas Fine Art, LLC</p>
          <p className='exp-date'>Denver, CO. 2004 - Present</p>
          <p className='exp-description'>Commercial Art Design and Production</p>

          <p className='exp-title'>Owner/ Designer | Deshu Design, Inc</p>
          <p className='exp-date'>Denver, CO. 2000 - 2014</p>
          <p className='exp-description'>Residential and Commercial Design and Build</p>

          <p className='exp-title'>American Institute of Interior Design</p>
          <p className='exp-date'>Scottasdale, AZ. 1998 - 1999</p>
          <p className='exp-description'>Interior Design</p>

        </section>
        <section className='skills-container'>
          <div className='skills-container-background'></div>
          <p className='skills-title'>SKILLS</p>
          <div className='skills1'>
            <p className='skills'>
              JavaScript<br></br>
              JQUERY<br></br>
              CSS<br></br>
              HTML<br></br>
              GitHub<br></br>
              REACT<br></br>
              UI Design<br></br>
              JSON<br></br>
              FlexBox<br></br>
            </p>
          </div>
          <div className='skills2'>
          <p className='skills'>
            Responsive Design<br></br>
            PhotoShop<br></br>
            Illustrator<br></br>
            Sketch<br></br>
            Wireframes<br></br>
            Project Management<br></br>
          </p>
          </div>
        </section>
      </section>
    </div>
  );
}


export default ExperienceAndSkills;

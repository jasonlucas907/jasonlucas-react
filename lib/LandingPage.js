import React, { Component } from 'react';
import App from './App.js'
import MyNameIs from './MyNameIs.js';
import WhoIAm from './WhoIAm.js';
import Work from './Work.js';
import ExperienceAndSkills from './ExperienceAndSkills.js';
import Contact from './Contact.js';

const LandingPage = () => {

  return (
    <div>
    <section className='main-landing-page page'>

      <MyNameIs />
      <WhoIAm />
      <Work />
      <ExperienceAndSkills />
      <Contact />

    </section>
    </div>
  );
}


export default LandingPage;

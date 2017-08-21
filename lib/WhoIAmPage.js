import React, { Component } from 'react';
import App from './App.js'
import ExperienceAndSkills from './ExperienceAndSkills.js';
import WhoIAm from './WhoIAm.js';


export default class WhoIAmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>

        <section className='work-container'>
          <img className='work-image' src='assets/26qanda-superJumbo.jpg'/>
          <div className='work-bottom-border'></div>
          <div className='work-background'></div>

            <div className='work-title-outer-container'>
              <div className='work-title-container'>
                <p className='work-title'>JASON LUCAS</p>
                <p className='recent-projects'>WHO I AM</p>
              </div>
            </div>
        </section>

        

        <WhoIAm />
        <ExperienceAndSkills />

      </div>
    );
  }

}

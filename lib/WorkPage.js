import React, { Component } from 'react';
import GameTime from './GameTime.js';
import Weathrly from './Weathrly.js';
import ExMachina from './ExMachina.js';
import NumberGuesser from './NumberGuesser.js';
import StaticComp3 from './StaticComp3.js';
import DogParty from './DogParty.js';
import StaticComp2 from './StaticComp2.js';
import SwapiBox from './SwapiBox.js';
import HeadCount from './HeadCount.js';
import App from './App.js'

export default class WorkPage extends Component {
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
                  <p className='work-title'>WORK</p>
                  <p className='recent-projects'>RECENT PROJECTS</p>
                </div>
              </div>
          </section>

          <section className='outer-work-menu-container'>
            <section className='work-menu-container'>

              <GameTime />
              <Weathrly />
              <ExMachina />
              <NumberGuesser />
              <StaticComp3 />
              <DogParty />
              <StaticComp2 />
              <SwapiBox />
              <HeadCount />

            </section>
          </section>

      </div>
    );
  }

}

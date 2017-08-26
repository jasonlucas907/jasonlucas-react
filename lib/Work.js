import React, { Component } from 'react';
import GameTime from './GameTime.js';
import Weathrly from './Weathrly.js';
import ExMachina from './ExMachina.js';
import NumberGuesser from './NumberGuesser.js';
import StaticComp3 from './StaticComp3.js';
import DogParty from './DogParty.js';
import StaticComp2 from './StaticComp2.js';
import SwapiBox from './SwapiBox.js';
import App from './App.js'

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  moreWork()  {
    this.props.changePageDisplay('work')
  }

  render() {

    return (
      <div>

      <section className='work-section-container'>
        <div className='work-section-top-border'></div>
        <p className='work-section-title'>RECENT WORK</p>
        <section className='work-section-card-container'>
          <GameTime />
          <Weathrly />
          <ExMachina />
          <NumberGuesser />
          <StaticComp3 />
          <SwapiBox />
        </section>
        <div className='work-section-bottom-border'></div>
      </section>

      </div>
    );
  }

}

import React, { Component } from 'react';
import GameTime from './GameTime.js';
import Weathrly from './Weathrly.js';
import ExMachina from './ExMachina.js';
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
        <p className='work-section-more-work' onClick={this.moreWork.bind(this)}>view more work</p>
        <section className='work-section-card-container'>
          <GameTime />
          <Weathrly />
          <ExMachina />
        </section>
        <div className='work-section-bottom-border'></div>
      </section>

      </div>
    );
  }

}

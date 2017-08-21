import React, { Component } from 'react';
import App from './App.js'

export default class Contact extends Component {
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
                  <p className='work-title'>CONTACT</p>
                  <p className='recent-projects'>SAY HELLO</p>
                </div>
              </div>
          </section>

      </div>
    );
  }

}

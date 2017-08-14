import React, { Component } from 'react';
import App from './App.js'

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
            <p className='scroll'>SCROLL</p>
            <div className='scroll-line'></div>
            <img className='work-image' src='assets/profile-placeholder.jpg'/>
            <div className='work-bottom-border'></div>
            <div className='work-background'></div>

              <div className='work-title-outer-container'>
                <div className='work-title-container'>
                  <p className='work-title'>WHO I AM</p>
                  <p className='recent-projects'>JASON LUCAS</p>
                </div>
              </div>
          </section>


      </div>
    );
  }

}

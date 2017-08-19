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

        <div className='who-i-am-page-spacer'></div>
        <div className='who-i-am-page-container-title-container'>
          <p className='who-i-am-page-title'>WHO I AM</p>
        </div>
        <section className='inner-who-i-am-page-container'>
          <div className='who-i-am-page-image-container'>
            <div className='who-i-am-page-upper-container'>
              <img src='assets/profile-placeholder.jpg' className='who-i-am-page-profile-image'/>
            </div>
            <div className='who-i-am-page-lower-container'>
              <div className='who-i-am-page-lower-container-background'></div>
              <p className='who-i-am-page-name'>JASON LUCAS</p>
                <p className='who-i-am-page-outline'>hello my name is jason lucas blah bla bla bla bla bla bla bla bla bla bla</p>
            </div>
          </div>
          <section className='who-i-am-page-skills-container'>
            <p className='who-i-am-page-skills-aquired'>AQUIRED SKILLS</p>
            <div className='who-i-am-page-skills-container-background'></div>
            <section className='who-i-am-page-bar-graph-sec'>
              <section className='who-i-am-page-bar-graph-container'>
                <section className='who-i-am-page-bar-graph-numbers'>
                  <p className='who-i-am-page-graph-numbers1 count bar-counter'>100</p>
                  <p className='who-i-am-page-graph-numbers count bar-counter'>75</p>
                  <p className='who-i-am-page-graph-numbers count bar-counter'>50</p>
                  <p className='who-i-am-page-graph-numbers count bar-counter'>25</p>
                  <p className='who-i-am-page-graph-numbers count bar-counter'>0</p>
                </section>
                <section className='who-i-am-page-bargraph-chart-container'>
                  <section className='who-i-am-page-bars-container'>
                    <div className='who-i-am-page-bar-base bb1'>
                      <p className='who-i-am-page-bar-graph-labels'>HTML</p>
                      <div className='who-i-am-page-bar-color bbc1 bc1'></div>
                    </div>
                    <div className='who-i-am-page-bar-base'>
                      <p className='who-i-am-page-bar-graph-labels'>CSS</p>
                      <div className='who-i-am-page-bar-color bbc2 bc2'></div>
                    </div>
                    <div className='who-i-am-page-bar-base'>
                      <p className='who-i-am-page-bar-graph-labels'>JAVA SCRIPT</p>
                      <div className='who-i-am-page-bar-color bbc3 bc3'></div>
                    </div>
                    <div className='who-i-am-page-bar-base'>
                      <p className='who-i-am-page-bar-graph-labels'>REACT</p>
                      <div className='who-i-am-page-bar-color bbc4 bc4'></div>
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </div>
    );
  }

}

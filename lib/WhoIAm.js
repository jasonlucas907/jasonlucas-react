import React, { Component } from 'react';
import App from './App.js'

export default class WhoIAm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        <div className='who-i-am-container-title-container'>
          <p className='who-i-am-title'>WHO I AM</p>
        </div>
        <section className='inner-who-i-am-container'>
          <div className='who-i-am-image-container'>
            <div className='who-i-am-upper-container'>
              <img src='assets/profile-placeholder.jpg' className='profile-image'/>
            </div>
            <div className='who-i-am-lower-container'>
              <div className='who-i-am-lower-container-background'></div>
              <p className='who-i-am-name'>JASON LUCAS</p>
              <p className='who-i-am-outline'>I am a creative and hard working developer with a passion for learning and design.  I have a solid foundation HTML, CSS, JavsScript and REACT.
                <br></br>
                <br></br>
                I am looking for a team that values ambition, creativity, communication and a good work environment.
                <br></br>
                <br></br>
                With a background in Design and Project Management I bring strong organizational creative skills.  I am comfortable and adept at organizing and maintaining projects.  I am experienced at communicating with clients and responding to their needs. 
              </p>
            </div>
          </div>
          <section className='who-i-am-skills-container'>
            <p className='skills-aquired'>AQUIRED SKILLS</p>
            <div className='who-i-am-skills-container-background'></div>
            <section className='bar-graph-sec'>
              <section className='bar-graph-container'>
                <section className='bar-graph-numbers'>
                  <p className='graph-numbers1 count bar-counter'>100</p>
                  <p className='graph-numbers count bar-counter'>75</p>
                  <p className='graph-numbers count bar-counter'>50</p>
                  <p className='graph-numbers count bar-counter'>25</p>
                  <p className='graph-numbers count bar-counter'>0</p>
                </section>
                <section className='bargraph-chart-container'>
                  <section className='bars-container'>
                    <div className='bar-base bb1'>
                      <p className='bar-graph-labels'>HTML</p>
                      <div className='bar-color bbc1 bc1'></div>
                    </div>
                    <div className='bar-base'>
                      <p className='bar-graph-labels'>CSS</p>
                      <div className='bar-color bbc2 bc2'></div>
                    </div>
                    <div className='bar-base'>
                      <p className='bar-graph-labels'>JAVA SCRIPT</p>
                      <div className='bar-color bbc3 bc3'></div>
                    </div>
                    <div className='bar-base'>
                      <p className='bar-graph-labels'>REACT</p>
                      <div className='bar-color bbc4 bc4'></div>
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

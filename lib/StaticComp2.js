import React, { Component } from 'react';
import App from './App.js'

export default class StaticComp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StaticComp2Image: 'work-image-container',
      StaticComp2Video: 'work-video-container hide',
      StaticComp2Links: 'work-box-links-container hide',
      StaticComp2box: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      StaticComp2Image: 'work-image-container hide',
      StaticComp2Video: 'work-video-container',
      StaticComp2Links: 'work-box-links-container',
      StaticComp2box: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      StaticComp2Image: 'work-image-container',
      StaticComp2Video: 'work-video-container hide',
      StaticComp2Links: 'work-box-links-container hide',
      StaticComp2box: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/bruces-noodles-comp1-1705/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/bruces-noodles-comp1-1705');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/m1-static-comp-2.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.StaticComp2box } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.StaticComp2Video }>
            <video poster='assets/static-comp-2.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/static-comp-2.mp4' type='video/webm'></source>
              <source src='assets/static-comp-2.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.StaticComp2Links }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.StaticComp2Image }>
            <img className='work-box-image' src='assets/static-comp-2.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>STATIC COMP 2</p>
            <p className='work-box-description'>CSS ANIMATIONS</p>
          </section>
        </section>

      </div>
    );
  }

}

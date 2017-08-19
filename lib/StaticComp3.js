import React, { Component } from 'react';
import App from './App.js'

export default class StaticComp3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StaticComp3Image: 'work-image-container',
      StaticComp3Video: 'work-video-container hide',
      StaticComp3Links: 'work-box-links-container hide',
      StaticComp3box: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      StaticComp3Image: 'work-image-container hide',
      StaticComp3Video: 'work-video-container',
      StaticComp3Links: 'work-box-links-container',
      StaticComp3box: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      StaticComp3Image: 'work-image-container',
      StaticComp3Video: 'work-video-container hide',
      StaticComp3Links: 'work-box-links-container hide',
      StaticComp3box: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/comp-3-1705/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/comp-3-1705');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/m1-static-comp-3.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.StaticComp3box } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.StaticComp3Video }>
            <video poster='assets/static-comp-3.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/static-comp-3.mp4' type='video/webm'></source>
              <source src='assets/static-comp-3.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.StaticComp3Links }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.StaticComp3Image }>
            <img className='work-box-image' src='assets/static-comp-3.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>STATIC COMP 3</p>
            <p className='work-box-description'>CSS</p>
          </section>
        </section>

      </div>
    );
  }

}

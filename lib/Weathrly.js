import React, { Component } from 'react';
import App from './App.js'

export default class Weathrly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathrlyImage: 'work-image-container',
      weathrlyVideo: 'work-video-container hide',
      weathrlyLinks: 'work-box-links-container hide',
      weathrlybox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      weathrlyImage: 'work-image-container hide',
      weathrlyVideo: 'work-video-container',
      weathrlyLinks: 'work-box-links-container',
      weathrlybox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      weathrlyImage: 'work-image-container',
      weathrlyVideo: 'work-video-container hide',
      weathrlyLinks: 'work-box-links-container hide',
      weathrlybox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/game-time/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/game-time');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/weathrly.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.weathrlybox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.weathrlyVideo }>
            <video poster='assets/weathrly.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/weathrly.mp4' type='video/webm'></source>
              <source src='assets/weathrly.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.weathrlyLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.weathrlyImage }>
            <img className='work-box-image' src='assets/weathrly-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>WEATHRLY</p>
            <p className='work-box-description'>REACT</p>
          </section>
        </section>

      </div>
    );
  }

}

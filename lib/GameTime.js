import React, { Component } from 'react';
import App from './App.js'

export default class GameTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTimeImage: 'work-image-container',
      gameTimeVideo: 'work-video-container hide',
      gameTimeLinks: 'work-box-links-container hide',
      gameTimebox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      gameTimeImage: 'work-image-container hide',
      gameTimeVideo: 'work-video-container',
      gameTimeLinks: 'work-box-links-container',
      gameTimebox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      gameTimeImage: 'work-image-container',
      gameTimeVideo: 'work-video-container hide',
      gameTimeLinks: 'work-box-links-container hide',
      gameTimebox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/game-time/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/game-time');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/game-time.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.gameTimebox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.gameTimeVideo }>
            <video poster='assets/game-time.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/game-time.mp4' type='video/webm'></source>
              <source src='assets/game-time.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.gameTimeLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.gameTimeImage }>
            <img className='work-box-image' src='assets/game-time-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>GAME TIME</p>
            <p className='work-box-description'>HTML CANVAS</p>
          </section>
        </section>

      </div>
    );
  }

}

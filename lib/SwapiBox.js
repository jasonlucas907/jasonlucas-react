import React, { Component } from 'react';
import App from './App.js'

export default class SwapiBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SwapiBoxImage: 'work-image-container',
      SwapiBoxVideo: 'work-video-container hide',
      SwapiBoxLinks: 'work-box-links-container hide',
      SwapiBoxbox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      SwapiBoxImage: 'work-image-container hide',
      SwapiBoxVideo: 'work-video-container',
      SwapiBoxLinks: 'work-box-links-container',
      SwapiBoxbox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      SwapiBoxImage: 'work-image-container',
      SwapiBoxVideo: 'work-video-container hide',
      SwapiBoxLinks: 'work-box-links-container hide',
      SwapiBoxbox: 'work-box-container'
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

        <section className={ this.state.SwapiBoxbox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.SwapiBoxVideo }>
            <video poster='assets/swapi-box.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/swapi-box.mp4' type='video/webm'></source>
              <source src='assets/swapi-box.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.SwapiBoxLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.SwapiBoxImage }>
            <img className='work-box-image' src='assets/swapi-box-image.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>SWAPI BOX</p>
            <p className='work-box-description'>REACT API</p>
          </section>
        </section>

      </div>
    );
  }

}

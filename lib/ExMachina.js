import React, { Component } from 'react';
import App from './App.js'

export default class ExMachina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ExMachinaImage: 'work-image-container',
      ExMachinaVideo: 'work-video-container hide',
      ExMachinaLinks: 'work-box-links-container hide',
      ExMachinabox: 'work-box-container'
    };
  }

  selectWork()  {
    this.setState({
      ExMachinaImage: 'work-image-container hide',
      ExMachinaVideo: 'work-video-container',
      ExMachinaLinks: 'work-box-links-container',
      ExMachinabox: 'work-box-container scale'
    });
  }

  unSelectWork()  {
    this.setState({
      ExMachinaImage: 'work-image-container',
      ExMachinaVideo: 'work-video-container hide',
      ExMachinaLinks: 'work-box-links-container hide',
      ExMachinabox: 'work-box-container'
    })
  }

  siteLink() {
    window.open('https://jasonlucas907.github.io/colorado-ex-machina-comp2-1705/');
  }

  gitHubLink() {
    window.open('https://github.com/jasonlucas907/colorado-ex-machina-comp2-1705');
  }

  compLink() {
    window.open('http://frontend.turing.io/projects/m1-static-comp-2.html');
  }

  render() {



    return (
      <div>

        <section className={ this.state.ExMachinabox } onMouseEnter={this.selectWork.bind(this)}
                onMouseLeave={this.unSelectWork.bind(this)}>
          <section className={ this.state.ExMachinaVideo }>
            <video poster='assets/exmachina.mp4' className='work-video'  playsInline autoPlay muted loop>
              <source src='assets/exmachina.mp4' type='video/webm'></source>
              <source src='assets/exmachina.mp4' type='video/mp4'></source>
            </video>
          </section>

          <section className={ this.state.ExMachinaLinks }>
            <div className='work-box-links-background'></div>
            <p className='work-box-site work-link' onClick={() => this.siteLink(this)}>SITE</p>
            <p className='work-box-github work-link' onClick={() => this.gitHubLink(this)}>GITHUB</p>
            <p className='work-box-comp work-link' onClick={() => this.compLink(this)}>ORIGINAL COMP</p>
          </section>

          <section className={ this.state.ExMachinaImage }>
            <img className='work-box-image' src='assets/exmachina.jpg'/>
            <div className='work-box-title-background'></div>
            <p className='work-box-title'>ExMachina</p>
            <p className='work-box-description'>CSS COMP</p>
          </section>
        </section>

      </div>
    );
  }

}

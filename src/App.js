import React, { Component } from 'react';
import Projects from './Projects' ;
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'


class App extends Component {
    state = {displayBio : false};
    // constructor() {
    //     super();
    //     this.state = {displayBio: false};

    //     console.log('Component this', this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    // readMore() {
    //     console.log('readMore this', this);
    //     this.setState({displayBio : true});
    // }
    // showLess() {
    //     this.setState({displayBio: false});
    // }

    toggleDisplayBio() {
        this.setState({displayBio : !this.state.displayBio});
    }



  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Fangwei Lin.</p>
        <p>I developed this Portfilio using React to show my profile and projects </p>
        
        {
            this.state.displayBio ? (
        <div>
            <p>I live in Los Angeles, and code every day.</p>
            <p>My favorite language are Java and JavaScript, and I think React.js is awesome.</p>
            <p>Besides coding, I also love music and ramen!</p>
            <button onClick = {this.toggleDisplayBio}>Show less</button>
        </div>
      ): (
          <div>
              <button onClick = {this.toggleDisplayBio}>Read more </button>
              </div>
      )
      }
      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
    </div>
    )
  }

}
export default App;
import React, { Component } from "react";
import Projects from './ProjectsComponent';
import SocialProfiles from "./SocialProfileComponent";
import profilePic from './assets/ProfilePic.jpg';

class App extends Component {
  state = {displayBio: false};
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
         <h1><strong>&lt;h1&gt;Hello World!&lt;/h1&gt;</strong></h1>
        <img src={profilePic} alt="Profile picture" className="profile"/>
        <p>My name is Robin. I am Fullstack JavaScript Software Developer.</p>
        <p>I enjoy working on meaningful projects</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Reno, NV</p>
            <p>I find great satisfaction in resolving bugs</p>
            <p>
              Besides coding, I am a soccer enthusiast. I enjoy going to local cafes to code, drink coffee, and discuss changing the world.  I also meditate frequently.
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>onClick</button>
          </div>
        )}
        <hr/>
        <Projects />
        <hr/>
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

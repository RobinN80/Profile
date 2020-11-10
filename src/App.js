import React, { Component } from "react";
import Projects from './ProjectsComponent';
import SocialProfiles from "./SocialProfileComponent";

class App extends Component {
  state = {displayBio: false};
  // constructor(props) {
  //   super(props);
  //   this.state = { displayBio: false };

  //   console.log("component this", this);

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Robin. I am an aspiring software engineer.</p>
        <p>I enjoy working on meaningful projects</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Reno, NV</p>
            <p>I am digging JavaScript</p>
            <p>
              Besides coding, I am also a soccer enthusiast and enjoy coffee
              time with my friends!
            </p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
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

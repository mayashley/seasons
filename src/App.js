import React, { Component } from "react";
import SeasonDisplay from "./Components/SeasonDisplay";
import Loader from "./Components/Loader";

class App extends Component {
  // constructor function, initalizing state
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  // this is another way to initalize state without constructor
  // state = {lat: null, errorMessage: ""};

  // getting location api and api location and error message
  componentDidMount() {
    // MDN geolocation api-current location
    navigator.geolocation.getCurrentPosition(
      // success callback that gets called when it goes right
      (position) => {
        // got this info from the console for gelocation info with a console.log
        // and we called setState here to do it
        this.setState({ lat: position.coords.latitude });
      },
      // failure callback when it cant get location
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // this is conditional rendering and you need to use it often
    // if our error mesage  and no latitude
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader message='please enable your location' />;
  }
}

export default App;

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    // MDN geolocation api-current location
    navigator.geolocation.getCurrentPosition(
      // success callback that gets called when it goes right
      (position) => {
        // got this info from the console for gelocation info with a console.log
        // and we called setState here to do it
        this.setState({lat: position.coords.latitude });
      },
      // failure callback when it cant get location
      (err) => {
        alert("please refresh page and allow location");
      }
    );
  }

  render() {
    // reference the state below for the latitude
    return <div>Latitude: {this.state.lat}</div>;
  }
}

export default App;

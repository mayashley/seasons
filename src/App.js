import React, { Component } from "react";

class App extends Component {
  render() {
    // MDN geolocation api-current location
    navigator.geolocation.getCurrentPosition(
      // success callback that gets called when it goes right
      (position) => console.log(position),
      // failure callback when it cant get location
      (err) => console.log(err)
    );
    return <div>Latitude:</div>;
  }
}

export default App;

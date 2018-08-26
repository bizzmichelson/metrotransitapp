import React, { Component } from 'react';
import axios from 'axios';

class Departures extends Component {
  state = {
    departures: []
  };

  async componentDidMount() {
    const { stopId } = this.props;
    console.log(this.props);
    const { data } = await axios(
      `https://svc.metrotransit.org/NexTrip/${stopId}`
    );
    console.log(data);
  }

  render() {
    return <div>Hello</div>;
  }
}

export default Departures;

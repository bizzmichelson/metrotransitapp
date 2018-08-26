myApp.controller('StopsController', function(dataService) {
  var vm = this;
  var Stops = [];

  console.log(dataService);

  console.log('in stops controller');

  dataService.getStops().then(function(response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.Stops = response.data;
    // return vm.resObj;
  });
});


import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Stops extends Component {
  state = {
    stops: []
  };
  async componentDidMount() {
    const { direction, route } = this.props;
    console.log(
      `https://svc.metrotransit.org/NexTrip/Stops/${route}/${direction}`
    );
    const { data } = await axios(
      `https://svc.metrotransit.org/NexTrip/Stops/${route}/${direction}`
    );
    this.setState({ stops: data });
    console.log(data);
  }
  render() {
    return this.state.stops.map(({ Text, Value }) => (
      <div key={Value}>
        <Link to={`/departures/${Value}`}>{Text}</Link>
      </div>
    ));
  }
}

export default Stops;

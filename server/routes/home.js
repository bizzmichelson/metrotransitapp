import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

class Home extends Component {
  state = {
    routes: []
  };

  async componentDidMount() {
    const { data } = await axios('https://svc.metrotransit.org/NexTrip/Routes');
    this.setState({ routes: data });
  }
  render() {
    return this.state.routes.map(({ ProviderID, Route, Description }) => (
      <div key={ProviderID}>
        <Link to={`/directions/${Route}`}>{Description}</Link>
      </div>
    ));
  }
}

export default Home;

myApp.controller('ChartController', function (dataService) {
  var vm = this;
  var resObj = [];

  console.log(dataService);

  console.log('in chart controller');

  dataService.getEvents().then(function (response) {
    console.log(response.data);
    // console.log("res.Obj", resObj);
    vm.resObj = response.data;
    // return vm.resObj;
    console.log('vm.resObj', vm.resObj);
    drawLineChart(vm.resObj);
    console.log('vm.resObj', vm.resObj);
  });

  var drawLineChart = function (newObj) {
    var ctx = document.getElementById('myChart');
    console.log("ctx", ctx);

    var Labels = newObj.map(function (object) {
      return [object.description, object.date];

    });    
  });
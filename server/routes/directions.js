import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Directions extends React.Component {
  state = {
    directions: []
  };
  async componentDidMount() {
    const { route } = this.props;
    const { data } = await axios(
      `https://svc.metrotransit.org/NexTrip/Directions/${route}`
    );
    this.setState({ directions: data });
  }

  render() {
    const { route } = this.props;
    console.log(this.state.directions);
    return this.state.directions.map(({ Text, Value }) => (
      <div key={Text}>
        <Link to={`/stops/${route}/${Value}`}>{Text}</Link>
      </div>
    ));
  }
}

export default Directions;

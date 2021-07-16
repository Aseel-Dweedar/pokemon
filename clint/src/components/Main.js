import React, { Component } from "react";
import axios from "axios";
import OneApiData from "./OneApiData";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portUrl: `${process.env.REACT_APP_SERVER_URL}/pokemon`,
      apiData: [],
      showApiData: false,
    };
  }

  componentDidMount = () => {
    axios.get(this.state.portUrl).then((axiosRes) => {
      this.setState({
        apiData: axiosRes.data,
        showApiData: true,
      });
    });
  };

  addToFavorite = (value) => {
    axios.post(`${this.state.portUrl}/crud`, value);
  };

  render() {
    return (
      <div>
        {this.state.showApiData && <OneApiData apiData={this.state.apiData} addToFavorite={this.addToFavorite} />}
      </div>
    );
  }
}

export default Main;

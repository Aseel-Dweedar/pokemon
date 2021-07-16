import React, { Component } from "react";
import axios from "axios";
import OneFavData from "./OneFavData";
import UpdateForm from "./UpdateForm";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portUrl: `${process.env.REACT_APP_SERVER_URL}/pokemon/crud`,
      favData: [],
      showFavData: false,
      showUpdateForm: false,
      id: 0,
      name: "",
      url: "",
    };
  }

  componentDidMount = () => {
    axios.get(this.state.portUrl).then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
      });
    });
  };

  deleteFavorite = async (id) => {
    await axios.delete(`${this.state.portUrl}/${id}`);
    axios.get(this.state.portUrl).then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
        showUpdateForm: false,
      });
    });
  };

  setShowUpdateForm = (id) => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
      id: id,
    });
  };

  setName = (e) => this.setState({ name: e.target.value });
  setUrl = (e) => this.setState({ url: e.target.value });

  updateData = async (e) => {
    e.preventDefault();
    await axios.put(`${this.state.portUrl}/${this.state.id}`, { name: this.state.name, url: this.state.url });
    axios.get(this.state.portUrl).then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
      });
    });
  };
  render() {
    return (
      <>
        {this.state.showUpdateForm && (
          <UpdateForm setName={this.setName} setUrl={this.setUrl} updateData={this.updateData} />
        )}
        {this.state.showFavData && (
          <OneFavData
            favData={this.state.favData}
            deleteFavorite={this.deleteFavorite}
            setShowUpdateForm={this.setShowUpdateForm}
          />
        )}
      </>
    );
  }
}

export default Main;

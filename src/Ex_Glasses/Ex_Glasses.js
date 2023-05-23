import React, { Component } from "react";
import Header from "./Header";
import ListGlass from "./ListGlass";
import Modal from "./Modal";
import { glassArr } from "./data";

export default class Ex_Glasses extends Component {
  state = {
    glassArr,
    detail: glassArr[0],
  };
  handleChangeGlass = (glasses) => {
    this.setState({
      detail: glasses,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Modal selectedGlasses={this.state.detail} />
        <ListGlass
          handleChange={this.handleChangeGlass}
          glassArr={this.state.glassArr}
        />
      </div>
    );
  }
}

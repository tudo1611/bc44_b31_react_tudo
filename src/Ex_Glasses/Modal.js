import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img className="model__1" src="./img/model.jpg" alt="" />
              <img className="glass1" src="./img/v1.png" alt="" />
            </div>
            <div className="col-6">
              <img className="model__2" src="./img/model.jpg" alt="" />
              <img
                className="glass2"
                src={this.props.selectedGlasses.url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

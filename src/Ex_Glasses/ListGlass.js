import React, { Component } from "react";
import ItemGlass from "./ItemGlass";

export default class ListGlass extends Component {
  renderListGlass = () => {
    return this.props.glassArr.map((item) => {
      return (
        <ItemGlass
          handleChangeModel={this.props.handleChange}
          key={item.id}
          data={item}
        />
      );
    });
  };
  render() {
    return (
      <div
        className="row listPrd"
        style={{
          background: "rgba(0,0,0,0.3)",
          width: "700px",
          padding: "15px",
        }}
      >
        {this.renderListGlass()}
      </div>
    );
  }
}

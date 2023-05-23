import React, { Component } from "react";

export default class ItemGlass extends Component {
  render() {
    let { data, handleChangeModel } = this.props;
    let { url } = data;
    return (
      <div className="col-2">
        <button
          onClick={() => {
            handleChangeModel(data);
          }}
          className="card my-2 mx-auto"
          style={{ width: "100%" }}
        >
          <img className="card-img-top" src={url} alt="" />
        </button>
      </div>
    );
  }
}

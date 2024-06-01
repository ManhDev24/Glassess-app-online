import React, { Component } from "react";

export default class ListGlassess extends Component {
  renderGlasses = () => {
    let { glassData } = this.props;
    console.log(glassData);
    return glassData.map((item) => {
      return (
        <div className="col-md-3 mb-4 mt-1">
          <img
            src={item.url}
            alt=""
            style={{ width: "50%", border: "1px solid blue" ,cursor:"pointer"}}
            onClick={() => {
              this.props.handleChangeGlass(item);
            }}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="listglassess"
          style={{
            backgroundColor: "white",
            height: "250px",
            border: "1px solid black",
          }}
        >
          <div className="row text-center">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}

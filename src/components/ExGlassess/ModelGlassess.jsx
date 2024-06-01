import React, { Component } from "react";

export default class ModelGlassess extends Component {
  render() {
    let { glassState } = this.props;
    return (
      <div>
        <div
          className="modelglass d-flex justify-content-around mb-3 "
          style={{ paddingTop: "12vh", paddingLeft: "60px" }}
        >
          <div
            className="card"
            style={{ width: "18rem", height: "400px", position: "relative" }}
          >
            <img
              src="./glassesImage/model.jpg"
              className="card-img-top"
              alt="..."
              height={400}
            />
            <img
              src={glassState.url}
              alt=""
              style={{
                width: "60%",
                position: "absolute",
                top: "100px",
                left: "57px",
              }}
            />
            <div
              className="card-body py-2"
              style={{
                position: "absolute",
                bottom: "0",
                backgroundColor: "rgba(251, 192, 147, 0.5)",
              }}
            >
              <p className="card-text">
                <h3>{glassState.name}</h3>
                <p>{glassState.desc}</p>
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", height: "400px" }}>
            <img
              src="./glassesImage/model.jpg"
              className="card-img-top"
              alt="..."
              height={400}
            />
          </div>
        </div>
      </div>
    );
  }
}

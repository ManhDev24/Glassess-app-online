import React, { Component } from "react";

export default class HeaderGlassess extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "10vh",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h2 className="text-white text-center my-4">TRY GLASSESS ONLINE </h2>
      </div>
    );
  }
}

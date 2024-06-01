import React, { Component } from "react";
import ModelGlassess from "./ModelGlassess";
import ListGlassess from "./ListGlassess";

export default class BodyGlassess extends Component {
  render() {
    const { glassData, handleChangeGlass, glassState } = this.props;
    return (
      <div className="container">
        <ModelGlassess glassState={glassState} />
        <ListGlassess
          glassData={glassData}
          handleChangeGlass={handleChangeGlass}
        />
      </div>
    );
  }
}

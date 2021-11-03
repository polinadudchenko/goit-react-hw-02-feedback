import React, { Component } from "react";
import PropTypes from "prop-types";
import { generate } from "shortid";
import s from "./Statistics.module.css";

class Statistics extends Component {
  static propTypes = {};

  render() {
    const { stats, values } = this.props;

    return (
      <div className="statistics">
        <h2 className="statistics__title">Statistics</h2>
        {stats.map((stat) => (
          <p key={generate()}>
            {stat}: {values[stat]}
          </p>
        ))}
      </div>
    );
  }
}

export default Statistics;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { generate } from "shortid";
import s from "./Statistics.module.css";

class Statistics extends Component {
  static defaultProps = {
    onCountPositive: () => 0,
  };

  static propTypes = {
    stats: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.object.isRequired,
    onCountPositive: PropTypes.func.isRequired,
    onCountTotal: PropTypes.func.isRequired,
  };

  render() {
    const { stats, values, onCountTotal, onCountPositive } = this.props;

    return (
      <div className={s.statistics}>
        <h2 className={s.statistics__title}>Statistics</h2>
        <ul className={s.statistics__list}>
          {stats.map((stat) => (
            <li key={generate()} className={s.statistics__item}>
              {stat}: {values[stat]}
            </li>
          ))}
          <li key={generate()} className={s.statistics__item}>
            Total: {onCountTotal()}
          </li>
          <li key={generate()} className={s.statistics__item}>
            Positive Feedback: {onCountPositive()}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;

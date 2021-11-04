import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import s from './FeedbackOptions.module.css';

class Buttons extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const { options, onIncrement } = this.props;
    return (
      <div className={s.options}>
        {options.map(option => (
          <button
            key={generate()}
            onClick={onIncrement}
            className={s.options__button}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;

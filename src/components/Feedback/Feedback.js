import React, { Component } from "react";
import s from "./Feedback.module.css";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statictics";

class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const option = e.currentTarget.textContent;
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    return (
      <div className="feedback">
        <h1 className="feedback__title">Please leave your feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onIncrement={this.handleIncrement}
        />
        <Statistics stats={Object.keys(this.state)} values={this.state} />
      </div>
    );
  }
}

export default Feedback;

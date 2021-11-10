import React, { Component } from 'react';
import s from './Feedback.module.css';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statictics';
import Section from '../Section';
import Notification from '../Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class Feedback extends Component {
  state = { ...INITIAL_STATE };

  handleIncrement = e => {
    const option = e.currentTarget.textContent;
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, option) => acc + this.state[option],
      0,
    );
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();

    return totalFeedback
      ? Math.floor((this.state['good'] * 100) / totalFeedback)
      : 0;
  };

  render() {
    return (
      <div className={s.feedback}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onIncrement={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              stats={Object.keys(this.state)}
              values={this.state}
              onCountTotal={this.countTotalFeedback}
              onCountPositive={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

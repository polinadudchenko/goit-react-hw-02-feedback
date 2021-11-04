import React, { Component } from 'react';
import s from './Feedback.module.css';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statictics';
import Section from '../Section';
import Notification from '../Notification';

class Feedback extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const option = e.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
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
        <h1 className={s.feedback__title}>Feedback</h1>
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

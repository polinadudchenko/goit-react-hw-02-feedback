import PropTypes from 'prop-types';
import { generate } from 'shortid';
import s from './FeedbackOptions.module.css';

export default function Buttons({ options, onIncrement }) {
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

Buttons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

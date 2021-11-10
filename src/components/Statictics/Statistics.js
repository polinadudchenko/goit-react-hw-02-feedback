import PropTypes from 'prop-types';
import { generate } from 'shortid';
import s from './Statistics.module.css';

export default function Statistics({
  stats,
  values,
  onCountTotal,
  onCountPositive,
}) {
  return (
    <div className={s.statistics}>
      <ul className={s.statistics__list}>
        {stats.map(stat => (
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

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.object.isRequired,
  onCountPositive: PropTypes.func.isRequired,
  onCountTotal: PropTypes.func.isRequired,
};

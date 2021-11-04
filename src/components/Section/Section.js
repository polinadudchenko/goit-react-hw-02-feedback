import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.section__title}>{title}</h2>
      {children}
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

import s from './App.module.css';
import Feedback from './components/Feedback';

export default function App() {
  return (
    <div className={s.App}>
      <h1 className={s.App__title}>Feedback</h1>
      <Feedback />
    </div>
  );
}

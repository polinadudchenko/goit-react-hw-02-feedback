import { Component } from 'react';
import s from './App.module.css';
import Feedback from './components/Feedback';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <h1 className={s.App__title}>Feedback</h1>
        <Feedback />
      </div>
    );
  }
}

export default App;

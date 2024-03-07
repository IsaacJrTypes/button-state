import logo from './logo.svg';
import './App.css';
import { Counter, CounterDelay, CounterIncrementTwice, CounterIncrementTwoCorrect } from './components/Counter';


function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterDelay/>
      <CounterIncrementTwice/>
      <CounterIncrementTwoCorrect/>
    </div>
  );
}

export default App;

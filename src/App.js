import './App.css';
import TestState from './components/TestState'
function App(prop) {
  console.log(prop)
  return (
    <div className="App">
      <TestState></TestState>
    </div>
  );
}

export default App;

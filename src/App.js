import TodoList from './components/TodoList'
import TodoHook from "./components/TodoHook"
function App(prop) {
  console.log(prop)
  return (
    <div className="App">
      <TodoList holder="hello"></TodoList>
      <TodoHook></TodoHook>
    </div>
  );
}

export default App;

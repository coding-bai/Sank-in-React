import TodoList from './components/TodoList'
function App(prop) {
  console.log(prop)
  return (
    <div className="App">
      <TodoList holder="hello"></TodoList>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "Study React",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Do laundry",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Practice singing",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const id = useRef(0);
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: id.current++, todo }]);
    setTodo("");
  };
  const handleDeleteTodo = (id) => {
    try {
      const todoListCopy = todoList.filter(({ id: todoID }) => todoID !== id);
      setTodoList(todoListCopy);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=> {
    console.log("useEffect")
    return () => {
        console.log("cleanup")
    }
  }, [todoList])
  useEffect(()=> {
    console.log("useEffect2")
    return () => {
        console.log("cleanup2")
    }
  }, [todoList])
  return (
    <div className="">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <ul>
        {todoList.map(({ todo: todoItem, id }, index) => {
          return (
            <li key={index}>
              <h1>{todoItem}</h1>
              <button onClick={() => handleDeleteTodo(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelet = (deleted) =>
    setTodos(todos.filter(t => t.id !== deleted.id));
  const filteredList = getFilteredList(todos, filter);

  function getFilteredList(todos, filter) {
    if (filter === 'all') return todos;
    return todos.filter(todo => todo.status === filter);
  }

  return (
    <>
      <section>
        <ul>
          {filteredList.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelet={handleDelet}
            />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}

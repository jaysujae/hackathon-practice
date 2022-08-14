import React, { useState, useEffect } from 'react';
import axios from '../..//axios';

import TodoItem from './Item';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos').then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <section id="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default Todo;

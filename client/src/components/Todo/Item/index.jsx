import React, { useCallback, useState } from 'react';

const TodoItem = ({ todo }) => {
  const [done, setDone] = useState(todo.done || false);

  const handleChange = useCallback((event) => {
    setDone(event.currentTarget.checked);

    // TODO: POST /api/todo
  }, []);

  return (
    <li>
      {todo.title}{' '}
      <input type="checkbox" checked={done} onChange={handleChange} />
    </li>
  );
};

export default TodoItem;

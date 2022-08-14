import React, { useCallback, useState } from 'react';

import { Checkbox, List } from 'antd';

const TodoItem = ({ todo }) => {
  const [done, setDone] = useState(todo.done || false);

  const handleChange = useCallback((event) => {
    const { checked } = event.target;

    setDone(checked);

    // TODO: POST /api/todo
  }, []);

  return (
    <List.Item>
      <Checkbox checked={done} onChange={handleChange}>
        {todo.title}
      </Checkbox>
    </List.Item>
  );
};

export default TodoItem;

import React, { useState, useEffect } from 'react';

import { Layout, Space, List } from 'antd';

import axios from '../../axios';

import TodoItem from './Item';

import './styles.css'


const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos').then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <section id="todo-list" className="todo-wrapper">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(todo) => <TodoItem todo={todo} />}
        />
      </Space>
    </section>
  );
};

export default Todo;

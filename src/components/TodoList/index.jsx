import React from 'react';
import { List } from 'antd';
import { useRecoilState } from 'recoil';

// components
import Item from './Item';

// atoms
import { todoListState } from '@atoms/todo/todoList';

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <List
      size="small"
      header={<div>TodoList</div>}
      bordered
      dataSource={todoList}
      renderItem={item => <Item item={item} />} />
  );
};

export default TodoList;

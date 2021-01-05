import React from 'react';
import { List } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';

// components
import Item from './Item';

// atoms
import { filteredTodoListState } from '@recoil/todo';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

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

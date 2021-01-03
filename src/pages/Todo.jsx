import React from 'react';
import { PageHeader } from 'antd';
import { RecoilRoot } from 'recoil';

// components
import TodoListStats from '@components/TodoListStats';
import TodoFilters from '@components/TodoFilters';
import TodoItemCreator from '@components/TodoItemCreator';
import TodoList from '@components/TodoList';

const Todo = () => {
  return (
    <RecoilRoot>
      <PageHeader
        title="Todo"
        subTitle="Todo list using Recoiljs"
      />
      <div>
        {/* stats */}
        <TodoListStats />
        {/* filter */}
        <TodoFilters />
        {/* creator */}
        <TodoItemCreator />
        {/* list */}
        <TodoList />
      </div>
    </RecoilRoot>
  );
};

export default Todo;

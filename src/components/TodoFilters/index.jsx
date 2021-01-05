import React from 'react';
import { Select } from 'antd';
import { useRecoilState } from 'recoil';

import { todoListFilterState } from '@recoil/todo';

const { Option } = Select;

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (value) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <Select defaultValue={filter} onChange={updateFilter}>
        <Option value="Show All">All</Option>
        <Option value="Show Completed">Completed</Option>
        <Option value="Show Uncompleted">Uncompleted</Option>
      </Select>
    </>
  );
};

export default TodoListFilters;

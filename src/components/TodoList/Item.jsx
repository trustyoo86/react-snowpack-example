import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue, useRecoilState } from 'recoil';
import { List, Input, Checkbox, Button } from 'antd';

// atoms
import { filteredTodoListState } from '@recoil/todo';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(filteredTodoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
  };

  return (
    <List.Item>
      <Checkbox
        checked={item.isComplete}
        onChange={toggleItemCompletion} />
      <Input
        value={item.text}
        onChange={editItemText} />
      <Button type="primary" onClick={deleteItem}>완료하기</Button>
    </List.Item>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object,
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default React.memo(TodoItem);

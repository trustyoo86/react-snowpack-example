import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Alert, Form, Input, Button } from 'antd';

import { todoListState } from '@atoms/todo/todoList';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    if (!inputValue) {
      setError(true);
      return false;
    }

    setError(false);

    setTodoList((oldTodoList) => {
      return [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });

    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <Form
        name="addTodo">
        <Form.Item
          label="할일 입력"
          name="todo">
          <Input type="text" onChange={onChange} value={inputValue} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={addItem}>
            등록
          </Button>
        </Form.Item>
      </Form>
      {
        error && <Alert message="할일을 적어주세요" type="error" />
      }
    </>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;

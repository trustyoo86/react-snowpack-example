import React from 'react';
import PropTypes from 'prop-types';
import { List, Input } from 'antd';

const TodoItem = ({ item }) => {
  return (
    <List.Item>
      <Input value={item.text} />
    </List.Item>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object,
};

export default TodoItem;

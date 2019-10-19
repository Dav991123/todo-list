import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
  const [done, setDone] = useState(false);

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  const onLabelClick = () => {
      console.log(label)
  }

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onLabelClick}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;

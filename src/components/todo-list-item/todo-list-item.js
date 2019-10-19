import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false)
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span
        className={`todo-list-item ${done ? 'done': ''}`}

    >
      <span
        className="todo-list-item-label"
        style={important ? style : {}}
        onClick={() => setDone(!done)}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => setImportant(!important)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;

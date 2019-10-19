import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({
                        label,
                        done,
                        important,
                        onDeleted,
                        onToggleImportant,
                        onToggleDone,
                      }) => {
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
        onClick={() => {

          onToggleDone()
        }}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => {

                onToggleImportant()
              }}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;

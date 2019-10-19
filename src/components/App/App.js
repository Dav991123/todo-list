import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './index.css';
const App = () => {
    const [ todoData, setTodoData ] = useState([
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]);
    const deletedItem = (id) => {
        setTodoData(() => {
            const idx = todoData.findIndex(item => item.id === id);
            todoData.splice(idx, 1);
            return [...todoData]
        })

    };
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList
                todos={todoData}
                onDeleted={(id) => deletedItem(id)}
            />
        </div>
    );
};
export default App;
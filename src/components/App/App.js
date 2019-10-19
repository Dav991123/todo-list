import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import './index.css';
const App = () => {
    const [ todoData, setTodoData ] = useState([
        { label: 'Drink Coffee', done: false, important: false, id: 1 },
        { label: 'Make Awesome App',done: false, important: true, id: 2 },
        { label: 'Have a lunch', done: false,  important: false, id: 3 }
    ]);
    const createTotoItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: todoData.length + 1
        }
    }
    const addTodoItem = (text) => {
        setTodoData([
            ...todoData,
            createTotoItem(text)
        ])
    };
    const deletedItem = (id) => {
        setTodoData(() => {
            const idx = todoData.findIndex(item => item.id === id);
            todoData.splice(idx, 1);
            return [...todoData]
        })
    };

    const onToggleImportant = (id) => {
        const idx  = todoData.findIndex(item => item.id === id);
        setTodoData(() => {
            todoData[idx].important = !todoData[idx].important;
            return [...todoData]
        })
    };
    const onToggleDone = (id) => {
        const idx  = todoData.findIndex(item => item.id === id);
        setTodoData(() => {
            todoData[idx].done = !todoData[idx].done;
            return [...todoData]
        })
    };
    console.log(todoData)
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
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <ItemAddForm
                onAddTodoItem={addTodoItem}
            />
        </div>
    );
};
export default App;
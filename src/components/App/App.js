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
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const createTotoItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: todoData.length + 1
        }
    };
    const filterItems = () => {
        switch (filter) {
            case 'active' : return todoData.filter(item => !item.done);break;
            case 'done' : return todoData.filter(item => item.done);break;
            default : return todoData;
        }
    };
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
    const renderTodoItem = () => {
        const visibleItems = filterItems().filter(item => {
            return item.label.toLocaleLowerCase().indexOf(search) > -1
        });
       return visibleItems;
    };

    const toDoCount = todoData.filter(item => item.done).length;
    const doneCount = todoData.length - toDoCount;
    console.log(filter)
    return (
        <div className="todo-app">

            <AppHeader  toDo={toDoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearch={setSearch}
                />
                <ItemStatusFilter
                    onFilterChange={setFilter}
                />
            </div>

            <TodoList
                todos={renderTodoItem()}
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
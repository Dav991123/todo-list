import React, { useRef } from 'react';
import './item-add-form.css';
const ItemAddForm = ({todos, onAddTodoItem}) => {
    const inputAdd = useRef(null);
    const handleGetInputValue = () => {
        console.log(inputAdd)
        onAddTodoItem({
            label: inputAdd.current.value,
            important: false,
            id: todos.length + 1
        });
        inputAdd.current.value = ''
    };
    return (
        <div className={'item-add-form d-flex'}>
            <input
                className={'form-control'}
                type={'text'}
                placeholder={'add item'}
                ref={inputAdd}
            />
            <button
                onClick={handleGetInputValue}
                className={'btn btn-outline-secondary'}
            >
                add todo item
            </button>
        </div>
    )
}
export default ItemAddForm;
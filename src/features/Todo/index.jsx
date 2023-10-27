import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'New',
        },
        {
            id: 3,
            title: 'Code',
            status: 'New',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilterStatus] = useState('All');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'New' ? 'Completed' : 'New',
        };
        console.log(todo, idx);
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        setFilterStatus('All');
    }
    const handleShowNewClick = () => {
        setFilterStatus('New');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('Completed');
    }

    const renderTodoList = todoList.filter(todo => filteredStatus === 'All' || filteredStatus === todo.status);
    //console.log(renderTodoList)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button><br />
                <button onClick={handleShowNewClick}>Show New</button><br />
                <button onClick={handleShowCompletedClick}>Show Completed</button><br />
            </div>
        </div>
    );
}

export default TodoFeature; 
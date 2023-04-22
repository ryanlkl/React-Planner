import React from 'react';
import Todo from '../components/Todo';
import '../components/Todo.css';

let Timelength = 'Weekly';

export default function WeeklyTodo() {

    return (
        <div>
            <h2>{Timelength}<br/>To Do</h2>
            <Todo />
        </div>
    )
}

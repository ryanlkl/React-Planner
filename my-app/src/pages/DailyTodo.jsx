import React from 'react';
import Todo from '../components/Todo';
import '../components/Todo.css';

let Timelength = 'Daily';

export default function DailyTodo() {

    return (
        <div>
            <h2>{Timelength}<br/>To Do</h2>
            <Todo />
        </div>
    )
}

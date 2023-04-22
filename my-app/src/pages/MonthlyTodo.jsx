import {useState, React } from 'react';
import Todo from '../components/Todo';
import '../components/Todo.css';

let Timelength = 'Monthly';

export default function MonthlyTodo() {

    return (
        <div>
            <h2>{Timelength}<br/>To Do</h2>
            <Todo />
        </div>
    )
}

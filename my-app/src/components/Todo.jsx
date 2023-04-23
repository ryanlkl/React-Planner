import { useState } from 'react';

export default function Todo() {

    let [tasks, setTasks] = useState([]);
    let [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleAddTask() {
        if (inputValue.trim() === '') {
            return;
        }

        let newTask = {
            text: inputValue,
            isDone: false,
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    }

    function handleTaskDone(index) {
        let updatedTasks = [...tasks];
        updatedTasks[index].isDone = !updatedTasks[index].isDone;
        setTasks(updatedTasks);
    }

    function handleRemoveTask(index) {
        let updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    if (!Array.isArray(tasks)) {
        tasks = [];
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    }


    return (
        <>
        <div className="taskList">
            <input type="text" value={inputValue} onChange={handleInputChange}  placeholder="Add Task" onKeyDown={handleKeyDown} id="taskInput"/>
                <button onClick={handleAddTask}>Add</button>
                <ol id="taskList">
                    {tasks.map((task, index) => (
                        <li key={index} className="list">
                            <span className={task.isDone ? 'done' : ''}>{task.text}</span>
                            <button className="remove" onClick={() => handleRemoveTask(index)}>

                            </button>
                            <button className="completed" onClick={() => handleTaskDone(index)}>
                            {task.isDone ? 'X' : '✓'}
                            </button>
                        </li>
                    ))}
                </ol>
        </div>
        </>
    )
}

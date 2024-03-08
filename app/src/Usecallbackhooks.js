


import React, { useState, useCallback, useMemo } from 'react';

const TaskManager = () => {
  // State for tasks and filter
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Callback functions using useCallback
  const addTask = useCallback((task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }, []);

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Computed values using useMemo
  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks');
    if (filter === 'all') {
      return tasks;
    } else if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks.filter((task) => !task.completed);
    }
  }, [tasks, filter]);

  // JSX for the component
  return (
    <div>
      <h1>Task Manager</h1>

      {/* Task Form */}
      <TaskForm addTask={addTask} />

      {/* Task List */}
      <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} />

      {/* Filter Options */}
      <FilterOptions filter={filter} setFilter={setFilter} />
    </div>
  );
};

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = useCallback(() => {
    if (newTask.trim() !== '') {
      addTask({ id: Date.now(), text: newTask, completed: false });
      setNewTask('');
    }
  }, [addTask, newTask]);

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

const FilterOptions = ({ filter, setFilter }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === 'all'}
          onChange={() => setFilter('all')}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filter === 'completed'}
          onChange={() => setFilter('completed')}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          value="incomplete"
          checked={filter === 'incomplete'}
          onChange={() => setFilter('incomplete')}
        />
        Incomplete
      </label>
    </div>
  );
};

export default TaskManager;

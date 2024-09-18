// src/components/TaskForm.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../store/tasksSlice';
import { Task } from '../types';
import { RootState } from '../store/store';

interface TaskFormProps {
    currentTaskId: string | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ currentTaskId }) => {
    const dispatch = useDispatch();
    const currentTask = useSelector((state: RootState) =>
        state.tasks.tasks.find(task => task.id === currentTaskId)
    );

    const [task, setTask] = useState<Task>({
        id: '',
        title: '',
        description: '',
        priority: 'low',
        status: 'pending',
    });

    useEffect(() => {
        if (currentTask) {
            setTask(currentTask);
        } else {
            setTask({ id: '', title: '', description: '', priority: 'low', status: 'pending' });
        }
    }, [currentTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.title && task.description) {
            if (currentTaskId) {
                dispatch(updateTask(task));
            } else {
                dispatch(addTask({ ...task, id: Date.now().toString() }));
            }
            setTask({ id: '', title: '', description: '', priority: 'low', status: 'pending' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-lg font-bold mb-4">{currentTaskId ? 'Edit Task' : 'Add Task'}</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className="border border-gray-300 p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Task Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                className="border border-gray-300 p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                value={task.priority}
                onChange={(e) => setTask({ ...task, priority: e.target.value as 'low' | 'medium' | 'high' })}
                className="border border-gray-300 p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <select
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value as 'pending' | 'in-progress' | 'completed' })}
                className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                {currentTaskId ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;

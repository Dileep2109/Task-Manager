// components/TaskList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setCurrentTask } from '../store/tasksSlice';
import TaskItem from './TaskItem';
import { RootState } from '../store/store';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const handleEditTask = (taskId: string) => {
        dispatch(setCurrentTask(taskId));
    };

    return (
        <ul className="space-y-4">
            {tasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center bg-gray-100 p-4 rounded">
                    <TaskItem task={task} />
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleEditTask(task.id)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => dispatch(deleteTask(task.id))}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

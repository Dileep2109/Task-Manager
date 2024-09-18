// components/TaskItem.tsx
import React from 'react';
import { Task } from '../types';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
    return (
        <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-gray-500">Priority: {task.priority}</p>
            <p className="text-gray-500">Status: {task.status}</p>
        </div>
    );
};

export default TaskItem;

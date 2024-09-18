// src/store/tasksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

interface TasksState {
    tasks: Task[];
    currentTaskId: string | null;
}

const initialState: TasksState = {
    tasks: [],
    currentTaskId: null,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<Task>) {
            state.tasks.push(action.payload);
        },
        updateTask(state, action: PayloadAction<Task>) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        deleteTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setCurrentTask(state, action: PayloadAction<string | null>) {
            state.currentTaskId = action.payload;
        },
        clearCurrentTask(state) {
            state.currentTaskId = null;
        },
    },
});

export const { addTask, updateTask, deleteTask, setCurrentTask, clearCurrentTask } = tasksSlice.actions;
export default tasksSlice.reducer;

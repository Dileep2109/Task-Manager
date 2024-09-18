// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <MainContent />
        </Provider>
    );
};

const MainContent: React.FC = () => {
    const currentTaskId = useSelector((state: RootState) => state.tasks.currentTaskId);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Task Manager</h1>
            <TaskForm currentTaskId={currentTaskId} />
            <TaskList />
        </div>
    );
};

export default App;

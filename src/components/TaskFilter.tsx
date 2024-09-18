import React, { useState } from 'react';

const TaskFilter: React.FC<{ onFilter: (filter: string) => void }> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search tasks"
      className="border rounded p-2 mb-4"
    />
  );
};

export default TaskFilter;

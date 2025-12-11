import React, { memo, useCallback } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';

const PatientFilter = memo(({ searchTerm, onSearchChange, statusFilter, onStatusChange, typeFilter, onTypeChange }) => {
  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
  ];

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'regular', label: 'Regular' },
    { value: 'premium', label: 'Premium' }
  ];

  const handleSearchChange = useCallback((e) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  const handleStatusChange = useCallback((e) => {
    onStatusChange(e.target.value);
  }, [onStatusChange]);

  const handleTypeChange = useCallback((e) => {
    onTypeChange(e.target.value);
  }, [onTypeChange]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Select
          options={statusOptions}
          value={statusFilter}
          onChange={handleStatusChange}
          placeholder="Filter by status"
        />
        <Select
          options={typeOptions}
          value={typeFilter}
          onChange={handleTypeChange}
          placeholder="Filter by type"
        />
      </div>
    </div>
  );
});

PatientFilter.displayName = 'PatientFilter';

export default PatientFilter;
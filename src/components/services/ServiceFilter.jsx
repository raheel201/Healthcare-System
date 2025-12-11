import React, { memo, useCallback } from 'react';
import Select from '../common/Select';

const ServiceFilter = memo(({ categoryFilter, onCategoryChange, availabilityFilter, onAvailabilityChange }) => {
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'laboratory', label: 'Laboratory' },
    { value: 'imaging', label: 'Imaging' },
    { value: 'therapy', label: 'Therapy' },
    { value: 'preventive', label: 'Preventive' },
    { value: 'dental', label: 'Dental' }
  ];

  const availabilityOptions = [
    { value: '', label: 'All Services' },
    { value: 'available', label: 'Available Only' },
    { value: 'unavailable', label: 'Unavailable Only' }
  ];

  const handleCategoryChange = useCallback((e) => {
    onCategoryChange(e.target.value);
  }, [onCategoryChange]);

  const handleAvailabilityChange = useCallback((e) => {
    onAvailabilityChange(e.target.value);
  }, [onAvailabilityChange]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          options={categoryOptions}
          value={categoryFilter}
          onChange={handleCategoryChange}
          placeholder="Filter by category"
        />
        <Select
          options={availabilityOptions}
          value={availabilityFilter}
          onChange={handleAvailabilityChange}
          placeholder="Filter by availability"
        />
      </div>
    </div>
  );
});

ServiceFilter.displayName = 'ServiceFilter';

export default ServiceFilter;
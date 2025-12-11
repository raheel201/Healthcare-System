import React, { memo } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const PatientCard = memo(({ patient, onViewDetails }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    inactive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const typeColors = {
    regular: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    premium: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
  };

  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {patient.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {patient.age} years • {patient.gender}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {patient.phone}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last visit: {patient.lastVisit}
          </p>
        </div>
        <div className="flex flex-col sm:items-end space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[patient.status]}`}>
              {patient.status}
            </span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeColors[patient.type]}`}>
              {patient.type}
            </span>
          </div>
          <Button size="sm" onClick={() => onViewDetails(patient)} className="w-full sm:w-auto">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
});

PatientCard.displayName = 'PatientCard';

export default PatientCard;
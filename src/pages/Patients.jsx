import React, { memo } from 'react';
import PatientList from '../components/patients/PatientList';

const Patients = memo(() => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Patients</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage and view patient information</p>
      </div>

      {/* Patient List */}
      <PatientList />
    </div>
  );
});

Patients.displayName = 'Patients';

export default Patients;
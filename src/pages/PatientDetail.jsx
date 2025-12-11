import React, { memo, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { patients } from '../data/patients';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const PatientDetail = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  const patient = useMemo(() => {
    return patients.find(p => p.id === parseInt(id));
  }, [id]);

  if (!patient) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Patient Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The patient you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate('/patients')}>
          Back to Patients
        </Button>
      </div>
    );
  }

  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    inactive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const typeColors = {
    regular: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    premium: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Patient Details</h1>
          <p className="text-gray-600 dark:text-gray-400">Detailed information about the patient</p>
        </div>
        <Button variant="secondary" onClick={() => navigate('/patients')}>
          Back to Patients
        </Button>
      </div>

      <Card title="Patient Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Age
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.age} years</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Gender
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.gender}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusColors[patient.status]}`}>
                {patient.status}
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.phone}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Patient Type
              </label>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${typeColors[patient.type]}`}>
                {patient.type}
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Visit
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.lastVisit}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Address
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.address}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Medical Condition
              </label>
              <p className="text-gray-900 dark:text-gray-100">{patient.condition}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Assigned Doctor
            </label>
            <p className="text-gray-900 dark:text-gray-100">{patient.doctor}</p>
          </div>
        </div>
      </Card>
    </div>
  );
});

PatientDetail.displayName = 'PatientDetail';

export default PatientDetail;
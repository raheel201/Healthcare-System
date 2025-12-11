import React, { memo, useState, useMemo, useCallback } from 'react';
import PatientCard from './PatientCard';
import PatientFilter from './PatientFilter';
import Modal from '../common/Modal';
import { patients } from '../../data/patients';

const PatientList = memo(() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = useMemo(() => {
    return patients.filter(patient => {
      const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           patient.phone.includes(searchTerm);
      const matchesStatus = !statusFilter || patient.status === statusFilter;
      const matchesType = !typeFilter || patient.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchTerm, statusFilter, typeFilter]);

  const handleViewDetails = useCallback((patient) => {
    setSelectedPatient(patient);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPatient(null);
  }, []);

  return (
    <div>
      <PatientFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPatients.map(patient => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No patients found matching your criteria.</p>
        </div>
      )}

      {/* Patient Details Modal */}
      <Modal
        isOpen={!!selectedPatient}
        onClose={handleCloseModal}
        title="Patient Details"
        size="lg"
      >
        {selectedPatient && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Age</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.age} years</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.gender}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.phone}</p>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.email}</p>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Condition</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.condition}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Doctor</label>
                <p className="text-gray-900 dark:text-gray-100">{selectedPatient.doctor}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
});

PatientList.displayName = 'PatientList';

export default PatientList;
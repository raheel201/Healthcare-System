import React, { memo, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../store/bookingSlice';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import Select from '../common/Select';
import Button from '../common/Button';

const BookingForm = memo(({ service, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    appointmentDate: '',
    appointmentTime: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeOptions = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleInputChange = useCallback((field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.patientPhone.trim()) {
      newErrors.patientPhone = 'Phone number is required';
    }

    if (!formData.patientEmail.trim()) {
      newErrors.patientEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.patientEmail)) {
      newErrors.patientEmail = 'Email is invalid';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Appointment date is required';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Appointment time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const booking = {
        ...formData,
        serviceId: service.id,
        serviceName: service.name,
        servicePrice: service.price,
        serviceDuration: service.duration
      };

      dispatch(addBooking(booking));
      onSuccess?.();
      onClose();
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, service, dispatch, onClose, onSuccess, validateForm]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-teal-50 dark:bg-teal-900 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-teal-900 dark:text-teal-100">{service.name}</h4>
        <p className="text-sm text-teal-700 dark:text-teal-300">
          ${service.price} • {service.duration}
        </p>
      </div>

      <Input
        label="Patient Name"
        value={formData.patientName}
        onChange={handleInputChange('patientName')}
        error={errors.patientName}
        placeholder="Enter patient name"
      />

      <Input
        label="Phone Number"
        type="tel"
        value={formData.patientPhone}
        onChange={handleInputChange('patientPhone')}
        error={errors.patientPhone}
        placeholder="Enter phone number"
      />

      <Input
        label="Email"
        type="email"
        value={formData.patientEmail}
        onChange={handleInputChange('patientEmail')}
        error={errors.patientEmail}
        placeholder="Enter email address"
      />

      <Input
        label="Appointment Date"
        type="date"
        value={formData.appointmentDate}
        onChange={handleInputChange('appointmentDate')}
        error={errors.appointmentDate}
        min={new Date().toISOString().split('T')[0]}
      />

      <Select
        label="Appointment Time"
        options={timeOptions}
        value={formData.appointmentTime}
        onChange={handleInputChange('appointmentTime')}
        error={errors.appointmentTime}
        placeholder="Select time"
      />

      <TextArea
        label="Additional Notes (Optional)"
        value={formData.notes}
        onChange={handleInputChange('notes')}
        placeholder="Any special requirements or notes"
        rows={3}
      />

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
        <Button type="button" variant="secondary" onClick={onClose} className="w-full sm:w-auto">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </Button>
      </div>
    </form>
  );
});

BookingForm.displayName = 'BookingForm';

export default BookingForm;
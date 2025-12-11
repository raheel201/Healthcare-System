import React, { memo, useState, useCallback } from 'react';
import ServiceList from '../components/services/ServiceList';
import Modal from '../components/common/Modal';
import BookingForm from '../components/booking/BookingForm';

const Services = memo(() => {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookService = useCallback((service) => {
    setSelectedService(service);
    setShowBookingForm(true);
  }, []);

  const handleCloseBookingForm = useCallback(() => {
    setShowBookingForm(false);
    setSelectedService(null);
  }, []);

  const handleBookingSuccess = useCallback(() => {
    console.log('Booking successful!');
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Services</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse and book our healthcare services</p>
      </div>

      <ServiceList onBookService={handleBookService} />

      <Modal
        isOpen={showBookingForm}
        onClose={handleCloseBookingForm}
        title="Book Service"
        size="lg"
      >
        {selectedService && (
          <BookingForm
            service={selectedService}
            onClose={handleCloseBookingForm}
            onSuccess={handleBookingSuccess}
          />
        )}
      </Modal>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
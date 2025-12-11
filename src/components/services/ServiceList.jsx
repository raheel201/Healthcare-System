import React, { memo, useState, useMemo, useCallback } from 'react';
import ServiceCard from './ServiceCard';
import ServiceFilter from './ServiceFilter';
import { services } from '../../data/services';

const ServiceList = memo(({ onBookService }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = !categoryFilter || service.category === categoryFilter;
      const matchesAvailability = !availabilityFilter || 
        (availabilityFilter === 'available' && service.available) ||
        (availabilityFilter === 'unavailable' && !service.available);
      
      return matchesCategory && matchesAvailability;
    });
  }, [categoryFilter, availabilityFilter]);

  const handleBookService = useCallback((service) => {
    onBookService(service);
  }, [onBookService]);

  return (
    <div>
      <ServiceFilter
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        availabilityFilter={availabilityFilter}
        onAvailabilityChange={setAvailabilityFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredServices.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onBookService={handleBookService}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No services found matching your criteria.</p>
        </div>
      )}
    </div>
  );
});

ServiceList.displayName = 'ServiceList';

export default ServiceList;
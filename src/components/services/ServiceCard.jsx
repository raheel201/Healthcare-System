import React, { memo } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const ServiceCard = memo(({ service, onBookService }) => {
  const categoryColors = {
    consultation: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
    laboratory: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    imaging: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    therapy: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    preventive: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    dental: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
  };

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {service.name}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[service.category]}`}>
              {service.category}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {service.description}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Price:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">${service.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Duration:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{service.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className={`text-sm font-medium ${service.available ? 'text-green-600' : 'text-red-600'}`}>
            {service.available ? 'Available' : 'Unavailable'}
          </span>
          <Button
            size="sm"
            disabled={!service.available}
            onClick={() => onBookService(service)}
            className="w-full sm:w-auto"
          >
            Book Service
          </Button>
        </div>
      </div>
    </Card>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
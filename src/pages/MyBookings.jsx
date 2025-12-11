import React, { memo } from 'react';
import BookingList from '../components/booking/BookingList';

const MyBookings = memo(() => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Bookings</h1>
        <p className="text-gray-600 dark:text-gray-400">View and manage your appointments</p>
      </div>

      <BookingList />
    </div>
  );
});

MyBookings.displayName = 'MyBookings';

export default MyBookings;
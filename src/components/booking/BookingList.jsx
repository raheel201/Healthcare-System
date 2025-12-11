import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBookingStatus, deleteBooking } from '../../store/bookingSlice';
import Card from '../common/Card';
import Button from '../common/Button';

const BookingList = memo(() => {
  const bookings = useSelector(state => state.bookings.bookings);
  const dispatch = useDispatch();

  const handleStatusUpdate = useCallback((id, status) => {
    dispatch(updateBookingStatus({ id, status }));
  }, [dispatch]);

  const handleDelete = useCallback((id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      dispatch(deleteBooking(id));
    }
  }, [dispatch]);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    completed: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300'
  };

  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1M8 7h8m-9 4v10a2 2 0 002 2h8a2 2 0 002-2V11a2 2 0 00-2-2H9a2 2 0 00-2 2z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No bookings</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          You haven't made any bookings yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {bookings.map(booking => (
        <Card key={booking.id}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {booking.serviceName}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[booking.status]}`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Patient: {booking.patientName}</p>
                  <p className="text-gray-600 dark:text-gray-400">Phone: {booking.patientPhone}</p>
                  <p className="text-gray-600 dark:text-gray-400">Email: {booking.patientEmail}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Date: {booking.appointmentDate}</p>
                  <p className="text-gray-600 dark:text-gray-400">Time: {booking.appointmentTime}</p>
                  <p className="text-gray-600 dark:text-gray-400">Price: ${booking.servicePrice}</p>
                </div>
              </div>
              
              {booking.notes && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Notes:</span> {booking.notes}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex flex-col space-y-2 ml-4">
              {booking.status === 'pending' && (
                <>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                  >
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                  >
                    Cancel
                  </Button>
                </>
              )}
              
              {booking.status === 'confirmed' && (
                <Button
                  size="sm"
                  onClick={() => handleStatusUpdate(booking.id, 'completed')}
                >
                  Mark Complete
                </Button>
              )}
              
              <Button
                size="sm"
                variant="secondary"
                onClick={() => handleDelete(booking.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
});

BookingList.displayName = 'BookingList';

export default BookingList;
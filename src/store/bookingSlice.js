import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const newBooking = {
        id: Date.now(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        status: 'pending'
      };
      state.bookings.push(newBooking);
    },
    updateBookingStatus: (state, action) => {
      const { id, status } = action.payload;
      const booking = state.bookings.find(b => b.id === id);
      if (booking) {
        booking.status = status;
      }
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(b => b.id !== action.payload);
    }
  },
});

export const { addBooking, updateBookingStatus, deleteBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
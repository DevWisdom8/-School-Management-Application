import { configureStore } from '@reduxjs/toolkit';

// Import slices (to be created)
// import authReducer from './slices/authSlice';
// import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    // auth: authReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;


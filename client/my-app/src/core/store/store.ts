import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import drwaingReducer from '../slice/drawingSlice';

export const store = configureStore({
  reducer: {
    drawing: drwaingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

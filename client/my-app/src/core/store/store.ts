import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import drwaingReducer from "../slice/drawingSlice";
import imageReducer from "../slice/imageSlice";

export const store = configureStore({
  reducer: {
    drawing: drwaingReducer,
    image: imageReducer,
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

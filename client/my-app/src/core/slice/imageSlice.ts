import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../const/ActionStatusEnum";
import { Material } from "../models/Material";
import { fetchMaterialThunk } from "../thunks/fetchMaterialThunk";

export interface ImageState {
  status: ActionStatusEnum;
  imageURL: string[];
}

const initialState: ImageState = {
  status: ActionStatusEnum.Idle,
  imageURL: [],
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addImageURL: (state, action: PayloadAction<string[]>) => {
      state.imageURL = [...state.imageURL, ...action.payload];
    },
    removeImageURL: (state, action: PayloadAction<string>) => {
      state.imageURL = state.imageURL.filter(
        (imageURL) => imageURL !== action.payload,
      );
    },
  },
  extraReducers: {},
});

export const { addImageURL, removeImageURL } = imageSlice.actions;

export default imageSlice.reducer;

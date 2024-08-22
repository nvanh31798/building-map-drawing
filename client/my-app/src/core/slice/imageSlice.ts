import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../const/ActionStatusEnum";
import { Material } from "../models/Material";
import { fetchMaterialThunk } from "../thunks/fetchMaterialThunk";
import { ImageFile } from "../models/ImageFile";

export interface ImageState {
  status: ActionStatusEnum;
  imageURL: string[];
  images: ImageFile[];
}

const initialState: ImageState = {
  status: ActionStatusEnum.Idle,
  imageURL: [],
  images: [],
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
    addImage: (state, action: PayloadAction<ImageFile>) => {
      state.images = [...state.images, action.payload];
    },
  },
  extraReducers: {},
});

export const { addImageURL, removeImageURL, addImage } = imageSlice.actions;

export default imageSlice.reducer;

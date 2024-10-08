import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../const/ActionStatusEnum";
import { ImageFile } from "../models/ImageFile";
import { v4 as uuid } from 'uuid'

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
      const newImage: ImageFile = {
        ...action.payload,
        id: uuid(),
        order: state.images.length,
      };
      state.images = [...state.images, newImage];
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter(
        (image) => image.id !== action.payload,
      );
    },
  },
  extraReducers: {},
});

export const { addImageURL, removeImageURL, addImage, removeImage } =
  imageSlice.actions;

export default imageSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../const/ActionStatusEnum";
import { Material } from "../models/Material";
import { fetchMaterialThunk } from "../thunks/fetchMaterialThunk";

export interface MaterialState {
  status: ActionStatusEnum;
  isDeleting: boolean;
  materials: Material[];
}

const initialState: MaterialState = {
  status: ActionStatusEnum.Idle,
  isDeleting: false,
  materials: [],
};

export const drwaingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    addMaterial: (state, action: PayloadAction<Material[]>) => {
      state.materials = [...state.materials, ...action.payload];
    },
    removeMaterial: (state, action: PayloadAction<string>) => {
      state.materials = state.materials.filter(
        (material) => material.id !== action.payload,
      );
    },
    deleteSwitch: (state) => {
      state.isDeleting = !state.isDeleting;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaterialThunk.fulfilled, (state, action) => {
      state.status = ActionStatusEnum.Success;
      state.materials = action.payload;
    });
  },
});

export const { addMaterial, removeMaterial, deleteSwitch } =
  drwaingSlice.actions;

export default drwaingSlice.reducer;

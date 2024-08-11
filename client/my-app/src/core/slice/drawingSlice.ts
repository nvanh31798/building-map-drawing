import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionStatusEnum } from "../const/ActionStatusEnum";
import { Material } from "../models/Material";
import { fetchMaterialThunk } from "../thunks/fetchMaterialThunk";

export interface MaterialState {
  status: ActionStatusEnum;
  materials: Material[];
}

const initialState: MaterialState = {
  status: ActionStatusEnum.Idle,
  materials: [],
};

export const drwaingSlice = createSlice({
  name: "drwaing",
  initialState,
  reducers: {
    addMaterial: (state, action: PayloadAction<Material[]>) => {
      state.materials = [...state.materials, ...action.payload];
    },
    removeMaterial: (state, action: PayloadAction<Material[]>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaterialThunk.fulfilled, (state, action) => {
      state.status = ActionStatusEnum.Success;
      state.materials = action.payload;
    });
  },
});

export const { addMaterial, removeMaterial } = drwaingSlice.actions;

export default drwaingSlice.reducer;

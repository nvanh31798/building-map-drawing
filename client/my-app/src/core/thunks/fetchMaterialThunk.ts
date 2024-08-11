import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMaterial } from "../api/fetchMaterial";

export const fetchMaterialThunk = createAsyncThunk(
  "material/fetchMaterialThunk",
  async () => {
    const response = await fetchMaterial();
    return response.data;
  },
);

import { Material } from "../models/Material";
import materialMock from "../../mock/material-mock.json"

export const fetchMaterial = () => {
    return new Promise<{ data: Material[] }>((resolve) =>
        setTimeout(() => resolve({ data: materialMock }), 500)
      );
}
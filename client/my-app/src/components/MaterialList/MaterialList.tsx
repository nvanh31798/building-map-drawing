import React from "react";
import { Material } from "../../core/models/Material";
import { MaterialItem } from "../MaterialItem/MaterialItem";

interface MaterialListProps {
  materialList: Material[];
}

export const MaterialList = ({ materialList }: MaterialListProps) => {
  return (
    <>
      {materialList.map((material) => (
        <MaterialItem key={material.id} item={material} />
      ))}
    </>
  );
};

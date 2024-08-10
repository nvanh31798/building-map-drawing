import React from "react";
import { Material } from "../../core/models/Material";

interface MaterialItemProps {
  item: Material;
}

export const MaterialItem = ({ item }: MaterialItemProps) => {
  return <div>{item.label}</div>;
};

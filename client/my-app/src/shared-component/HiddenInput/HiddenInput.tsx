import { RefObject } from "react";

interface HiddenInputProps {
  inputRef: RefObject<HTMLInputElement>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HiddenInput = ({ inputRef, handleChange }: HiddenInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange?.(e);
  };

  return (
    <input
      onChange={(e) => handleInputChange(e)}
      type="file"
      ref={inputRef}
      accept="image/*"
      style={{ display: "none" }}
    />
  );
};

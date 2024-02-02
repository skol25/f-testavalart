// DynamicSelect.tsx
import React, { ChangeEvent } from "react";

interface DynamicSelectProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const DynamicSelect: React.FC<DynamicSelectProps> = ({ options, onSelect }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Selecciona una opción</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DynamicSelect;

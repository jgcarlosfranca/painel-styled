import React, { useState } from "react";
import {
  MultiSelectWrapper,
  MultiSelectButton,
  MultiSelectList,
  MultiSelectItem,
} from "./MultiSelect.styles";

const MultiSelect = ({ options, tamanhoInput }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue) => {
    const isOptionSelected = selectedOptions.includes(optionValue);

    if (isOptionSelected) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== optionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  return (
    <MultiSelectWrapper tamanhoInput={tamanhoInput}>
      <MultiSelectButton onClick={handleToggle}>
        {selectedOptions.length === 0
          ? "Select options"
          : selectedOptions.join(", ")}
      </MultiSelectButton>
      {isOpen && (
        <MultiSelectList>
          {options.map((option) => (
            <MultiSelectItem
              key={option.value}
              isSelected={selectedOptions.includes(option.value)}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </MultiSelectItem>
          ))}
        </MultiSelectList>
      )}
    </MultiSelectWrapper>
  );
};

export default MultiSelect;

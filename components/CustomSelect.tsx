"use client";
import * as React from "react";
import { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { option } from "@/types/selectOption";
import { getColorForDay } from "@/utils/getDayColor";

type CustomSelectProps = {
  options: option[];
  label: string;
  multiple?: boolean;
};

const CustomSelect = ({ options, label, multiple }: CustomSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[] | string>(
    multiple ? [] : ""
  );

  const handleChange = (event: SelectChangeEvent<string[] | string>) => {
    const { value } = event.target;
    setSelectedOptions(
      multiple && typeof value === "string" ? value.split(",") : value
    );
  };

  const renderSelectedValue = (selected: string | string[]) => {
    const selectedArray = Array.isArray(selected) ? selected : [selected];
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {selectedArray.map((value) => {
          const selectedValue = options.find(
            (option) => option.key === value
          )?.value;

          return (
            <Chip
              key={value}
              label={selectedValue}
              sx={{
                backgroundColor: getColorForDay(selectedValue || ""),
                color: "white",
              }}
            />
          );
        })}
      </Box>
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="custom-select-label">{label}</InputLabel>
      <Select
        labelId="custom-select-label"
        id="custom-select"
        value={selectedOptions}
        label="selectedOption"
        onChange={handleChange}
        multiple={multiple}
        renderValue={renderSelectedValue}
        input={<OutlinedInput label={label} />}
      >
        {options.map((option) => (
          <MenuItem
            key={option.key}
            value={option.key}
            style={{ color: getColorForDay(option.value) }}
          >
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

"use client";
import * as React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type CustomSelectProps = {
  options: string[];
  label: string;
};

export default function CustomSelect({ options, label }: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={selectedOption}
          label="selectedOption"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

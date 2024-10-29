import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";

function DropDown({ label, options, value, handleChange, name }) {
  return (
    <FormControl fullWidth style={{ marginBottom: "1rem" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        name={name}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropDown;

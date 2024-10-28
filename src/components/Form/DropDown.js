import React, { useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";

function DropDown({ label, options, icon }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  return (
    <FormControl fullWidth style={{ marginBottom: "1rem" }}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple
        value={selectedOptions}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
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

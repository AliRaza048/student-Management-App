import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
const Input = ({
  label,
  icon,
  name,
  type,
  value,
  placeholder,
  handleChange,
  rows,
  multiline
}) => {
  return (
   
      <Box sx={{ width: 500, maxWidth: "100%", marginBottom:"1rem" }}>
        <TextField
          fullWidth
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          multiline={multiline}
          value={value}
          onChange={(e) => handleChange(e)}
          rows={rows}
          id="fullWidth"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {icon}
              </InputAdornment>
            ),
          }}
        />
      </Box>
  );
};

export default Input;

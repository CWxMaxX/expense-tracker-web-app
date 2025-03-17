import { MenuItem, Select } from '@mui/material';
import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: Option;
    onChange: (value: Option) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
    return (
        <Select
        fullWidth
        labelId="month-select-label"
        id="month-select"
        value={value.value}
        onChange={(event) => {
            const selectedOption = options.find(option => option.value === event.target.value);
            if (selectedOption) {
                onChange(selectedOption);
            }
        }}
        size={"small"}
        className="max-w-[240px] text-left !rounded-2xl"
        variant="outlined"
          >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
          </Select>
    );
};

export default CustomSelect;
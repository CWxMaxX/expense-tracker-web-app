import React, { useState } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { format, subMonths } from 'date-fns';
import { useEffect } from 'react';

const CustomDateRangePicker: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    useEffect(() => {
        const currentMonth = format(new Date(), 'MMMM yyyy');
        setSelectedMonth(currentMonth);
    }, []);
    
    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedMonth(event.target.value as string);
    };

    const generatePreviousMonths = () => {
        const months = [];
        for (let i = 0; i < 12; i++) {
            const date = subMonths(new Date(), i);
            months.push(format(date, 'MMMM yyyy'));
        }
        return months;
    };

    const previousMonths = generatePreviousMonths();

    return (
        <FormControl fullWidth variant="outlined" className='flex items-center justify-center' >
            <Select
            fullWidth
                labelId="month-select-label"
                id="month-select"
                value={selectedMonth}
                onChange={handleChange}
                size={'small'}
                className='max-w-[240px] !rounded-2xl'
                variant='outlined'
            >
                {previousMonths.map((month, index) => (
                    <MenuItem key={index} value={month}>
                        {month}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDateRangePicker;
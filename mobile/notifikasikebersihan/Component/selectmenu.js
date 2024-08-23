import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
     <FormControl
  sx={{
    m: 1,
    minWidth: 80,
    height: 32, // Adjust this value to your preference
    '& .MuiInputBase-root': {
      padding: '0px 8px', // Adjust padding inside the select box
      height: '100%', // Ensures the input field fills the height
    },
    '& .MuiSelect-select': {
      padding: '0px', // Adjust padding of the select text
      height: '100%', // Adjust the text height
    },
  }}
>
       
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
        
          <MenuItem value={20}>semua</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

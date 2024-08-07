import React from "react";
import {
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";


const SearchForm = ({ onSearch }) => {
  const [date, setDate] = React.useState(null);
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
    onSearch(date, searchText);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <DatePicker
          label="Tanggal"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          label="Cari"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          CARI
        </Button>
        <Button variant="contained" color="secondary">
          TAMBAH
        </Button>
      </Stack>
    </LocalizationProvider>
  );
};

export default SearchForm;
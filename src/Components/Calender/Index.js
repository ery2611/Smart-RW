import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

const fullDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const calender = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: "100%",
            height: "350px", // Memastikan Box mengisi tinggi viewport
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              width: "450px",
              borderRadius: "8px",
              boxShadow: 5,
              bgcolor: "#00A9AD",
              p: 1,
            }}
          >
            <DateCalendar
              sx={{
                backgroundColor: "white", // Pastikan background box berbeda dengan background luar
              }}
            ></DateCalendar>
          </Box>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default calender;

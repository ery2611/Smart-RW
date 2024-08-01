// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const dates = Array.from({ length: 31 }, (_, i) => i + 1);

// const calender = () => {
//   return (
//     <div>
//       <Box
//         sx={{
//           width: "300px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           background: "#fff",
//         }}
//       >
//         <Box
//           sx={{
//             padding: "16px",
//             borderBottom: "1px solid #ddd",
//             background: "#f0f0f0",
//             textAlign: "center",
//           }}
//         >
//           <Typography variant="h6">July 2024</Typography>
//         </Box>
//         <Grid container spacing={0}>
//           {daysOfWeek.map((day) => (
//             <Grid item xs={12 / daysOfWeek.length} key={day}>
//               <Box
//                 sx={{
//                   textAlign: "center",
//                   padding: "8px",
//                   fontWeight: "bold",
//                   background: "#f0f0f0",
//                   borderBottom: "1px solid #ddd",
//                 }}
//               >
//                 {day}
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//         <Grid container spacing={0}>
//           {dates.map((date) => (
//             <Grid item xs={12 / daysOfWeek.length} key={date}>
//               <Box
//                 sx={{
//                   textAlign: "center",
//                   padding: "16px",
//                   border: "1px solid #ddd",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 {date}
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default calender;

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
              bgcolor:'#00A9AD',
              p: 1,
              
            }}
          >
            <DateCalendar
            sx={{
              backgroundColor: "white", // Pastikan background box berbeda dengan background luar
            }}>
            </DateCalendar>
          </Box>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default calender;
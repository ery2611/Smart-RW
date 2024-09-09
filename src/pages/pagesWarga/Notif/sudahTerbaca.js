import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "auto",
  maxWidth: 900,
  flexGrow: 1,
  backgroundColor: "#EEEEE",
  color: "#000",
}));

const CustomTypography = styled(Typography)({
  color: "#000",
  textAlign: "left",
});

const TimeTypography = styled(Typography)({
  color: "#000",
  alignSelf: "center",
});

export default function Uisudahterbaca() {
  return (
    <CustomPaper sx={{ boxShadow: 5, borderRadius: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Masuknya laporan pengaduan atas nama Yan Azhari
        </Typography>

        <CustomTypography variant="body2" sx={{ color: "#A1A5B7" }}>
          15 Menit
        </CustomTypography>
      </Box>
    </CustomPaper>
  );
}

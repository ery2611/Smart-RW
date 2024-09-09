import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

// Styled components
const CustomPaper = styled(Paper)(({ theme, bgcolor }) => ({
  padding: theme.spacing(2),
  margin: "auto",
  maxWidth: 1500,
  flexGrow: 1,
  backgroundColor: "#EEEEE",
  boxShadow: 20,
  cursor: "pointer",
}));

const CustomTypography = styled(Typography)({
  color: "#000",
  textAlign: "left",
});

const Divider = styled("hr")({
  border: 0,
  height: 1,
  backgroundColor: "#C5BDBD",
  margin: "10px 0",
});

// Data notifikasi
const notifications = [
  { id: 1, title: "Bersihin Kandang Ayam", time: "Baru Saja" },
  { id: 2, title: "Jemur Pakaian", time: "5 Menit yang Lalu" },
  // Tambahkan data notifikasi lainnya di sini
];

export default function Uibelumterbaca({ count }) {
  const [bgColor, setBgColor] = useState("#19F4D6");

  const handleClick = () => {
    setBgColor("#EEEEE");
  };

  return (
    <Box>
      {notifications.slice(0, count).map(
        (
          notif // Menggunakan slice untuk membatasi notifikasi
        ) => (
          <CustomPaper
            key={notif.id}
            bgcolor={bgColor}
            onClick={handleClick}
            sx={{ boxShadow: 5, borderRadius: 3, mb: 2 }}
          >
            <Box container spacing={2}>
              <Box item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {notif.title}
                  </Typography>
                  <CircleIcon sx={{ color: "#00A9AD" }} />
                </Stack>
                <CustomTypography variant="body2" sx={{ color: "#A1A5B7" }}>
                  {notif.time}
                </CustomTypography>
              </Box>
            </Box>
          </CustomPaper>
        )
      )}
    </Box>
  );
}

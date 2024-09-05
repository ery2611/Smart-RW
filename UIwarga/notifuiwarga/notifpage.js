import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Uisudahterbaca from "./uiwargasudahterbaca";
import Uibelumterbaca from "./uiwargabelumterbaca";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Uiwarganotif() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Divider = styled("hr")({
    border: 0,
    height: 1,
    backgroundColor: "#C5BDBD",
    margin: "10px 0",
  });

  return (
    <Box
      sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "20px" }}
    >
      <Box
        sx={{
          maxWidth: "800px", // Ubah ukuran ini sesuai dengan kebutuhan
          width: "100%",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#FEFEFE",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            marginBottom: "5px",
            display: "flex",
            height: "3%",
            width: "100%",
          }}
        >
          <Stack direction="column" textAlign="left">
            <Typography
              variant="h5"
              sx={{
                marginBottom: 0,
                color: "#00A9AD",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              NOTIFIKASI
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ width: "100%", borderRadius: "10px", typography: "body1" }}>
          <TabContext value={value}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#00A9AD" }}>
              Hari Ini
            </Typography>
            <div>
              <Uibelumterbaca count={1} />{" "}
              {/* Menampilkan hanya 1 notifikasi */}
            </div>
            <div style={{ marginTop: "16px" }}>
              <Uisudahterbaca />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Divider />
            </div>

            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#00A9AD" }}>
              Kemarin
            </Typography>
            <div>
              <Uisudahterbaca />
            </div>
            <div style={{ marginTop: "16px" }}>
              <Uisudahterbaca />
            </div>
            <div style={{ marginTop: "16px" }}>
              <Uibelumterbaca count={1} />{" "}
              {/* Menampilkan hanya 1 notifikasi */}
            </div>

            <div style={{ marginTop: "20px" }}>
              <Divider />
            </div>

            <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#00A9AD" }}>
              2 Hari Lalu
            </Typography>
            <div>
              <Uisudahterbaca />
            </div>
            <div style={{ marginTop: "16px" }}>
              <Uisudahterbaca />
            </div>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}

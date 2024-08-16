import React from "react";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Cctv from "../../../components/CommandComponents/Cctv";
import Keamanan from "../../../components/CommandComponents/Ckeamanan";
import Panggilan from "../../../components/CommandComponents/Cpanggilan";
import Peringatan from "../../../components/CommandComponents/CPeringatan";
import Ogs from "../../../components/CommandComponents/Ogs";
import Bar from "../../../components/CommandComponents/Navbar";

function index() {
  return (
    <Box
      sx={{
        height: "1000px",
        display: "fluid",
        marginTop: "5px",
        justifyContent: "flex-start",
      }}
    >
      <Bar />
      <Box
        sx={{
          height: "3%",
        }}
      >
        <Stack direction="column">
          <Typography
            variant="h5"
            sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
          >
            COMMAND CENTER
          </Typography>
          <Stack
            direction="row"
            sx={{ marginBottom: 2, fontSize: 14, fontWeight: "bolder" }}
          >
            <Typography variant="h9" sx={{ color: "black" }}>
              Dashboard
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "40%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "10px",
          marginTop: "0px",
        }}
      >
        <Box
          sx={{
            width: "60%",
            marginRight: "40px",
          }}
        >
          <Cctv />
        </Box>

        <Box
          sx={{
            width: "20%",
            marginLeft: "30px",
            marginTop: "0px",
          }}
        >
          <Ogs />
        </Box>
      </Box>
      <Box
        sx={{
          height: "45%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "5px",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "33%",
            marginTop: "5px",
            marginLeft: "0px",
          }}
        >
          <Keamanan />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "30%",
            marginRight: "30px",
          }}
        >
          <Panggilan />
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "30%",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        >
          <Peringatan />
        </Box>
      </Box>
    </Box>
  );
}

export default index;

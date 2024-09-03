import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const InfoCard = ({ title, mobilCount, motorCount, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        textAlign: "center",
        mt: 2,
        border: "2px #9D9D9D",
      }}
    >
      <CardContent>
        <Typography
          sx={{ mb: 2, fontSize: "22px", fontWeight: "bold", color: "#171717" }}
        >
          {title}
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", color: "#3B2ECC" }}
            >
              Mobil
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "32px", color: "#3B2ECC" }}
            >
              {mobilCount}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", color: "#E200CB" }}
            >
              Motor
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "32px", color: "#E200CB" }}
            >
              {motorCount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

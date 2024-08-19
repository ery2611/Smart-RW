import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const VehicleList = ({ vehicles }) => {
  return (
    <List>
      {vehicles.map((vehicle, index) => (
        <ListItem key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
          <ListItemText
            primary={<Typography variant="body1">{vehicle.type}</Typography>}
            secondary={vehicle.plate}
          />
          <Typography variant="body2">{vehicle.status}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default VehicleList;

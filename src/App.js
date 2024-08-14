import mainRoutes from "../src/routes/routes";
import "./App.css";
import Header from "./components/CommandComponents/Header";
import Bar from "./components/CommandComponents/Navbar";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "row", // Arrange children in a row
          padding: "16px", // Optional: add some padding around the content
        }}
      >
        <Box
          sx={{
            width: "250px", // Set a fixed width for the sidebar
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>

        <Box
          sx={{
            flex: 1, // Allow Routes to take up the remaining space
            marginLeft: "5px", // Optional: add some space between the sidebar and the main content
            marginTop: "20px",
            maxHeight: "700px",
            marginBottom: "10px",
          }}
        >
          <Routes>
            {mainRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

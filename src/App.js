import Routes from "./routes";
import "./App.css";
import Header from "./components/Header";
import Bar from "./components/Navbar";
import { Box } from "@mui/material";

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
        >
          <Bar />
        </Box>
        
        <Box
          sx={{
            flex: 1,  // Allow Routes to take up the remaining space
            marginLeft: "30px", // Optional: add some space between the sidebar and the main content
            marginTop: '20px',
            maxHeight:'500px'
          }}
        >
          <Routes />
        </Box>
      </Box>
   </Box>
  );
}

export default App;

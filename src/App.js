import Routes from "./routes";
import "./App.css";
import Header from "./components/Header";
import Bar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#EFEFEF",
        minHeight: '100vh'  // Ensure the Box takes up at least the full viewport height
      }}
    >
      <Box
        sx={{
          flex: '0 1 auto',
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:'#EFEFEF',
        }}
      >
        <Header />
      </Box>
      
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
            marginTop: '20px'
          }}
        >
          <Routes />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

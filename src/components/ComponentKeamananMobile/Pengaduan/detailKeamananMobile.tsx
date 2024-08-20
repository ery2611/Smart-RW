import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const DetailModal: React.FC = () =>{
    return(
        <Container
        sx={{
            position: "absolute",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            width:'90%'
          }}
        >
            <Stack direction='column'>
                <Box display='flex' justifyContent='center' sx={{top:10,position:'fixed',right:0, left:0}}>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#00A9AD",
              }}
            >
              Terima Kasih
            </Typography>
                </Box>

                <Box display='flex' justifyContent='center' sx={{mt:5}}>
                <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Telah menanggapi aduan keamanan
            </Typography>
                </Box>
            </Stack>
        </Container>
    )
}

export default DetailModal;
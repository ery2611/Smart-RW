import React, { useState } from "react";
import { Box, Grid, Typography, Pagination, Container , PaginationItem,styled, backdropClasses } from '@mui/material';
import { BreakfastDining } from "@mui/icons-material";


const images = [
  { src: "path-to-image-1.jpg", title: "Gambar 1" },
  { src: "path-to-image-2.jpg", title: "Gambar 2" },
  { src: "path-to-image-3.jpg", title: "Gambar 3" },
  { src: "path-to-image-4.jpg", title: "Gambar 4" },
  { src: "path-to-image-5.jpg", title: "Gambar 5" },
  { src: "path-to-image-6.jpg", title: "Gambar 6" },
  { src: "path-to-image-7.jpg", title: "Gambar 7" },
  { src: "path-to-image-8.jpg", title: "Gambar 8" },
  { src: "path-to-image-9.jpg", title: "Gambar 9" },
  { src: "path-to-image-10.jpg", title: "Gambar 10" },
  { src: "path-to-image-11.jpg", title: "Gambar 11" },
  { src: "path-to-image-12.jpg", title: "Gambar 12" },
];

const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
      backgroundColor: 'none', // Warna latar belakang default
      '&.Mui-selected': {
        backgroundColor: '#00A9AD', // Warna latar belakang saat dipilih
        color: '#fff',
      },
      '&:hover': {
        backgroundColor: '#bdbdbd', // Warna latar belakang saat hover
      },
    },
  }));

const itemsPerPage = 8;

export default function WargaGallery() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    //div nya ggada stye nya juga gpp pip, sesuaiin aja ama warna halaman utama lu, di app atau dimana lu naruhnya, ama footerny
    <div style={{backgroundColor:'#cdcdcd'}}>
      <Container
        sx={{ maxWidth: "xl", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>GALERI RW 36 KEMANG PRATAMA</h3>
        </Box>
        <Box sx={{ width: "100%", padding: 1 , justifyContent: "center" }}>
          <Grid
            container
            spacing={1}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {displayedImages.map((image, index) => (
              <Grid item xs={3} key={index}>
                <Box sx={{ width: "270px" }}>
                  <Box
                    sx={{
                      width: "270px",
                      height: "270px",
                      backgroundColor: "#efefef",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Gambar memenuhi seluruh area Box
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: "#00A9AD",
                      fontSize: 16,
                      fontWeight: 600,
                      mt: 1,
                      textAlign: "left",
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4,mb:4 }}>
            <CustomPagination
              count={Math.ceil(images.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  components={{
                    previous: () => <span>Previous</span>,
                    next: () => <span>Next</span>,
                  }}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      textTransform: "capitalize", // Membuat teks jadi kapital di awal
                    },
                  }}
                />
              )}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
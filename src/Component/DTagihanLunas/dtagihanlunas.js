import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  Button,
  Grow,
  CardMedia,
  Collapse,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const bank = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/ed/a9/aa/eda9aabed661a98d62c5df2df6879258.jpg",
    title: "Bank BCA",
    details: "Bank BRI is a leading bank providing various financial services.",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/06/cara-dan-syarat-buka-rekening-mandiri-2024.webp?fit=1200%2C900&ssl=1",
    title: "Bank Mandiri",
    details:
      "Langkah-langkah: \n1. Buka aplikasi Livin \n2. Login dengan password \n3. Masuk ke fitur bayar \n4. Search “Smart RW” di pencarian dengan kode “00000” \n5. Masukkan nomor MVA diatas \n6. Menampilkan rincian tagihan yang harus dibayar \n7. Masukkan PIN \n8. Pembayaran selesai dan lunas",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBgruC8QG2apZZpFQjEI5JiO9fU7TITFPIA&s",
    title: "CIMB Niaga",
    details: "Bank BNI offers comprehensive banking solutions to customers.",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/474x/00/dc/bd/00dcbd8af09ef7a2ce05a789d07e1b40.jpg",
    title: "Bank BRI",
    details: "Bank BTN specializes in housing finance and mortgage services.",
  },
  {
    id: 5,
    image:
      "https://logowik.com/content/uploads/images/bni-bank-negara-indonesia8078.logowik.com.webp",
    title: "Bank BNI",
    details: "Bank Danamon provides a range of banking products and services.",
  },
  {
    id: 6,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjkMoMFZgoKetZt5SrDirUoX8fBDfL6pKVx7tzKoB9KEVA_dif5iOhQePKy3l2u6Sp2bH8BG5kL4DMZDmBki3yy1O_0Fbc4YM_OHu3u0Fv3L-ipnWBosPWjEBX3JVX8BnynSmjYPWE4RoQ/s500/bni%2520syariah.jpg",
    title: "Bank BNI Syariah",
    details: "Bank Danamon provides a range of banking products and services.",
  },
  {
    id: 7,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixWA3QFrcTOTrqj5Y1_ZNNeXYW8X1Kqz99E1OP8UQxRrqyk1f9yRRLgFk6ofhmpqS8y5bvtCVWudzR_SET7hhCJdPMoqcvaZ8f9OUcZWfr9Gh4O1blLklDOIUsa1E7762y0MkgspG5rq_KbsmVy_22IN_2UnZe922HhmDaD9AaDod1ow1xYpvQvVorbQ/w247-h320/Sea%20Bank%20Secondary%20Logo.png",
    title: "SeaBank",
    details: "Bank Danamon provides a range of banking products and services.",
  },
];

const eMoney = [
  {
    id: 1,
    image:
      "https://antinomi.org/wp-content/uploads/2022/03/logo-gopay-vector.png",
    title: "Go-Pay",
    details: "Bank BRI is a leading bank providing various financial services.",
  },
  {
    id: 2,
    image:
      "https://cdn.antaranews.com/cache/1200x800/2022/04/25/dana.jpg.webp",
    title: "DANA",
    details: "Bank BRI is a leading bank providing various financial services.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1vZ3NpzR3yjLc21TWaZZgMMe1LaSqVWI4g&s",
    title: "OVO",
    details: "Bank BRI is a leading bank providing various financial services.",
  },
  {
    id: 4,
    image:
      "https://www.jenius.com/assets/ico/richlink.jpg",
    title: "Jenius",
    details: "Bank BRI is a leading bank providing various financial services.",
  },
];

function ExpandableCard({ image, title, details }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: 750,
        margin: "0 auto",
        mb: 2,
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 121,
            height: 65,
            borderRadius: 3,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#AEAEAE",
          }}
          image={image}
          alt={title}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flex: "1 0 auto", paddingLeft: 2, textAlign: "left" }}>
            <Typography component="div" variant="h6" p={1} fontWeight="bold">
              {title}
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            marginRight: 1,
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Box
        sx={{
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
          maxHeight: expanded ? "500px" : "0px",
        }}
      >
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ height: "auto" }}
        >
          <CardContent>
            <Divider />
            <Typography
              variant="body1"
              color="#333333"
              textAlign="left"
              marginTop={1}
            >
              {details.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
}

function ExpandableEmoney({ image, title, details }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: 750,
        margin: "0 auto",
        mb: 2,
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 121,
            height: 65,
            borderRadius: 3,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: "#AEAEAE",
          }}
          image={image}
          alt={title}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ flex: "1 0 auto", paddingLeft: 2, textAlign: "left" }}>
            <Typography component="div" variant="h6" p={1} fontWeight="bold">
              {title}
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            marginRight: 1,
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Box
        sx={{
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
          maxHeight: expanded ? "500px" : "0px",
        }}
      >
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ height: "auto" }}
        >
          <CardContent>
            <Divider />
            <Typography
              variant="body1"
              color="#333333"
              textAlign="left"
              marginTop={1}
            >
              {details.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
}

export default function DetailTagihanLunas() {
  const Navigate = useNavigate();
  const BelumLunas = styled(Box)(({ theme }) => ({
    backgroundColor: "#FBE3E3",
    color: "#EE1717",
    padding: "4px 8px",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  }));

  return (
    <div>
      <Container
        maxWidth="md" // Mengatur ukuran maksimum container menjadi "md" (medium)
        sx={{
          maxWidth: "1200px", // Anda dapat menyesuaikan nilai ini untuk mengatur lebar maksimum container
          marginTop: 2,
          marginBottom: 2,
          fontFamily: "Montserrat, sans-serif",
          bgcolor: "#EFEFEF",
          padding: 1,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>DETAIL TAGIHAN</h3>
        </Box>

        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            justifyContent: "center",
            borderRadius: 2,
            mb: 1,
            pb: 1,
          }}
        >
          <CardContent>
            <Box>
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                mb={2}
                sx={{ fontWeight: "bold" }}
              >
                BANK TRANSFER
              </Typography>
              <Box sx={{ maxWidth: 750, margin: "0 auto", marginBottom: 2 }}>
                {bank.map(({ id, image, title, details }) => (
                  <ExpandableCard
                    key={id}
                    image={image}
                    title={title}
                    details={details}
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            justifyContent: "center",
            borderRadius: 2,
            mb: 1,
            mt:2,
            pb: 1,
          }}
        >
          <CardContent>
            <Box>
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                mb={2}
                sx={{ fontWeight: "bold" }}
              >
                E-MONEY
              </Typography>
              <Box sx={{ maxWidth: 750, margin: "0 auto", marginBottom: 2 }}>
                {eMoney.map(({ id, image, title, details }) => (
                  <ExpandableEmoney
                    key={id}
                    image={image}
                    title={title}
                    details={details}
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
          }}
        >
          <Button
            onClick={() => Navigate("/")}
            sx={{
              color: "#00a9ad",
              fontWeight: "bolder",
              border: "2px solid #00a9ad",
              mr: 2,
              "&:hover": {
                border: "2px solid #00a9ad",
                color: "#00a9ad",
              },
            }}
            variant="outlined"
          >
            KEMBALI
          </Button>
        </Box>
      </Container>
    </div>
  );
}

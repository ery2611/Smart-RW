import {
  Box,
  Card,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Bar from "../../../components/WargaComponents/Navbar";
import { useNavigate } from "react-router-dom";

const data = {
  peringatan: "BELUM LUNAS",
};

const getPeringatanColor = (peringatan) => {
  switch (peringatan) {
    case "SUDAH LUNAS":
      return {
        backgroundColor: "#DBF8DC",
        color: "#5AF411",
        fontWeight: "bold",
      };
    case "BELUM LUNAS":
      return {
        backgroundColor: "#FBE3E3",
        color: "#EE1717",
        fontWeight: "bold",
      };
    default:
      return {};
  }
};

const DetailIKK = () => {
  const Navigate = useNavigate();

  //? nantinya dapat diisi sesuai dengan tagihannya
  const [harga, Setharga] = useState(450000);
  const rupiah = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);

  // setting hari apa yang akan dituju, nantinya diambil dari data
  const targetDate = "2024-08-22T00:00:00";
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const targetDateObj = new Date(targetDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  //melakukan hitungan mundur
  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      if (difference > 1000 * 60 * 60 * 24) {
        // Lebih dari 24 jam
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // Kurang dari 24 jam
        timeLeft = {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
    } else {
      timeLeft = null;
    }

    return timeLeft;
  }

  //mengambil hari berdasarkan tanggalnya
  const getDayName = (date) => {
    const daysOfWeek = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ];
    return daysOfWeek[date.getDay()];
  };

  const getFormattedDate = (date, type) => {
    //mengambil format tanggal, c/: 22 agustus 2024
    if (type === "panjang") {
      const options = { day: "numeric", month: "long", year: "numeric" };
      return date.toLocaleDateString("id-ID", options);
    } //mengambil format tanggal 08/22/2024
    if (type === "singkat") {
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return date.toLocaleDateString(undefined, options);
    }
  };

  //mengambil format waktu dengan detik
  const getTimeName = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };

  //mengambil format waktu tanpa detik
  const getTimeNotSecond = (date) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <Box>
      <Bar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {/* Text pojok kiri atas */}
        <Box height="70px">
          <Stack direction="column" textAlign="left">
            <Typography
              variant="h5"
              sx={{
                marginBottom: 0,
                color: "#00A9AD",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              WARGA
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                IKK/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Detail Tagihan
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              textAlign: "center",
              background: "#EFEFEF",
              width: "80%",
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: "12px",
              mb: 2,
            }}
          >
            <Typography variant="h6">DETAIL TAGIHAN</Typography>

            {/* peringatan bayar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  SEGERA LAKUKAN PEMBAYARAN DALAM WAKTU
                </Typography>

                {/* menampilkan hari jika targetdata > 24 jam */}
                {timeLeft.days !== undefined && (
                  <Stack
                    direction="row"
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "end",
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.days}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Hari :
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.hours}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Jam :
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.minutes}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Menit :
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.seconds}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Detilk{" "}
                    </Typography>
                  </Stack>
                )}

                {/* jika targetdata <= 24 jam, maka tidak menampilkan hari */}
                {timeLeft.days === undefined && (
                  <Stack
                    direction="row"
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "end",
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.hours}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Jam :
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.minutes}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Menit :
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {timeLeft.seconds}
                    </Typography>
                    <Typography variant="h5" alignContent="end">
                      Detilk{" "}
                    </Typography>
                  </Stack>
                )}

                {/* menampilkan tulisan batas waktu pembayaran
                  c:/ (sebelum Rabu, 22 Agustus 2024, 23:59:59) */}
                <Stack sx={{ mt: 1 }}>
                  <Typography variant="h6">
                    (sebelum {getDayName(targetDateObj)},{" "}
                    {getFormattedDate(targetDateObj, "panjang")},{" "}
                    {getTimeName(targetDateObj)} )
                  </Typography>
                </Stack>

                <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
                  <Card sx={{ width: "60%", borderRadius: 3 }}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      NOMOR MANDIRI VIRTUAL ACCOUNT ANDA
                    </Typography>

                    <Container
                      sx={{
                        mt: 1,
                        background: "#EFEFEF",
                        width: "90%",
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                        p: 1,
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", color: "#00A9AD" }}
                      >
                        000000123456789
                      </Typography>

                      <IconButton sx={{ ml: 2 }}>
                        <FileCopyIcon sx={{ color: "#00A9AD", fontSize: 30 }} />
                      </IconButton>
                    </Container>
                    <Box sx={{ height: "10px" }} />
                  </Card>
                </Box>
                <Box sx={{ height: "20px" }} />
              </Card>
            </Box>

            {/* informasi informasi bencana */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI BENCANA
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Chip
                    label={data.peringatan}
                    sx={getPeringatanColor(data.peringatan)}
                  />
                  {/* awas akan di ganti dengan data.peringatan */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                      gap: "210px", // Mengatur jarak antar box
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Jenis Iuran
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Judul Iuran
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Tenggat Waktu
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="body1" color="#333333">
                        : Air
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : Iuran Air
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : {getFormattedDate(targetDateObj, "singkat")}
                      </Typography>
                      <Typography variant="body1" color="#A1A5B7" ml={1}>
                        {getTimeNotSecond(targetDateObj)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "fluid",
                      justifyContent: "flex-start",
                      mt: 1,
                    }}
                  >
                    <Typography variant="body1" color="#A0A1A4">
                      Keterangan
                    </Typography>
                    <Typography variant="body1" color="#333333">
                      Lorem Ipsum
                      {/* data.lokasi */}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                      gap: "240px", // Mengatur jarak antar box
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Total Iuran
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="body1" color="#333333">
                        : {rupiah}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ height: "10px" }} />
              </Card>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Card
                sx={{
                  width: "85%",
                  borderRadius: "12px",
                  justifyContent: "center",

                  display: "fluid",
                  height: "130px",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginTop: "15px" }}
                >
                  CARA PEMBAYARAN
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#00A9AD",
                    color: "white",
                    width: "300px",
                    marginTop: "10px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#00A9AD",
                      color: "white",
                      width: "300px",
                      marginTop: "10px",
                      borderRadius: "5px",
                    },
                  }}
                >
                  LIHAT CARA PEMBAYARAN
                </Button>
              </Card>
            </Box>
            {/* unntuk button */}
            <Box sx={{ display: "flex", justifyContent: "end", mt: 2, mr: 2 }}>
              <Button
                onClick={() => Navigate("/Warga/Ikk")}
                sx={{
                  color: "#00a9ad",
                  fontWeight: "bolder",
                  border: "2px solid #00a9ad",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailIKK;

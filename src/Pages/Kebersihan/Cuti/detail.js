import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material"
import { useState } from "react";
import {data} from './index'
import { useNavigate, useParams } from "react-router";


//?Fungsinya untuk menampilkan warna pada saat dipanggil oleh chip
const getStatus = (status) => {
    switch (status) {
      case "DITERIMA":
        return {
          backgroundColor: "#DBF8DC",
          color: "#5AF411",
          fontWeight: "bold",
        };
      case "BELUM DITERIMA":
        return {
          backgroundColor: "#FFF6CB",
          color: "#FFE152",
          fontWeight: "bold",
        };
      case "DITOLAK":
        return {
          backgroundColor: "#FBE3E3",
          color: "#EE1717",
          fontWeight: "bold",
        };
    }
  };

const DetailCuti = ()=> {
  //? mengambil id dari url
  const {id} = useParams()

  //!untuk menyesuaikan data(langsung bisa ambil)
  //?Parse untuk menyesuaikan id dengan url id
  const getData = data? data.find(item=> item.id=== parseInt(id)) : null

  const navigate = useNavigate()

  //?Keterangan agar jika akses status berbeda, tampilan yang keluar juga berbeda
  const [Keterangan, setKeterangan] = useState(getData.status);


    return(
        <Box>
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
              KEBERSIHAN
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Cuti/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Detail Cuti
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            }}
          >
            <Typography variant="h6">DETAIL CUTI</Typography>

            {/*CARD INFORMASI CUTI  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI CUTI
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Chip
                    label={Keterangan}
                    sx={getStatus(Keterangan)}
                  />
                  {/* awas akan di ganti dengan data.peringatan */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Menyelaraskan item dengan awal (atas)
                      gap: "80px", // Mengatur jarak antar box
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width:'30%',
                      }}
                    >
                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Petugas Kebersihan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Tanggal Pengajuan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Waktu Pengajuan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Tanggal Mulai Cuti
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#A0A1A4"
                        sx={{ mt: 1 }}
                      >
                        Tanggal Selesai Cuti
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="body1" color="#333333">
                        : {getData.nama}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : {getData.tanggal_pengajuan}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : {getData.jam_pengajuan}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : --/--/--
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#333333"
                        sx={{ mt: 1 }}
                      >
                        : --/--/--
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

                </Box>
                <Box sx={{ height: "10px" }} />
              </Card>
            </Box>

            {/* Card diterima atau tidak */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
              <Typography marginTop="10px" variant='body1' sx={{fontWeight:"bold" ,width:'100%', textAlign:'start', ml:2, fontFamily: "Montserrat, sans-serif"}}>
                  {Keterangan}
                </Typography>

                {Keterangan == 'DITOLAK' | 'DITERIMA' && (
                <Stack direction='row' spacing={0.5} sx={{mt:1,ml:2,mb:2, textAlign:'left'}}>
                <Typography 
                variant="body1"
                color="#333333"
                >
                  Cuti petugas kebersihan {getData.nama} 
                </Typography>
                <Typography 
                variant="body1"
                color="#333333"
                textTransform='lowercase'
                >
                 {Keterangan}.
                </Typography>
                </Stack>
                )||Keterangan === "BELUM DITERIMA" && (
                  <Stack direction='row' spacing={0.5} sx={{mt:1,ml:2,mb:2, textAlign:'left'}}>
                <Typography 
                variant="body1"
                color="#333333"
                >
                  Apakah anda ingin menerima cuti dari petugas kebersihan {getData.nama} ?
                </Typography>
                </Stack>
                )} 


                {Keterangan === "BELUM DITERIMA" && (
                   <Box sx={{ display: "flex", justifyContent: "flex-end", mr:2, mb:2 }}>
                   <Button
                     variant="contained"
                     onClick={()=> setKeterangan("DITERIMA")}
                     sx={{
                       marginRight: 2,
                       backgroundColor:'#5AF411',
                       "&:hover":{
                        backgroundColor:'#5AF411'
                       },
                     }}
                   >
                     Terima
                   </Button>
                   <Button
                     variant="contained"
                     onClick={()=> setKeterangan("DITOLAK")}
                     sx={{
                      backgroundColor:'#EE1717',
                      "&:hover":{
                       backgroundColor:'#EE1717'
                      },
                    }}
                   >
                     Tolak
                   </Button>
                 </Box>
                )}
              </Card>
            </Box>

            {/* Button kembali */}
            <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Memindahkan kotak ke kanan
            padding: 2,
          }}
        >
          <Button
          onClick={()=> navigate('/kebersihan/cuti')}
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
          </Box>
        </Box>
      </Box>
        </Box>
    )
}

export default DetailCuti
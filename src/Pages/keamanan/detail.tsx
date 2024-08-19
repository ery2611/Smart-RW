import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  getColor,
  LaporanWarga,
  Warga,
} from "../../Context/keamanan/laporan.tsx";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DetailModal from "../../Component/detailKeamananModal/detailModal.tsx";

const pengaduan: Warga[] = LaporanWarga();

const DetailPengaduan: React.FC = () => {
  const { id } = useParams();
  const getData = pengaduan
    ? pengaduan.find((item) => item.id === parseInt(`${id}`))
    : null;

    const [respon, setRespon] = useState(getData?.tanggapan)

    const navigate = useNavigate()

    //?function modal area
    const [openModal, setOpenModal] = useState(false)
    const handleOpen = () => {
        setOpenModal(true);
        setRespon("Sedang Ditanggap")
    }
    const handleClose = () => {
        setOpenModal(false)
    }

  return (
    <Box sx={{background:'#F0F0F0', height:'100vh'}}>
      {/* navbar */}
      <Card
        sx={{
          width: "100%",
          display: "flex",
          height: 54,
          alignContent: "center",
          boxShadow: 4,
          backgroundColor: "#FBFAFA",
        }}
      >
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            color: "#00A9AD",
            alignContent: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          PENGADUAN
        </Typography>
        <Box sx={{ alignContent: "center" }}>
          <Avatar src="/path-to-profile-pic.jpg" />
        </Box>
              
      </Card>

      {/* halaman utama */}
      <Container sx={{ maxWidth: "100%", width: "auto", mt: 3 }}>
        <Stack direction="column">

            {/* pembuat pengaduan */}
          <Box>
            <Typography
              sx={{
                color: "#00A9AD",
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Pembuat Pengaduan
            </Typography>
          </Box>

          {/* avatar dan keterangan lainnya */}
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <Avatar sx={{ width: 36, height: 36 }} />
              <Stack direction="column" sx={{ ml: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {getData?.nama}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#AEAEAE",
                  }}
                >
                  Warga
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" sx={{ mt: 0.5 }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "end",
                  }}
                >
                  {getData?.waktu_pengaduan}
                </Typography>
                <Typography sx={getColor(`${respon}`)}>
                  <i>{respon}</i>
                </Typography>
              </Stack>
            </Box>
          </Box>

          {/* alamat */}
          <Box>
            <Stack direction="row" spacing={1}>
              <LocationOnIcon
                sx={{ height: 20, width: 20, color: "#FE4646" }}
              />
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                }}
              >
                {getData?.alamat}
              </Typography>
            </Stack>
          </Box>

          {/* catatan pengaduan */}
          <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#00A9AD",
              }}
            >
              Catatan Pengaduan
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color: "#888888",
                alignContent: "end",
              }}
            >
              Keamanan
            </Typography>
          </Box>
          
          {/* Catatan pengaduna */}
          <Box>
            <Typography
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
            >
              {getData?.catatan}
            </Typography>
          </Box>

        </Stack>

              <Box sx={{mt:3,display:'flex', justifyContent:'center'}}>
        <Divider sx={{width:'80%',border:'1px solid #DEDEDE'}} />
              </Box>

        <Stack sx={{mt:2}}>
          <Box display='flex' justifyContent='space-between'>
          <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#00A9AD",
              }}
            >
              Petugas Keamanan
            </Typography>
            <Typography
            sx={{
                fontSize: "14px",
                fontFamily: "Montserrat, sans-serif",
                color:'#888888'
            }}>
                1 Petugas Siap
            </Typography>
          </Box>

          <Box sx={{display:'flex', justifyContent:'center',textAlign:'center',mt:15, mb:10}}>
            <Typography sx={{color:'#FE4646', fontWeight:'bold', fontSize:'15px', fontFamily: "Montserrat, sans-serif"}}>
                Pengaduan BELUM ditanggapi. <br/>
                Mohon tanggapi pengaduan.
            </Typography>
          </Box>

          {/* button fotter */}
          <Box sx={{bottom:30,left:50,right:50,position:'fixed',display:'flex', justifyContent:'space-between'}}>
            <Button onClick={()=> navigate('/keamanan')} variant='outlined' sx={{width:100, height:36, color:'#00A9AD'}}>Kembali</Button>
            <Button onClick={()=> handleOpen()} variant='contained' sx={{width:100, height:36, backgroundColor:'#00A9AD', ":hover":{backgroundColor:'#00A9AD'}}}>Tanggapi</Button>
          </Box>
        </Stack>
      </Container>

      {/* modal kesayangan kita */}
      <Modal open={openModal} onClose={handleClose}>
        <Container>
            <DetailModal/>
        </Container>
      </Modal>
    </Box>
  );
};

export default DetailPengaduan;

import { ArrowBack, Email, Phone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import {PendingActionsOutlined, LogoutOutlined} from '@mui/icons-material';
import React, { ChangeEventHandler, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  getColor,
  LaporanWarga,
  currentPertugas
} from "../../../context/KeamananMobile/pengaduan/index.tsx";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DetailModal from "../../../components/ComponentKeamananMobile/Pengaduan/detailKeamananMobile.tsx";
import InputDetail from "../../../components/ComponentKeamananMobile/Pengaduan/input.tsx";
import LaporanSelesai from "../../../components/ComponentKeamananMobile/Pengaduan/LaporanSelesai.tsx";
import FooterKeamanan from "../../../components/ComponentKeamananMobile/Pengaduan/footer.tsx";

const pengaduan = LaporanWarga();
const dataPetugas = currentPertugas();

const DetailPengaduan: React.FC = () => {
  const { id } = useParams();
  const getDataPetugas = dataPetugas.find(person => person.nama = "Rafif Yulistian")
  const getDataWarga = pengaduan
    ? pengaduan.find((item) => item.id === parseInt(`${id}`))
    : null;
    const date = new Date();


  const [respon, setRespon] = useState(getDataWarga?.tanggapan);
  const [nowTime, setNowTime] = useState<string | undefined>(getDataPetugas?.waktu_masuk)
  const [waktuSelesai, setWaktuSelesai] = useState<string | undefined>("--:--");
  const [uploadLaporan, setUploadLaporan] = useState<string | null>(null)
  const [foto, setFoto] = useState<string | ArrayBuffer | null>(null)
  const [messagePetugas , setMeesagePetugas] = useState<string | null>(null)
  
  const scrollRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate();

  //?function modal area
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpen = (props: string) => {
    const currentTime = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute:'2-digit'
    })
    switch (props) {
      case "Tanggapan":
          setOpenModal(true);
          setRespon("Sedang Ditanggap");
          setNowTime(currentTime)
          break;
      case "Selesai":
        setRespon("Selesai");
        setWaktuSelesai(currentTime)
        break;
      case "Laporan":
        setUploadLaporan("Input Access")
        scrollRef.current?.scrollIntoView({behavior:'smooth'})
        break;
      case "Buat Tanggapan":
        setUploadLaporan("Input Success")
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleFileClick = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const selectedFile = e.target.files?.[0];
    
    if(selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFoto(reader.result);
      }
      reader.readAsDataURL(selectedFile);
    }
  }
  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (e)=> {
    setMeesagePetugas(e.target.value)
  }

  return (
    <Box sx={{ background: "#F0F0F0", height:'auto', minHeight:'100vh' }}>
      {/* navbar */}
     

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
                  {getDataWarga?.nama}
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
                  {getDataWarga?.waktu_pengaduan}
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
                {getDataWarga?.alamat}
              </Typography>
            </Stack>
          </Box>

          {/* catatan pengaduan atas */}
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

          {/* Catatan pengaduan tulisan */}
          <Box>
            <Typography
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}
            >
              {getDataWarga?.catatan}
            </Typography>
          </Box>

        </Stack>

        {/* GARIS */}
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Divider sx={{ width: "80%", border: "1px solid #DEDEDE" }} />
        </Box>

         {/* Jika belum ditanggapi, dia akan bisa buat lapran 
         jika sedang / selesai, akan muncul petugas yang menangani*/}
        <Stack sx={{ mt: 2 }}>
        {respon === "Belum Ditanggapi"? (
          <Box>
          <Box display="flex" justifyContent="start">
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
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mt: 15,
              mb: 10,
            }}
          >
            <Typography
              sx={{
                color: "#FE4646",
                fontWeight: "bold",
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Pengaduan BELUM ditanggapi. <br />
              Mohon tanggapi pengaduan.
            </Typography>
          </Box>
        </Box>
        ): (respon === "Sedang Ditanggap" || respon === "Selesai")? (
          <Stack direction='column'>

            {/* tulisan absensi */}
            <Box>
              <Typography sx={{fontSize:'13px', fontFamily:'Montserrat, sans-serif'}}>Absensi</Typography>
            </Box>

            {/* JAM MASUK DAN KELUAR */}
            <Box sx={{display:'flex', justifyContent:'space-between', mt:1, maxWidth:'500px', width:'60%'}}>
              <Stack direction='row'>
                <PendingActionsOutlined sx={{color:'#45B649'}}/>
                <Typography sx={{ml:1, fontSize:'13px', fontFamily:'Montserrat, sans-serif', alignContent:'center' }}>
                  {nowTime}
                </Typography>
              </Stack>
              <Stack direction='row'>
                <LogoutOutlined sx={{color:'#CE1305'}}/>
                <Typography sx={{ml:1, fontSize:'13px', fontFamily:'Montserrat, sans-serif', alignContent:'center' }}>
                  {waktuSelesai}
                </Typography>
              </Stack>
            </Box>

            {/* Petugas Keamanan */}
            <Box display="flex" justifyContent="start" sx={{mt:1}}>
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
          </Box>

            {/* Profile dan contact */}
            <Box display="flex" justifyContent="space-between" sx={{mt:1,}}>
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
                  {getDataPetugas?.nama}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#AEAEAE",
                  }}
                >
                  {getDataPetugas?.jabantan}
                </Typography>
              </Stack>
            </Box>
            <Box>
            <Stack direction="row" spacing={1} marginTop={0.5}>
              <IconButton sx={{width:'30px',height:'30px',background:'#00A9AD',":hover":{background:'#00A9AD'}}}>
                <Phone sx={{ color: "#FFFFFF" }} />
              </IconButton>
              <IconButton sx={{width:'30px',height:'30px',background:'#00A9AD',":hover":{background:'#00A9AD'}}}>
                <Email sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Stack>
            </Box>
          </Box>

          {/* media dan catatan dari petugas */}
          {uploadLaporan === "Input Access"? (
            <InputDetail kirimFoto={foto} handleFileClick={handleFileClick} handleChangeText={handleChangeText}/>
          ) : uploadLaporan === "Input Success"? (
            <LaporanSelesai kirimFoto={foto} pesan={messagePetugas}/>
          ): null}
          </Stack>
        ): null}

          {/* button fotter */}
            <FooterKeamanan respon={respon} uploadLaporan={uploadLaporan} handleOpen={handleOpen} navigate={navigate}/>

        </Stack>
        
      </Container>

      {/* modal kesayangan kita */}
      <Modal open={openModal} onClose={handleClose}>
        <Container>
          <DetailModal />
        </Container>
      </Modal>

    </Box>
  );
};

export default DetailPengaduan;
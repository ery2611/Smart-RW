import { Box, Card, Typography, Stack, Button, Chip } from "@mui/material";
import { useParams } from "react-router-dom";


const DetailEWS = ({dataList}) => {
  const { id } = useParams();
  const data = dataList ? dataList.find(item => item.id === parseInt(id)) : null;


  const getPeringatanColor = (peringatan) => {
    switch (peringatan) {
      case "WASPADA":
        return {
          backgroundColor: "#DBF8DC",
          color: "#5AF411",
          fontWeight: "bold",
        };
      case "SIAGA":
        return {
          backgroundColor: "#FFF6CB",
          color: "#FFE152",
          fontWeight: "bold",
        };
      case "AWAS":
        return {
          backgroundColor: "#FBE3E3",
          color: "#EE1717",
          fontWeight: "bold",
        };
      case "Siaga 1":
        return {
          background: "#CDFBE0",
          color: "#16E502",
          fontWeight: "bold",
        };
      case "Siaga 2":
        return {
          backgroundColor: "#FAF1C8",
          color: "#FED200",
          fontWeight: "bold",
        };
      case "Siaga 3":
        return {
          background: "#FDD399",
          color: "#FF9500",
          fontWeight: "bold",
        };
      case "Siaga 4":
        return {
          backgroundColor: "#D29A9A",
          color: "#CE1305",
          fontWeight: "bold",
        };
      default:
        return {};
    }
  };


  return (
    <Box sx={{}}>
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
              sx={{ marginBottom: 0, color: "#00A9AD", fontSize: 18 }}
            >
              COMMAND CENTER
            </Typography>
            <Stack direction="row" sx={{ marginBottom: 2, fontSize: 14 }}>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Dashboard/
              </Typography>
              <Typography variant="h8" sx={{ color: "#A0A1A4" }}>
                Early Warning System/
              </Typography>
              <Typography
                variant="h9"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Detail
              </Typography>
            </Stack>
                  
          </Stack>
        </Box>

        {/* subBencana = ambil keterangan dari informasi bencana */}
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
            <Typography variant="h6">DETAIL</Typography>
            {/* informasi cuaca */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI CUACA
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
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
                        <Typography variant="body1" color="#A0A1A4">
                          Cuaca
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#A0A1A4"
                          sx={{ mt: 1 }}
                        >
                          Suhu
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" color="#333333">
                          : {data.cuaca}
                          {/* mengambil dari data cuaca */}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#333333"
                          sx={{ mt: 1 }}
                        >
                          : {data.suhu}
                          {/* mengambil dari data suhu */}
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
                        Keterangan cuaca
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.ketCuaca}
                        {/* data.ketCuaca */}
                      </Typography>
                    </Box>
                </Box>
                <Box sx={{height:'10px'}}/>
              </Card>
            </Box>

            {/* informasi informasi bencana */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                height: "100%",
                overflowY: "auto",
              }}
            >
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
              <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI BENCANA
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Chip label={data.peringatan} sx={getPeringatanColor(data.peringatan)}/>
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
                          Judul
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#A0A1A4"
                          sx={{ mt: 1 }}
                        >
                          Jenis
                        </Typography>
                        <Typography variant="body1" color="#A0A1A4" sx={{ mt: 1 }}>
                          Tanggal
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#A0A1A4"
                          sx={{ mt: 1 }}
                        >
                          Waktu
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" color="#333333">
                          : {data.judulBencana}
                          {/* mengambil dari data.judulBencana */}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#333333"
                          sx={{ mt: 1 }}
                        >
                          : {data.bencana}
                          {/* mengambil dari data.bencana */}
                        </Typography>
                        <Typography variant="body1" color="#333333" sx={{ mt: 1 }}>
                          : {data.tanggal}
                          {/* mengambil dari data.tanggal*/}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#333333"
                          sx={{ mt: 1 }}
                        >
                          : {data.waktu}
                          {/* mengambil dari data.waktu */}
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
                        Lokasi Bencana
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.lokasi}
                        {/* data.lokasi */}
                      </Typography>
                    </Box>
                </Box>

                <Box sx={{height:'10px'}}/>
              </Card>
            </Box>
            {/* informasi informasi {data.bencana} */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
              <Typography marginTop="10px" variant="h6" fontWeight="bold" textTransform='uppercase' >
                  INFORMASI {data.bencana}
                  {/* data.bencana */}
                </Typography>

                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                <Chip label={data.siaga} sx={getPeringatanColor(data.siaga)}/>


                {data.bencana === "Banjir" && (
                  <Box
                      sx={{
                        mt:1,
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
                        <Typography variant="body1" color="#A0A1A4">
                          Tinggi Air
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#A0A1A4"
                          sx={{ mt: 1 }}
                        >
                          Curah Hujan
                        </Typography>
                        <Typography variant="body1" color="#A0A1A4" sx={{ mt: 1 }}>
                          Parameter Penentuan
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" color="#333333">
                          : {data.tinggiAir}
                          {/* mengambil dari data.tinggiAir */}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#333333"
                          sx={{ mt: 1 }}
                        >
                          : {data.curahHujan}
                          {/* mengambil dari data.curahHujan */}
                        </Typography>
                        <Typography variant="body1" color="#333333" sx={{ mt: 1 }}>
                          : {data.parameter}
                          {/* mengambil dari data.parameter*/}
                        </Typography>
                      </Box>
                    </Box>
                ) || data.bencana === 'Kebakaran' && (
                  <Box
                      sx={{
                        mt:1,
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
                        <Typography variant="body1" color="#A0A1A4">
                          Panas Api
                        </Typography>

                        <Typography
                          variant="body1"
                          color="#A0A1A4"
                          sx={{ mt: 1 }}
                        >
                          Status Api
                        </Typography>

                        <Typography variant="body1" color="#A0A1A4" sx={{ mt: 1 }}>
                          Parameter Penentuan
                        </Typography>

                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" color="#333333">
                          : {data.panasApi}
                          {/* mengambil dari data.panasApi */}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#333333"
                          sx={{ mt: 1 }}
                        >
                          : {data.statApi}
                          {/* mengambil dari data.statApi */}
                        </Typography>
                        <Typography variant="body1" color="#333333" sx={{ mt: 1 }}>
                          : {data.parameter}
                          {/* mengambil dari data.parameter*/}
                        </Typography>
                      </Box>
                    </Box>
                ) || data.bencana === 'Tanah Longsor' && (
                  <Box
                      sx={{
                        mt:1,
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
                        <Typography variant="body1" color="#A0A1A4">
                          Status Perbaikan
                        </Typography>

                        <Typography variant="body1" color="#A0A1A4" sx={{ mt: 1 }}>
                          Parameter Penentuan
                        </Typography>

                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="body1" color="#333333">
                          : {data.statPerbaikan}
                          {/* mengambil dari data.statPerbaikan */}
                        </Typography>
                    
                        <Typography variant="body1" color="#333333" sx={{ mt: 1 }}>
                          : {data.parameter}
                          {/* mengambil dari data.parameter*/}
                        </Typography>
                      </Box>
                    </Box>
                )}
                </Box>

                <Box sx={{height:'10px'}}/>
              </Card>
            </Box>
            {/* informasi Keterangan Bencana */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
              <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  KETERANGAN BENCANA
                </Typography>
                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                <Box
                      sx={{
                        display: "fluid",
                        justifyContent: "flex-start",
                        mt: 1,
                      }}
                    >
                      <Typography variant="body1" color="#A0A1A4">
                        Deskripsi Kondisi
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.deskKondisi}
                        {/* data.deskKondisi */}
                      </Typography>

                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Peringatan
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.deskPeringatan}
                        {/* data.deskPeringatan */}
                      </Typography>
                      
                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Tidakan Yang Perlu Diambil
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.deskTindakan}
                        {/* data.deskTindakan */}
                      </Typography>

                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Penyebab {data.bencana}
                        {/* data.bencana */}
                      </Typography>
                      <Typography variant="body1" color="#333333">
                        {data.deskPenyebab}
                        {/* data.deskPenyebab */}
                      </Typography>

                      <Typography mt={1} variant="body1" color="#A0A1A4">
                        Keterangan
                      </Typography>
                      <Typography variant="body1" color="#333333">
                      {data.deskKeterangan}
                        {/* data.deskKeterangan */}
                      </Typography>

                    </Box>
                </Box>
                <Box height='10px'/>
              </Card>
            </Box>
            {/* button submit dan batal */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                width: "93%",
                mt: 3,
              }}
            >
              <Box sx={{ width: "65%", textAlign: "end" }}>
                <Button
                  variant="outlined"
                  sx={{ height: 38, color: "#00A9AD", fontWeight:'bold' }}
                >
                  KEMBALI
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailEWS;

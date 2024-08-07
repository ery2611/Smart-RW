import {
  Box,
  Card,
  MenuItem,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const SmartCity = ({onTambah}) => {
  //informasi cuaca
  const [cuaca, setCuaca] = useState("");
  const [suhu, setSuhu] = useState("");
  const [ketCuaca, setKetCuaca] = useState("");

  //informasi setiap bencana
  //informasi bencana
  const [judulBencana, setJudulBencana] = useState("");
  const [bencana, setBencana] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [lokasi, setLokasi] = useState("");

  // hujan
  const [tinggiAir, setTinggiAir] = useState("");
  const [curahHujan, setCurahHujan] = useState("");

  //kebakaran
  const [panasApi, setPanasApi] = useState("");
  const [statApi, setStatApi] = useState("");

  //tanah longsor
  const [statPerbaikan, setStatPerbaikan] = useState("");

  //semua ada
  const [parameter, setParameter] = useState("");
  const [siaga, setSiaga] = useState('');

  //keterangan bencana
  const [deskKondisi, setDeskKondisi] = useState("");
  const [deskPeringatan, setDeskPeringatan] = useState("");
  const [deskTindakan, setDeskTindakan] = useState("");
  const [deskPenyebab, setDeskPenyebab] = useState("");
  const [deskKeterangan, setDeskKeterangan] = useState("");

  //context

  const handleChange = (e) => {
    setBencana(e.target.value);
  };

  const tambah = () => {
    if (onTambah) {
    onTambah({
      cuaca,
      suhu,
      ketCuaca,
      judulBencana,
      bencana,
      peringatan,
      tanggal,
      waktu,
      lokasi,
      tinggiAir,
      curahHujan,
      panasApi,
      statApi,
      statPerbaikan,
      parameter,
      deskKondisi,
      deskPeringatan,
      deskTindakan,
      deskPenyebab,
      deskKeterangan,
      siaga
    });

    setCuaca('');
    setSuhu('');
    setKetCuaca('');
    setJudulBencana('');
    setBencana('');
    setPeringatan('');
    setTanggal('');
    setWaktu('');
    setLokasi('');
    setTinggiAir('');
    setCurahHujan('');
    setPanasApi('');
    setStatApi('');
    setStatPerbaikan('');
    setParameter('');
    setDeskKondisi('');
    setDeskPeringatan('');
    setDeskTindakan('');
    setDeskPenyebab('');
    setDeskKeterangan('');
    setSiaga('');
    }
  };

  const navigate = useNavigate("");

  const cardPeringatan = [
    {
      value: "WASPADA",
      label: "WASPADA",
      status: "success",
    },
    {
      value: "SIAGA",
      label: "SIAGA",
      status: "warning",
    },
    {
      value: "AWAS",
      label: "AWAS",
      status: "erorr",
    },
  ];

  const cardBencana = [
    {
      value: "Banjir",
      label: "Banjir",
    },
    {
      value: "Kebakaran",
      label: "Kebakaran",
    },
    {
      value: "Tanah Longsor",
      label: "Tanah Longsor",
    },
  ];

  const cardCuaca = [
    {
      value: "Cerah",
    },
    {
      value: "Hujan",
    },
  ];

  const statusSiaga = [
    { value: "Siaga 1" },
    { value: "Siaga 2" },
    { value: "Siaga 3" },
    { value: "Siaga 4" },
  ];
  const statusApi = [
    { value: "Padam", status: "success" },
    { value: "Belum Padam", status: "error" },
  ];
  const statusLongsor = [
    { value: "Selesai Proses", status: "success" },
    { value: "Dalam Proses", status: "warning" },
    { value: "Belum Proses", status: "error" },
  ];

  const handleSubmit = () => {
    //
  };

  const handleCancel = (params) => {
    navigate(params);
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
                Form Peringatan Dini
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
            <Typography variant="h6">FORM PERINGATAN DINI</Typography>
            {/* informasi cuaca */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Card sx={{ width: "85%", borderRadius: "12px" }}>
                <Typography marginTop="10px" variant="h6" fontWeight="bold">
                  INFORMASI CUACA
                </Typography>

                {/* cuaca dan suhu agar bisa bersebelahan */}
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Box sx={{ ml: 1, width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">Cuaca</Typography>
                    <TextField
                      sx={{ width: "95%" }}
                      size="small"
                      variant="outlined"
                      onChange={(e)=>setCuaca(e.target.value)}
                      value={cuaca}
                      select
                    >
                      {cardCuaca.map((opsi) => (
                        <MenuItem key={opsi.value} value={opsi.value}>
                          {opsi.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                  <Box sx={{ mr: 1, width: "50%", textAlign: "left" }}>
                    <Typography variant="body1">Suhu</Typography>
                    <TextField
                      sx={{ width: "95%" }}
                      placeholder="Masukan suhu"
                      size="small"
                      variant="outlined"
                      value={suhu}
                      onChange={(e)=>setSuhu(e.target.value)}
                    >
                      {" "}
                    </TextField>
                  </Box>
                </Box>

                {/* keterangan cuaca */}
                <Box sx={{ width: "95%", mt: 1, ml: 1, textAlign: "left" }}>
                  <Typography variant="body1">Keterangan cuaca</Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    placeholder="Masukan keterangan cuaca"
                    variant="outlined"
                    multiline
                    value={ketCuaca}
                    onChange={(e)=>setKetCuaca(e.target.value)}
                    rows={3}
                  ></TextField>
                </Box>

                <Box marginTop="10px" />
              </Card>
            </Box>

            {/* informasi bencana */}
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

                <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                  <Typography sx={{ mt: 1 }} variant="body1">
                    Judul Bencana
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan judul bencana"
                    size="small"
                    variant="outlined"
                    value={judulBencana}
                    onChange={(e)=>setJudulBencana(e.target.value)}
                  ></TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Jenis Bencana
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Pilih Jenis Bencana"
                    size="small"
                    variant="outlined"
                    value={bencana}
                    onChange={(e)=>setBencana(e.target.value)}
                    select
                  >
                    {cardBencana.map((opsi) => (
                      <MenuItem key={opsi.value} value={opsi.value}>
                        {opsi.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Peringatan
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Pilih Peringatan"
                    size="small"
                    variant="outlined"
                    value={peringatan}
                    onChange={(e)=> setPeringatan(e.target.value)}
                    select
                  >
                    {cardPeringatan.map((opsi) => (
                      <MenuItem key={opsi.value} value={opsi.value}>
                        {opsi.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <Box sx={{ display: "flex", mt: 1 }}>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Tanggal</Typography>
                      <TextField
                        sx={{ width: "95%" }}
                        size="small"
                        variant="outlined"
                        type="date"
                        value={tanggal}
                        onChange={(e)=>setTanggal(e.target.value)}
                      ></TextField>
                    </Box>
                    <Box sx={{ width: "50%", textAlign: "left" }}>
                      <Typography variant="body1">Waktu</Typography>
                      <TextField
                        sx={{ width: "100%", color: "#00A9AD" }}
                        size="small"
                        variant="outlined"
                        type="time"
                        value={waktu}
                        onChange={(e)=>setWaktu(e.target.value)}
                      >
                        {" "}
                      </TextField>
                    </Box>
                  </Box>

                  <Typography sx={{ mt: 1 }} variant="body1">
                    Lokasi Bencana
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Masukan Lokasi Bencana"
                    size="small"
                    variant="outlined"
                    value={lokasi}
                    onChange={(e)=>setLokasi(e.target.value)}
                  ></TextField>

                  <Box marginTop="10px" />
                </Box>
              </Card>
            </Box>
            {/* informasi 'subBencana' */}
            {(bencana === "Kebakaran" && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Card sx={{ width: "85%", borderRadius: "12px" }}>
                  <Typography marginTop="10px" variant="h6" fontWeight="bold">
                    INFORMASI KEBAKARAN
                  </Typography>

                  <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                    <Box sx={{ display: "flex", mt: 1 }}>
                      <Box sx={{ width: "50%", textAlign: "left" }}>
                        <Typography variant="body1">Panas Api</Typography>
                        <TextField
                          sx={{ width: "95%" }}
                          label="Masukan Panas Api"
                          size="small"
                          variant="outlined"
                          value={panasApi}
                          onChange={(e)=>setPanasApi(e.target.value)}
                        ></TextField>
                      </Box>
                      <Box sx={{ width: "50%", textAlign: "left" }}>
                        <Typography variant="body1">Status Api</Typography>
                        <TextField
                          sx={{ width: "100%" }}
                          select
                          label="Masukan Status Api"
                          size="small"
                          variant="outlined"
                          value={statApi}
                          onChange={(e)=>setStatApi(e.target.value)}
                        >
                          {statusApi.map((opsi) => (
                            <MenuItem key={opsi.value} value={opsi.value}>
                              {opsi.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    </Box>

                    <Typography sx={{ mt: 1 }} variant="body1">
                      Status Sianga
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Status Siaga"
                      size="small"
                      variant="outlined"
                      value={siaga}
                      onChange={(e)=>setSiaga(e.target.value)}
                      select
                    >
                      {statusSiaga.map((opsi) => (
                        <MenuItem key={opsi.value} value={opsi.value}>
                          {opsi.value}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Parameter Penentuan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Parameter Penentuan"
                      size="small"
                      variant="outlined"
                      value={parameter}
                      onChange={(e)=>setParameter(e.target.value)}
                    ></TextField>

                    <Box marginTop="10px" />
                  </Box>
                </Card>
              </Box>
            )) ||
              (bencana === "Banjir" && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Card sx={{ width: "85%", borderRadius: "12px" }}>
                    <Typography marginTop="10px" variant="h6" fontWeight="bold">
                      INFORMASI BANJIR
                    </Typography>

                    <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                      <Box sx={{ display: "flex", mt: 1 }}>
                        <Box sx={{ width: "50%", textAlign: "left" }}>
                          <Typography variant="body1">Tinggi Air</Typography>
                          <TextField
                            sx={{ width: "95%" }}
                            label="Masukan Tinggi Air"
                            size="small"
                            variant="outlined"
                            value={tinggiAir}
                            onChange={(e)=>setTinggiAir(e.target.value)}
                          ></TextField>
                        </Box>
                        <Box sx={{ width: "50%", textAlign: "left" }}>
                          <Typography variant="body1">Curah Hujan</Typography>
                          <TextField
                            sx={{ width: "100%", color: "#00A9AD" }}
                            label="Masukan Curah Hujan"
                            size="small"
                            variant="outlined"
                            value={curahHujan}
                            onChange={(e)=>setCurahHujan(e.target.value)}
                          >
                            {" "}
                          </TextField>
                        </Box>
                      </Box>

                      <Typography sx={{ mt: 1 }} variant="body1">
                        Status Sianga
                      </Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Masukan Status Siaga"
                        size="small"
                        variant="outlined"
                        select
                        value={siaga}
                        onChange={(e)=>setSiaga(e.target.value)}
                      >
                        {statusSiaga.map((opsi) => (
                          <MenuItem key={opsi.value} value={opsi.value}>
                            {opsi.value}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Typography sx={{ mt: 1 }} variant="body1">
                        Parameter Penentuan
                      </Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Masukan Parameter Penentuan"
                        size="small"
                        variant="outlined"
                        value={parameter}
                        onChange={(e)=>setParameter(e.target.value)}
                      ></TextField>

                      <Box marginTop="10px" />
                    </Box>
                  </Card>
                </Box>
              )) ||
              (bencana === "Tanah Longsor" && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Card sx={{ width: "85%", borderRadius: "12px" }}>
                    <Typography marginTop="10px" variant="h6" fontWeight="bold">
                      INFORMASI TANAH LONGSOR
                    </Typography>

                    <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                      <Typography sx={{ mt: 1 }} variant="body1">
                        Status Perbaikan
                      </Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Masukan Status Perbaikan"
                        size="small"
                        variant="outlined"
                        select
                        value={statPerbaikan}
                        onChange={(e)=>setStatPerbaikan(e.target.value)}
                      >
                        {statusLongsor.map((opsi) => (
                          <MenuItem key={opsi.value} value={opsi.value}>
                            {opsi.value}
                          </MenuItem>
                        ))}
                      </TextField>

                      <Typography sx={{ mt: 1 }} variant="body1">
                        Status Sianga
                      </Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Masukan Status Siaga"
                        size="small"
                        variant="outlined"
                        select
                        value={siaga}
                        onChange={(e)=>setSiaga(e.target.value)}
                      >
                        {statusSiaga.map((opsi) => (
                          <MenuItem key={opsi.value} value={opsi.value}>
                            {opsi.value}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Typography sx={{ mt: 1 }} variant="body1">
                        Parameter Penentuan
                      </Typography>
                      <TextField
                        sx={{ width: "100%" }}
                        label="Masukan Parameter Penentuan"
                        size="small"
                        variant="outlined"
                        value={parameter}
                        onChange={(e)=>setParameter(e.target.value)}
                      ></TextField>

                      <Box marginTop="10px" />
                    </Box>
                  </Card>
                </Box>
              ))}
            {/* keterangan 'subBencana' */}
            {bencana && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Card sx={{ width: "85%", borderRadius: "12px" }}>
                  <Typography marginTop="10px" variant="h6" fontWeight="bold">
                    KETERANGAN BENCANA{" "}
                  </Typography>

                  <Box sx={{ mt: 2, ml: 1, width: "95%", textAlign: "left" }}>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Deskripsi Kondisi
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Deskripsi kondisi"
                      size="small"
                      variant="outlined"
                      value={deskKondisi}
                      onChange={(e)=>setDeskKondisi(e.target.value)}
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Peringatan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Peringatan"
                      size="small"
                      variant="outlined"
                      value={deskPeringatan}
                      onChange={(e)=>setDeskPeringatan(e.target.value)}
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Tindakan yang perlu diambil
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Tindakan"
                      size="small"
                      variant="outlined"
                      value={deskTindakan}
                      onChange={(e)=>setDeskTindakan(e.target.value)}
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Penyebab {bencana}
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Penyebab"
                      size="small"
                      variant="outlined"
                      value={deskPenyebab}
                      onChange={(e)=>setDeskPenyebab(e.target.value)}
                    ></TextField>
                    <Typography sx={{ mt: 1 }} variant="body1">
                      Keterangan
                    </Typography>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Masukan Keterangan"
                      size="small"
                      variant="outlined"
                      multiline
                      rows={3}
                      value={deskKeterangan}
                      onChange={(e)=>setDeskKeterangan(e.target.value)}
                    ></TextField>
                  </Box>

                  <Box marginTop="10px" />
                </Card>
              </Box>
            )}
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
                  variant="contained"
                  onClick={tambah}
                  sx={{ height: 38, background: "#00A9AD", mr: 3 }}
                >
                  SUBMIT
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleCancel("/");
                  }}
                  sx={{ height: 38, color: "#00A9AD" }}
                >
                  BATAL
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmartCity;

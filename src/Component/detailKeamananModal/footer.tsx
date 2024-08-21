import { Box, Button } from "@mui/material"
import React from "react"
import { NavigateFunction } from "react-router";

interface IFooterKeamanan {
    respon : string | undefined;
    uploadLaporan: string | null;
    navigate: NavigateFunction;
    handleOpen: (props : string) => void;
}

const FooterKeamanan: React.FC<IFooterKeamanan> = ({respon,uploadLaporan,handleOpen,navigate})=> {
    return(
        <Box>
            {respon === "Belum Ditanggapi" ? (
              <Box
              sx={{
                bottom: 30,
                left: 50,
                right: 50,
                position: "fixed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* button kembali */}
              <Button
              onClick={() => navigate("/keamanan")}
              variant="outlined"
              sx={{ width: 100, height: 36, color: "#00A9AD" }}
            >
              Kembali
            </Button>

              {/* Button Tanggapi */}
              <Button
                onClick={() => handleOpen("Tanggapan")}
                variant="contained"
                sx={{
                  width: 100,
                  height: 36,
                  backgroundColor: "#00A9AD",
                  ":hover": { backgroundColor: "#00A9AD" },
                }}
              >
                Tanggapi
              </Button>
            </Box>
              

            ) : respon === "Sedang Ditanggap" ? (
              <Box
              sx={{
                bottom: 30,
                left: 50,
                right: 50,
                position: "fixed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Button Kembali */}
              <Button
              onClick={() => navigate("/keamanan")}
              variant="outlined"
              sx={{ width: 100, height: 36, color: "#00A9AD" }}
            >
              Kembali
            </Button>

              {/* Button Selesai */}
              <Button
                onClick={() => handleOpen("Selesai")}
                variant="contained"
                sx={{
                  width: 100,
                  height: 36,
                  backgroundColor: "#CE1305",
                  ":hover": { backgroundColor: "#CE1305" },
                }}
              >
                Selesai
              </Button>
            </Box>

            ) : (respon === "Selesai" && uploadLaporan === null) ? (
              <Box
              sx={{
                bottom: 30,
                left: 50,
                right: 50,
                position: "fixed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Button Kembali */}
              <Button
              onClick={() => navigate("/keamanan")}
              variant="outlined"
              sx={{ width: 100, height: 36, color: "#00A9AD" }}
            >
              Kembali
            </Button>

              {/* Button Buat Laporan */}
              <Button
                onClick={() => handleOpen("Laporan")}
                variant="contained"
                sx={{
                  width: 150,
                  height: 36,
                  backgroundColor: "#00A9AD",
                  ":hover": { backgroundColor: "#00A9AD" },
                }}
              >
                Buat Laporan
              </Button>
            </Box>

            ): (respon === "Selesai" && uploadLaporan === "Input Access")? (
              <Box
              sx={{
                bottom: 30,
                left: 50,
                right: 50,
                position: "fixed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Button kembali */}
              <Button
              onClick={() => navigate("/keamanan")}
              variant="outlined"
              sx={{ width: 100, height: 36, color: "#00A9AD" }}
            >
              Kembali
            </Button>

              {/* Button Buat Laporan 2 */}
              <Button
                onClick={() => handleOpen("Buat Tanggapan")}
                variant="contained"
                sx={{
                  width: 150,
                  height: 36,
                  backgroundColor: "#00A9AD",
                  ":hover": { backgroundColor: "#00A9AD" },
                }}
              >
                Buat Laporan
              </Button>
            </Box>
            ): (respon==="Selesai" && uploadLaporan === "Input Success")? (
              <Box
              sx={{
                bottom: 30,
                right: 50,
                position: "fixed",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Button Kembali dikanan */}
              <Button
              onClick={() => navigate("/keamanan")}
              variant="contained"
              sx={{ width: 100, height: 36, backgroundColor: "#00A9AD", ":hover":{ backgroundColor:'#00A9AD'} }}
            >
              Kembali
            </Button>

            </Box>
            ): null}
        </Box>
    )
}

export default FooterKeamanan
import React from "react";

export const getColorSudahBelum = (prop: string, jenis?:string): React.CSSProperties => {
    const props = `${prop}-${jenis ?? 'undefined'}`
    switch(props){
        case "Sudah-undefined":
        case "Sudah-nominal":
        case "In-undefined":
        case "Ditanggapi-undefined":
            return {
                color:'#2ECC71',
                fontSize:'16px',
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
            }
        case "Belum-undefined":
        case "Out-undefined":
            return{
                color:'#F05A5A',
                fontSize:'16px',
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
            }
        case "Belum-nominal":
        case "Out-nominal":
            return{
                color:'#8C8C8C',
                fontSize:'16px',
                fontFamily: "Montserrat, sans-serif",
            }
        default:
            return{};
    }
}
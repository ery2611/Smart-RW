import React from "react";

export const getColorSudahBelum = (prop: string): React.CSSProperties => {
    switch(prop){
        case "Sudah":
        case "In":
        case "Ditanggapi":
            return {
                color:'#2ECC71',
                fontSize:'16px',
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
            }
        case "Belum":
        case "Out":
            return{
                color:'#F05A5A',
                fontSize:'16px',
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
            }
        default:
            return{};
    }
}
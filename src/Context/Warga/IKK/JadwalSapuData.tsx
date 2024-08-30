interface JadwalSapuData {
    id: number,
    hari:string;
    waktu: string;
    status:string;
}

export const DataJadwalSapu: JadwalSapuData[] = [
    {
        id:1,hari:'Senin',waktu:'08:10',status:'Sudah'
    },
    {
        id:2,hari:'Selasa',waktu:'08:10',status:'Belum'
    },
    {
        id:3,hari:'Rabu',waktu:'08:10',status:'Belum'
    },
    {
        id:4,hari:'Kamis',waktu:'08:10',status:'Belum'
    },
    {
        id:5,hari:'Jumat',waktu:'08:10',status:'Belum'
    },
    {
        id:6,hari:'Sabtu',waktu:'08:10',status:'Belum'
    },
    {
        id:7,hari:'Minggu',waktu:'08:10',status:'Belum'
    },
]
interface JadwalSatpamData {
    id: number
    waktu: string;
    status: string;
}

export const DataJadwalSatpam: JadwalSatpamData[] = [
    {id:1,waktu: '02:10', status:'Sudah'},
    {id:2,waktu: '08:10', status:'Sudah'},
    {id:3,waktu: '12:10', status:'Belum'},
    {id:4,waktu: '20:10', status:'Belum'},
]
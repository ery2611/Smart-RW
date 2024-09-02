interface PengaduanData {
    id: number,
    tanggal: Date;
    status : 'Ditanggapi' | 'Belum'
}

export const DataPengaduan: PengaduanData[] = [
    {id:1, tanggal: new Date('12/01/2024'), status:"Ditanggapi"},
    {id:2, tanggal: new Date('12/04/2024'), status:"Belum"},
]
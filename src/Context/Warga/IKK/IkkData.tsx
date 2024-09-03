//todo Bikin tanggal dan waktu itu dari new date
//todo buat nilai mata uang dari rupiah
//! Contoh di detail.js di ikk warga

//? IKK akan mencari bulan 1-6 semester 1
//? IKK akan mencari bulan 7-12 semester 2
//? Data dibedakan berdasarkan tahun

interface IkkData {
    id:number;
    tahun?: '2022' | '2023' | '2024' | '2025'
    bulan: 'Januari' | 'Febuari' | 'Maret' | 'April' | 'Mei' | 'Juni' | 'Juli' | 'Agustus' | 'September' | 'Oktober' | 'November' | 'Desember';
    nominal : number;
    status: 'Sudah' | 'Belum';
}

export const DataIkk: IkkData[] = [
    {id:1, bulan:'Januari', nominal:200000, status:'Sudah'},
    {id:2, bulan:'Febuari', nominal:200000, status:'Belum'},
    {id:3, bulan:'Maret', nominal:200000, status:'Belum'},
    {id:4, bulan:'April', nominal:200000, status:'Belum'},
    {id:5, bulan:'Mei', nominal:200000, status:'Belum'},
    {id:6, bulan:'Juni', nominal:200000, status:'Belum'},
    {id:7, bulan:'Juli', nominal:200000, status:'Belum'},
]
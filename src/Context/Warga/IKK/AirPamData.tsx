interface AirPamData {
    bulan: 'Januari' | 'Febuari' | 'Maret' | 'April' | 'Mei' | 'Juni' | 'Juli' | 'Agustus' | 'September' | 'Oktober' | 'November' | 'Desember';
    nominal: number | '-'
    status: 'Sudah' | 'Belum';
}

export const DataAirPam: AirPamData[] = [
    {bulan:'Januari', nominal:500000, status:'Sudah'},
    {bulan:'Febuari', nominal:'-', status:'Belum'},
    {bulan:'Maret', nominal:'-', status:'Belum'},
    {bulan:'April', nominal:'-', status:'Belum'},
    {bulan:'Mei', nominal:'-', status:'Belum'},
    {bulan:'Juni', nominal:'-', status:'Belum'},
    {bulan:'Juli', nominal:'-', status:'Belum'},
]
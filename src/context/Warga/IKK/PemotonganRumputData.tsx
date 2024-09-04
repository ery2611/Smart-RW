interface PemotonganRumputData {
    id: number
    tanggal: Date;
    waktu: string;
    status: string;
}

export const dataPemotonganRumput: PemotonganRumputData[] = [
    {
        id: 1,tanggal: new Date('12/01/2024'), waktu: '08:10', status:'Sudah'
    },
    {
        id:2 ,tanggal: new Date('12/04/2024'), waktu: '08:10', status:'Sudah'
    },
    {
        id:3,tanggal: new Date('12/07/2024'), waktu: '08:10', status:'Belum'
    },
    {
        id:4 ,tanggal: new Date('12/10/2024'), waktu: '08:10', status:'Belum'
    },
]
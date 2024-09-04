
interface kendaraanData {
    id: number;
    plat? : string;
    jenis? : String,
    status: 'In' | 'Out' 
}

export const DataKendaraan: kendaraanData[] = [
    {id:1, plat:'B 2238 KSL', jenis:'Motor', status:"In"},
    {id:2, plat:'B 3792 KJS', jenis:'Motor', status:"In"},
    {id:3, plat:'D 123 DEO', jenis:'Mobil', status:"Out"},
    {id:4, plat:'J 230 KJK', jenis:'Mobil', status:"Out"},
]

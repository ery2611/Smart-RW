
import React, { useState } from 'react';
import { Route, Routes, useNavigate,  } from 'react-router-dom';
import SmartCity from './Pages/EWS/SmartCity';
import TambahOGS from './Pages/OGS/tambahOGS';
import DetailEWS from './Pages/EWS/DetailEWS';
import EWS from './Pages/EWS/dashboardEWS';

import DashboardKeamanan from './Pages/Warga/Keamanan/dashboard';
import FormKeamananWarga from './Pages/Warga/Keamanan/Form';

import Pengumuman from './Pages/Warga/dashboard/pengumuman';

import FormPanggilan from './Pages/Warga/panggilanDarurat/formPanggilan';

import DetailIKK from './Pages/Warga/IKK/Detail';

const App=()=> {
  const [dataList, setDataList] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const addData = (newData) => {
    const newDataWithId = { ...newData, id: dataList.length + 1 };
    setDataList([...dataList, newDataWithId]);
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const navigate = useNavigate();
  return (
        
        <Routes>
          
          <Route exact path="*" element={<SmartCity/>}  />
          <Route path='/' element={<SmartCity onTambah={(data) => {
            addData(data);
            navigate('/dashboard')
          }}/>}/>
          <Route path='/ogs' element={<TambahOGS/>}/>
          <Route path='/detail/:id' element={<DetailEWS dataList={dataList} />}/>
          <Route path='/dashboard' element={<EWS dataList={dataList} onDetail={toggleDetail}/>}/>

          {/* WARGA */}
          <Route path='/formWarga' element={<FormKeamananWarga/>}/>
          <Route path='/dashboard2' element={<DashboardKeamanan/>}/>

          <Route path='/dashboard/pengumuman' element={<Pengumuman/>}/>

          <Route path='/panggilanDarurat/form' element={<FormPanggilan/>}/>

          <Route path='/detail2' element={<DetailIKK/>} />


          {/* Mungkin ada rute lain di sini */} 
          
          </Routes>
  );
}

export default App;

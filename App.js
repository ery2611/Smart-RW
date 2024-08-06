import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate,  } from 'react-router-dom';
import Utama from './Utama'
import Genre from './Genre'
import AcaraTV from './Components/acaraTV'
import BaruPopuler from './baruPopuler';
import SmartCity from './SmartCity';
import TambahOGS from './tambahOGS'
import DetailEWS from './DetailEWS';
import Rafif from './rafif';
import EWS from './dashboardEWS';


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
          
          <Route exact path="*" element={<Utama/>}  />
          <Route path='/acaratv' element={<Genre pageName='/acaratv'/>}/>
          <Route path='/film' element={<Genre pageName='/film'/>}/>
          <Route path='/latest' element={<BaruPopuler pageName='/latest'/>}/>
          <Route path='/ogs' element={<TambahOGS/>}/>


          <Route path='/smart' element={<SmartCity onTambah={(data) => {
            addData(data);
            navigate('/cek2')
          }}/>}/>
          
          <Route path='/detail/:id' element={<DetailEWS dataList={dataList} />}/>
          <Route path='/cek' element={<Rafif dataList={dataList} onDetail={toggleDetail}/>}/>
          <Route path='/cek2' element={<EWS dataList={dataList} onDetail={toggleDetail}/>}/>

          {/* Mungkin ada rute lain di sini */} 
          
          </Routes>
  );
}

export default App;

"use strict";(self.webpackChunksmartcity=self.webpackChunksmartcity||[]).push([[3593],{1459:(a,i,e)=>{e.d(i,{A:()=>c});e(5043);var t=e(4109),s=e(5721),n=e(1322),r=e(8734),o=e(3216),l=e(579);const c=()=>{const a=(0,o.Zp)(),i=(0,o.zy)(),e=a=>i.pathname===a;return(0,l.jsx)(t.Ay,{variant:"permanent",anchor:"left",sx:{"& .MuiDrawer-paper":{position:"absolute",top:100,width:240,boxSizing:"border-box",height:"450px",borderRadius:"10px"}},children:(0,l.jsxs)(s.A,{children:[(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga"),children:(0,l.jsx)(r.A,{primary:"Dashboard",sx:{color:e("/Warga")?"#00A9AD":"inherit",borderBottom:e("/Warga")?"1px solid #EFEFEF":"0px"}})}),(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga/Keamanan"),children:(0,l.jsx)(r.A,{primary:"Keamanan",sx:{color:e("/Warga/Keamanan")?"#00A9AD":"inherit",borderBottom:e("/Warga/Keamanan")?"1px solid #EFEFEF":"0px"}})}),(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga/Kebersihan"),children:(0,l.jsx)(r.A,{primary:"Kebersihan",sx:{color:e("/Warga/Kebersihan")?"#00A9AD":"inherit",borderBottom:e("/Warga/Kebersihan")?"1px solid #EFEFEF":"0px"}})}),(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga/Ikk"),children:(0,l.jsx)(r.A,{primary:"IKK",sx:{color:e("/Warga/Ikk")?"#00A9AD":"inherit",borderBottom:e("/Warga/Ikk")?"1px solid #EFEFEF":"0px"}})}),(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga/Ews"),children:(0,l.jsx)(r.A,{primary:"Early Warning System",sx:{color:e("/Warga/Ews")?"#00A9AD":"inherit",borderBottom:e("/Warga/Ews")?"1px solid #EFEFEF":"0px"}})}),(0,l.jsx)(n.Ay,{button:!0,onClick:()=>a("/Warga/Panggilan"),children:(0,l.jsx)(r.A,{primary:"Panggilan Darurat",sx:{color:e("/Warga/Panggilan")?"#00A9AD":"inherit",borderBottom:e("/Warga/Panggilan")?"1px solid #EFEFEF":"0px"}})})]})})}},3593:(a,i,e)=>{e.r(i),e.d(i,{default:()=>B});var t=e(5043),s=e(8911),n=e(5865),r=e(9252),o=e(6446),l=e(4056),c=e(2016),A=e(262),d=e(6506),g=e(2788),x=e(9650),h=e(3336),m=e(1806),j=e(4882),u=e(8076),f=e(2420),b=e(3460),p=e(3845),y=e(7392),W=e(9135),k=e(6614),S=e(3216),M=e(579);const C=[{id:1,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"9000",siaga2:"9000",siaga3:"9000",siaga4:"9000",tinggi_air:"6",status:"NORMAL"},{id:2,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"2000",siaga2:"1500",siaga3:"800",siaga4:"1",tinggi_air:"9",status:"NORMAL"},{id:3,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"9000",siaga2:"9000",siaga3:"9000",siaga4:"9000",tinggi_air:"6",status:"NORMAL"},{id:4,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"9000",siaga2:"9000",siaga3:"9000",siaga4:"9000",tinggi_air:"6",status:"NORMAL"},{id:5,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"9000",siaga2:"9000",siaga3:"9000",siaga4:"9000",tinggi_air:"6",status:"NORMAL"},{id:6,lokasi:"Sungai Kemang Pratama",tanggal:"23/12/2024",jam:"05:00",siaga1:"9000",siaga2:"9000",siaga3:"9000",siaga4:"9000",tinggi_air:"6",status:"NORMAL"}],w=a=>{switch(a){case"NORMAL":return{backgroundColor:"#DBF8DC",color:"#5AF411",fontWeight:"bold"};case"WASPADA":return{backgroundColor:"#FBE3E3",color:"#EE1717",fontWeight:"bold"};default:return{}}},F=(a,i)=>a?a.length<=i?a:a.substring(0,i)+"<br>":"",v=()=>{const[a,i]=(0,t.useState)(1),[e,r]=(0,t.useState)(""),[o,l]=(0,t.useState)(""),c=(0,S.Zp)(),A=C.slice(4*(a-1),4*a);return(0,M.jsxs)("div",{children:[(0,M.jsxs)(s.A,{direction:"row",spacing:2,alignItems:"center",sx:{marginBottom:2},children:[(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Tanggal"}),(0,M.jsx)(g.A,{value:e,onChange:a=>r(a.target.value),size:"small",type:"date",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Jam"}),(0,M.jsx)(g.A,{value:o,onChange:a=>l(a.target.value),size:"small",type:"time",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"row",spacing:.5,sx:{color:"#A1A5B7",fontFamily:"montserrat"},children:[(0,M.jsx)(n.A,{children:" Showing"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",A.length," Item"]}),(0,M.jsx)(n.A,{children:" from"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",C.length," Result "]})]})]}),(0,M.jsx)(x.A,{component:h.A,sx:{flexGrow:1},children:(0,M.jsxs)(m.A,{children:[(0,M.jsx)(j.A,{children:(0,M.jsxs)(u.A,{children:[(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"NO"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"LOKASI"}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TANGGAL &",(0,M.jsx)("br",{})," WAKTU"]}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"SIAGA 1"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"SIAGA 2"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"SIAGA 3"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"SIAGA 4"}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TINGGI ",(0,M.jsx)("br",{}),"AIR"]}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"STATUS"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"AKSI"})]})}),(0,M.jsx)(b.A,{children:A.map((a=>(0,M.jsxs)(u.A,{sx:{marginBottom:2,display:"table-row",borderBottom:"none"},children:[(0,M.jsx)(f.A,{children:a.id}),(0,M.jsx)(f.A,{children:a.lokasi}),(0,M.jsx)(f.A,{children:(0,M.jsxs)(s.A,{direction:"column",alignItems:"left",children:[(0,M.jsx)("span",{children:a.tanggal}),(0,M.jsx)("span",{style:{color:"#A1A5B7"},children:a.jam})]})}),(0,M.jsx)(f.A,{children:a.siaga1}),(0,M.jsx)(f.A,{children:a.siaga2}),(0,M.jsx)(f.A,{children:a.siaga3}),(0,M.jsx)(f.A,{children:a.siaga4}),(0,M.jsx)(f.A,{children:F(a.tinggi_air,40)}),(0,M.jsx)(f.A,{children:(0,M.jsx)(p.A,{label:F(a.status,40),sx:w(a.status)})}),(0,M.jsx)(f.A,{children:(0,M.jsx)(y.A,{onClick:()=>c("/Warga/Ews/DetailCurahHujan"),"aria-label":"Example",children:(0,M.jsx)(k.A,{sx:{color:"#00A9AD"}})})})]},a.id)))})]})}),(0,M.jsx)(s.A,{direction:"row",justifyContent:"center",sx:{marginTop:2},children:(0,M.jsx)(W.A,{count:Math.ceil(C.length/4),page:a,onChange:(a,e)=>{i(e)},sx:{"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"#00A9AD",color:"#fff"}}})})]})},P=[{id:1,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"3",beroperasi:"0",disiagakan:"3"},{id:2,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"1",beroperasi:"0",disiagakan:"1"},{id:3,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"3",beroperasi:"0",disiagakan:"3"},{id:4,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"2",beroperasi:"0",disiagakan:"2"},{id:5,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"3",beroperasi:"0",disiagakan:"3"},{id:6,lokasi:"Sungai Kemang Pratama",cuaca:"Terang",tanggal:"23/12/2024",jam:"05:00",total_pompa:"3",beroperasi:"0",disiagakan:"3"}],T=()=>{const[a,i]=(0,t.useState)(1),[e,r]=(0,t.useState)(""),[o,l]=(0,t.useState)(""),c=(0,S.Zp)(),A=P.slice(4*(a-1),4*a);return(0,M.jsxs)("div",{children:[(0,M.jsxs)(s.A,{direction:"row",spacing:2,alignItems:"center",sx:{marginBottom:2},children:[(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Tanggal"}),(0,M.jsx)(g.A,{value:e,onChange:a=>r(a.target.value),size:"small",type:"date",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Jam"}),(0,M.jsx)(g.A,{value:o,onChange:a=>l(a.target.value),size:"small",type:"time",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"row",spacing:.5,sx:{color:"#A1A5B7",fontFamily:"montserrat"},children:[(0,M.jsx)(n.A,{children:" Showing"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",A.length," Item"]}),(0,M.jsx)(n.A,{children:" from"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",P.length," Result "]})]})]}),(0,M.jsx)(x.A,{component:h.A,sx:{flexGrow:1},children:(0,M.jsxs)(m.A,{children:[(0,M.jsx)(j.A,{children:(0,M.jsxs)(u.A,{children:[(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"NO"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"LOKASI"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"CUACA"}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TANGGAL &",(0,M.jsx)("br",{})," WAKTU"]}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TOTAL ",(0,M.jsx)("br",{})," POMPA"]}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"BEROPERASI"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"DISIAGAKAN"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"AKSI"})]})}),(0,M.jsx)(b.A,{children:A.map((a=>(0,M.jsxs)(u.A,{sx:{marginBottom:2,display:"table-row",borderBottom:"none"},children:[(0,M.jsx)(f.A,{children:a.id}),(0,M.jsx)(f.A,{children:a.lokasi}),(0,M.jsx)(f.A,{children:a.cuaca}),(0,M.jsx)(f.A,{children:(0,M.jsxs)(s.A,{direction:"column",alignItems:"left",children:[(0,M.jsx)("span",{children:a.tanggal}),(0,M.jsx)("span",{style:{color:"#A1A5B7"},children:a.jam})]})}),(0,M.jsx)(f.A,{children:a.total_pompa}),(0,M.jsx)(f.A,{children:a.beroperasi}),(0,M.jsx)(f.A,{children:a.disiagakan}),(0,M.jsx)(f.A,{children:(0,M.jsx)(y.A,{onClick:()=>c("/Warga/Ews/DetailPompaAir"),"aria-label":"Example",children:(0,M.jsx)(k.A,{sx:{color:"#00A9AD"}})})})]},a.id)))})]})}),(0,M.jsx)(s.A,{direction:"row",justifyContent:"center",sx:{marginTop:2},children:(0,M.jsx)(W.A,{count:Math.ceil(P.length/4),page:a,onChange:(a,e)=>{i(e)},sx:{"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"#00A9AD",color:"#fff"}}})})]})},I=[{id:1,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"40 cm",status:"NORMAL"},{id:2,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"80 cm",status:"NORMAL"},{id:3,lokasi:"Sungai Kemang Pratama",kategori:"Pos Pengamatan",tanggal:"23/12/2024",jam:"05:00",cuaca:"Mendung",tinggi_air:"250 cm",status:"NORMAL"},{id:4,lokasi:"Sungai Kemang Pratama",kategori:"Pos Pengamatan",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"178 cm",status:"WASPADA"},{id:5,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"40 m",status:"NORMAL"},{id:6,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"40 m",status:"NORMAL"},{id:7,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"40 m",status:"NORMAL"},{id:8,lokasi:"Sungai Kemang Pratama",kategori:"Pintu Air",tanggal:"23/12/2024",jam:"05:00",cuaca:"Terang",tinggi_air:"40 m",status:"NORMAL"}],K=a=>{switch(a){case"NORMAL":return{backgroundColor:"#DBF8DC",color:"#5AF411",fontWeight:"bold"};case"WASPADA":return{backgroundColor:"#FBE3E3",color:"#EE1717",fontWeight:"bold"};default:return{}}},E=(a,i)=>a?a.length<=i?a:a.substring(0,i)+"<br>":"",D=()=>{const[a,i]=(0,t.useState)(1),[e,r]=(0,t.useState)(""),[o,l]=(0,t.useState)(""),c=(0,S.Zp)(),A=I.slice(4*(a-1),4*a);return(0,M.jsxs)("div",{children:[(0,M.jsxs)(s.A,{direction:"row",spacing:2,alignItems:"center",sx:{marginBottom:2},children:[(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Tanggal"}),(0,M.jsx)(g.A,{value:e,onChange:a=>r(a.target.value),size:"small",type:"date",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Jam"}),(0,M.jsx)(g.A,{value:o,onChange:a=>l(a.target.value),size:"small",type:"time",sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{justifyContent:"flex-start",children:"Kategori"}),(0,M.jsx)(g.A,{size:"small",select:!0,sx:{width:179,height:38}})]}),(0,M.jsxs)(s.A,{direction:"row",spacing:.5,sx:{color:"#A1A5B7",fontFamily:"montserrat"},children:[(0,M.jsx)(n.A,{children:" Showing"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",A.length," Item"]}),(0,M.jsx)(n.A,{children:" from"}),(0,M.jsxs)(n.A,{fontWeight:"bold",children:[" ",I.length," Result "]})]})]}),(0,M.jsx)(x.A,{component:h.A,sx:{flexGrow:1},children:(0,M.jsxs)(m.A,{children:[(0,M.jsx)(j.A,{children:(0,M.jsxs)(u.A,{children:[(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"NO"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"LOKASI"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"KATEGORI"}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TANGGAL &",(0,M.jsx)("br",{})," WAKTU"]}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"CUACA"}),(0,M.jsxs)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:["TINGGI ",(0,M.jsx)("br",{}),"AIR"]}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"STATUS"}),(0,M.jsx)(f.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"AKSI"})]})}),(0,M.jsx)(b.A,{children:A.map((a=>(0,M.jsxs)(u.A,{sx:{marginBottom:2,display:"table-row",borderBottom:"none"},children:[(0,M.jsx)(f.A,{children:a.id}),(0,M.jsx)(f.A,{children:a.lokasi}),(0,M.jsx)(f.A,{children:a.kategori}),(0,M.jsx)(f.A,{children:(0,M.jsxs)(s.A,{direction:"column",alignItems:"left",children:[(0,M.jsx)("span",{children:a.tanggal}),(0,M.jsx)("span",{style:{color:"#A1A5B7"},children:a.jam})]})}),(0,M.jsx)(f.A,{children:a.cuaca}),(0,M.jsx)(f.A,{children:E(a.tinggi_air,40)}),(0,M.jsx)(f.A,{children:(0,M.jsx)(p.A,{label:E(a.status,40),sx:K(a.status)})}),(0,M.jsx)(f.A,{children:(0,M.jsx)(y.A,{onClick:()=>c("/Warga/Ews/DetailTinggiMukaAir"),"aria-label":"Example",children:(0,M.jsx)(k.A,{sx:{color:"#00A9AD"}})})})]},a.id)))})]})}),(0,M.jsx)(s.A,{direction:"row",justifyContent:"center",sx:{marginTop:2},children:(0,M.jsx)(W.A,{count:Math.ceil(I.length/4),page:a,onChange:(a,e)=>{i(e)},sx:{"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"#00A9AD",color:"#fff"}}})})]})};var R=e(1459);const B=()=>{const[a,i]=t.useState("1"),e=new Date,g=e.toLocaleString("id-ID",{weekday:"long"}),x=e.toLocaleString("id-ID",{day:"2-digit"}),h=e.toLocaleString("id-ID",{month:"2-digit"}),m=e.getFullYear(),j="".concat(g,", ").concat(x," / ").concat(h," / ").concat(m);return(0,M.jsxs)("div",{children:[(0,M.jsx)(R.A,{}),(0,M.jsxs)(s.A,{direction:"column",children:[(0,M.jsx)(n.A,{variant:"h5",sx:{marginBottom:0,color:"#00A9AD",fontSize:18},children:"WARGA"}),(0,M.jsxs)(s.A,{direction:"row",sx:{marginBottom:2,fontSize:14},children:[(0,M.jsx)(n.A,{variant:"h8",sx:{color:"#A0A1A4"},children:"Dashboard/"}),(0,M.jsx)(n.A,{variant:"h9",sx:{color:"black",fontWeight:"bold"},children:"Early Warning System"})]}),(0,M.jsxs)(r.A,{sx:{marginBottom:2},children:[(0,M.jsx)(n.A,{sx:{justifyContent:"flex-end",display:"flex",marginBottom:3},children:j}),(0,M.jsx)(o.A,{sx:{marginLeft:"10%"},children:(0,M.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.468432544496!2d106.9707306!3d-6.2811956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8d95bbe353%3A0xc8d70e9ca75b316c!2sBrilyan%20Trimatra%20Utama!5e0!3m2!1sen!2sid!4v1723165266461!5m2!1sen!2sid",width:"898",height:"343",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})]}),(0,M.jsx)(o.A,{sx:{width:"100%",typography:"body1"},children:(0,M.jsxs)(c.Ay,{value:a,children:[(0,M.jsx)(o.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,M.jsxs)(A.A,{onChange:(a,e)=>{i(e)},"aria-label":"lab API tabs example",sx:{"& .MuiTabs-indicator":{backgroundColor:"#00A9AD",height:3},"& .MuiTab-root.Mui-selected":{color:"#00A9AD"}},children:[(0,M.jsx)(l.A,{label:"DATA TINGGI MUKA AIR",value:"1"}),(0,M.jsx)(l.A,{label:"DATA POMPA AIR",value:"2"}),(0,M.jsx)(l.A,{label:"DATA CURAH HUJAN",value:"3"})]})}),(0,M.jsx)(d.A,{value:"1",children:(0,M.jsx)(D,{})}),(0,M.jsx)(d.A,{value:"2",children:(0,M.jsx)(T,{})}),(0,M.jsx)(d.A,{value:"3",children:(0,M.jsx)(v,{})})]})})]})]})}},6614:(a,i,e)=>{var t=e(4994);i.A=void 0;var s=t(e(39)),n=e(579);i.A=(0,s.default)((0,n.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined")},9252:(a,i,e)=>{e.d(i,{A:()=>W});var t=e(8587),s=e(8168),n=e(5043),r=e(8387),o=e(2372),l=e(8610),c=e(7598),A=e(2900),d=e(9644),g=e(8280),x=e(579);const h=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,g.A)(),j=(0,d.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:e}=a;return[i.root,i["maxWidth".concat((0,c.A)(String(e.maxWidth)))],e.fixed&&i.fixed,e.disableGutters&&i.disableGutters]}}),u=a=>(0,A.A)({props:a,name:"MuiContainer",defaultTheme:m});var f=e(6803),b=e(4535),p=e(6431);const y=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:i=j,useThemeProps:e=u,componentName:A="MuiContainer"}=a,d=i((a=>{let{theme:i,ownerState:e}=a;return(0,s.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:i.spacing(2),paddingRight:i.spacing(2),[i.breakpoints.up("sm")]:{paddingLeft:i.spacing(3),paddingRight:i.spacing(3)}})}),(a=>{let{theme:i,ownerState:e}=a;return e.fixed&&Object.keys(i.breakpoints.values).reduce(((a,e)=>{const t=e,s=i.breakpoints.values[t];return 0!==s&&(a[i.breakpoints.up(t)]={maxWidth:"".concat(s).concat(i.breakpoints.unit)}),a}),{})}),(a=>{let{theme:i,ownerState:e}=a;return(0,s.A)({},"xs"===e.maxWidth&&{[i.breakpoints.up("xs")]:{maxWidth:Math.max(i.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[i.breakpoints.up(e.maxWidth)]:{maxWidth:"".concat(i.breakpoints.values[e.maxWidth]).concat(i.breakpoints.unit)}})})),g=n.forwardRef((function(a,i){const n=e(a),{className:g,component:m="div",disableGutters:j=!1,fixed:u=!1,maxWidth:f="lg"}=n,b=(0,t.A)(n,h),p=(0,s.A)({},n,{component:m,disableGutters:j,fixed:u,maxWidth:f}),y=((a,i)=>{const{classes:e,fixed:t,disableGutters:s,maxWidth:n}=a,r={root:["root",n&&"maxWidth".concat((0,c.A)(String(n))),t&&"fixed",s&&"disableGutters"]};return(0,l.A)(r,(a=>(0,o.Ay)(i,a)),e)})(p,A);return(0,x.jsx)(d,(0,s.A)({as:m,ownerState:p,className:(0,r.A)(y.root,g),ref:i},b))}));return g}({createStyledComponent:(0,b.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,i)=>{const{ownerState:e}=a;return[i.root,i["maxWidth".concat((0,f.A)(String(e.maxWidth)))],e.fixed&&i.fixed,e.disableGutters&&i.disableGutters]}}),useThemeProps:a=>(0,p.b)({props:a,name:"MuiContainer"})}),W=y}}]);
//# sourceMappingURL=3593.daf316dd.chunk.js.map
"use strict";(self.webpackChunksmartcity=self.webpackChunksmartcity||[]).push([[3077],{3226:(e,a,t)=>{t.d(a,{A:()=>d});t(5043);var n=t(6058),i=t(6446),s=t(5865),r=t(8911),o=t(7658);o.t1.register(...o.$L);var l=t(579);const d=e=>{let{data:a}=e;const t={labels:a.labels,datasets:[{data:a.values,backgroundColor:["#FFCD56","#FF9F40","#4BC0C0","#36A2EB"],hoverBackgroundColor:["#FFCD56","#FF9F40","#4BC0C0","#36A2EB"]}]};return(0,l.jsxs)(i.A,{textAlign:"center",children:[(0,l.jsxs)(s.A,{variant:"h6",sx:{fontWeight:"bold",marginBottom:1},children:[a.title," "]}),(0,l.jsx)(s.A,{variant:"body2",sx:{color:"#6c757d",marginBottom:3},children:(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),(0,l.jsx)(i.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:2,width:300,margin:"auto"},children:(0,l.jsx)(n.Fq,{data:t,width:250,height:250})}),(0,l.jsx)(r.A,{direction:"row",spacing:2,justifyContent:"space-between",sx:{marginTop:2},children:t.labels.map(((e,a)=>(0,l.jsxs)(r.A,{direction:"column",alignItems:"center",children:[(0,l.jsx)(i.A,{sx:{backgroundColor:t.datasets[0].backgroundColor[a],borderRadius:"50%",marginBottom:1}}),(0,l.jsx)(s.A,{sx:{color:"#6c757d"},children:e}),(0,l.jsxs)(s.A,{sx:{fontWeight:"bold"},children:[t.datasets[0].data[a],"%"]})]},a)))})]})}},914:(e,a,t)=>{t.d(a,{A:()=>x});var n=t(5043),i=t(8168),s=t(8911),r=t(5865),o=t(5886),l=t(579);const d=e=>e.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)?"multi-panel-UI-view":e.match(/^([A-Za-z]*)(DigitalClock)$/)?"Tall-UI-view":e.match(/^Static([A-Za-z]+)/)||e.match(/^([A-Za-z]+)(Calendar|Clock)$/)?"UI-view":e.match(/^MultiInput([A-Za-z]+)RangeField$/)||e.match(/^([A-Za-z]+)RangePicker$/)?"multi-input-range-field":e.match(/^SingleInput([A-Za-z]+)RangeField$/)?"single-input-range-field":"single-input-field";function c(e){const{label:a,children:t,component:n,sx:c}=e;let A,m=c;return n&&"multi-input-range-field"===d(n)?(A=1.5,m=(0,i.A)({},m,{["& .".concat(o.A.root)]:{flexGrow:1}})):A=1,(0,l.jsxs)(s.A,{direction:"column",alignItems:"stretch",spacing:A,sx:m,children:[a&&(0,l.jsx)(r.A,{variant:"body2",children:a}),t]})}c.displayName="DemoItem";var A=t(8390),m=t(9302),u=t(2523),h=t(6446);function x(){const[e,a]=n.useState(!1);return n.useEffect((()=>{if(e){const e=setTimeout((()=>{a(!1)}),1500);return()=>clearTimeout(e)}return()=>{}}),[e]),(0,l.jsx)(A.$,{dateAdapter:m.R,children:(0,l.jsxs)(h.A,{sx:{width:"179px",height:"100%",display:"flex",justifyContent:"center",position:"relative"},children:[(0,l.jsx)(c,{children:(0,l.jsx)(u.T,{sx:{width:179,height:38,fontSize:12},slotProps:{field:{clearable:!0,onClear:()=>a(!0)}}})}),e&&console.log("Field cleared!")]})})}},3077:(e,a,t)=>{t.r(a),t.d(a,{default:()=>R});var n=t(5043),i=t(8911),s=t(5865),r=t(9252),o=t(3336),l=t(6446),d=t(2788),c=t(1906),A=t(9650),m=t(1806),u=t(4882),h=t(8076),x=t(2420),j=t(3460),g=t(3845),k=t(7392),b=t(9135),f=t(6614),p=t(6360),C=t(2505),v=t(914),_=t(3216),y=t(3226),S=t(4810),I=t(579);const M=[{id:1,nama_objek:"Yan Azhari",jenis_objek:"Warga",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Sedang jogging pagi",status_objek:"MENCURIGAKAN"},{id:2,nama_objek:"Khoirul Mustaan",jenis_objek:"Tamu",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Ingin berkunjung ke rumah bapak",status_objek:"TIDAK MENCURIGAKAN"},{id:3,nama_objek:"Deddy Sunarya",jenis_objek:"Tidak Dikenal",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Tidak jelas tujuannya apa",status_objek:"MENCURIGAKAN"},{id:4,nama_objek:"Cindy Riyanti",jenis_objek:"Warga",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Ingin berkunjung ke rumah bapak",status_objek:"TIDAK MENCURIGAKAN"},{id:5,nama_objek:"Syahri Ramadhan",jenis_objek:"Pengunjung",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Ingin sholat di Masjid Baitul Jihad",status_objek:"TIDAK MENCURIGAKAN"},{id:6,nama_objek:"farrel savero",jenis_objek:"Tamu",informasi_masuk:"06/01/2024",jam_masuk:"08:00",informasi_keluar:"06/01/2024",jam_keluar:"08:00",keterangan:"Prakiraan cuaca",status_objek:"TIDAK MENCURIGAKAN"}],W=e=>{switch(e){case"TIDAK MENCURIGAKAN":return{backgroundColor:"#DBF8DC",color:"#5AF411",fontWeight:"bold"};case"MENCURIGAKAN":return{backgroundColor:"#FBE3E3",color:"#EE1717",fontWeight:"bold"};default:return{}}},R=()=>{const[e,a]=(0,n.useState)(""),[t,R]=(0,n.useState)(1),N=(0,_.Zp)(""),T=M.slice(5*(t-1),5*t),w=(e,a)=>e?e.length<=a?e:e.substring(0,a)+"...":"";return(0,I.jsxs)("div",{children:[(0,I.jsx)(S.A,{}),(0,I.jsxs)(i.A,{direction:"column",children:[(0,I.jsx)(s.A,{variant:"h5",sx:{marginBottom:0,color:"#00A9AD",fontSize:18},children:"COMMAND CENTER"}),(0,I.jsxs)(i.A,{direction:"row",sx:{marginBottom:2,fontSize:14},children:[(0,I.jsx)(s.A,{variant:"h8",sx:{color:"#A0A1A4"},children:"Dashboard/"}),(0,I.jsx)(s.A,{variant:"h9",sx:{color:"black",fontWeight:"bold"},children:"One Gate System"})]})]}),(0,I.jsx)(r.A,{component:o.A,sx:{marginBottom:2},children:(0,I.jsx)(l.A,{sx:{marginLeft:"0%"},children:(0,I.jsx)(y.A,{data:(()=>{const e=M.reduce(((e,a)=>(e[a.jenis_objek.toUpperCase()]=(e[a.jenis_objek.toUpperCase()]||0)+1,e)),{}),a=Object.values(e).reduce(((e,a)=>e+a),0);return{labels:Object.keys(e),values:Object.values(e).map((e=>(e/a*100).toFixed(2))),title:"DATA ONE GATE SYSTEM"}})()})})}),(0,I.jsxs)(i.A,{direction:"row",spacing:2,alignItems:"flex-end",sx:{marginBottom:2},children:[(0,I.jsxs)(i.A,{children:[(0,I.jsx)(s.A,{variant:"h9",sx:{color:"black"},children:"Tanggal Masuk"}),(0,I.jsx)(v.A,{})]}),(0,I.jsxs)(i.A,{children:[(0,I.jsx)(s.A,{variant:"h9",sx:{color:"black"},children:"Tanggal Keluar"}),(0,I.jsx)(v.A,{})]}),(0,I.jsx)(d.A,{value:e,onChange:e=>{a(e.target.value)},placeholder:"Cari",InputProps:{startAdornment:(0,I.jsx)(p.A,{})},sx:{width:180,height:38}}),(0,I.jsx)(c.A,{variant:"contained",onClick:()=>{},sx:{backgroundColor:"#00A9AD",height:38},children:"CARI"}),(0,I.jsx)(c.A,{variant:"contained",color:"primary",onClick:()=>{N("/Ogs/Tambah")},startIcon:(0,I.jsx)(C.A,{}),sx:{backgroundColor:"#00A9AD",height:38,display:"flex",alignItems:"center"},style:{marginLeft:"auto"},children:"TAMBAH OBJEK"})]}),(0,I.jsx)(A.A,{component:o.A,children:(0,I.jsxs)(m.A,{children:[(0,I.jsx)(u.A,{children:(0,I.jsxs)(h.A,{children:[(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"NO"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"OBJEK"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"INFORMASI MASUK"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"INFORMASI KELUAR"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"KETERANGAN"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"STATUS OBJEK"}),(0,I.jsx)(x.A,{sx:{fontFamily:"Montserrat, sans-serif",fontWeight:"bold",color:"#A0A1A4"},children:"AKSI"})]})}),(0,I.jsx)(j.A,{children:T.map((e=>(0,I.jsxs)(h.A,{sx:{marginBottom:2,display:"table-row",borderBottom:"none"},children:[(0,I.jsx)(x.A,{children:e.id}),(0,I.jsx)(x.A,{children:(0,I.jsxs)(i.A,{direction:"column",alignItems:"left",children:[(0,I.jsx)("span",{children:w(e.nama_objek,20)}),(0,I.jsx)("span",{style:{color:"#A1A5B7"},children:w(e.jenis_objek,20)})]})}),(0,I.jsx)(x.A,{children:(0,I.jsxs)(i.A,{direction:"column",alignItems:"left",children:[(0,I.jsx)("span",{children:w(e.informasi_masuk,20)}),(0,I.jsx)("span",{style:{color:"#A1A5B7"},children:w(e.jam_masuk,20)})]})}),(0,I.jsx)(x.A,{children:(0,I.jsxs)(i.A,{direction:"column",alignItems:"left",children:[(0,I.jsx)("span",{children:w(e.informasi_keluar,20)}),(0,I.jsx)("span",{style:{color:"#A1A5B7"},children:w(e.jam_keluar,20)})]})}),(0,I.jsx)(x.A,{children:w(e.keterangan,20)}),(0,I.jsx)(x.A,{children:(0,I.jsx)(g.A,{label:e.status_objek,sx:W(e.status_objek)})}),(0,I.jsx)(x.A,{children:(0,I.jsx)(k.A,{"aria-label":"Example",onClick:()=>N("/Ogs/Detail"),children:(0,I.jsx)(f.A,{sx:{color:"#00A9AD"}})})})]},e.id)))})]})}),(0,I.jsx)(i.A,{direction:"row",justifyContent:"center",sx:{marginTop:2,paddingBottom:4},children:(0,I.jsx)(b.A,{count:Math.ceil(M.length/5),page:t,onChange:(e,a)=>{R(a)},sx:{"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"#00A9AD",color:"#fff"}}})})]})}},2505:(e,a,t)=>{var n=t(4994);a.A=void 0;var i=n(t(39)),s=t(579);a.A=(0,i.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},6360:(e,a,t)=>{var n=t(4994);a.A=void 0;var i=n(t(39)),s=t(579);a.A=(0,i.default)((0,s.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},6614:(e,a,t)=>{var n=t(4994);a.A=void 0;var i=n(t(39)),s=t(579);a.A=(0,i.default)((0,s.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined")},9252:(e,a,t)=>{t.d(a,{A:()=>C});var n=t(8587),i=t(8168),s=t(5043),r=t(8387),o=t(2372),l=t(8610),d=t(7598),c=t(2900),A=t(9644),m=t(8280),u=t(579);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.A)(),j=(0,A.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a["maxWidth".concat((0,d.A)(String(t.maxWidth)))],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),g=e=>(0,c.A)({props:e,name:"MuiContainer",defaultTheme:x});var k=t(6803),b=t(4535),f=t(6431);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:a=j,useThemeProps:t=g,componentName:c="MuiContainer"}=e,A=a((e=>{let{theme:a,ownerState:t}=e;return(0,i.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}})}),(e=>{let{theme:a,ownerState:t}=e;return t.fixed&&Object.keys(a.breakpoints.values).reduce(((e,t)=>{const n=t,i=a.breakpoints.values[n];return 0!==i&&(e[a.breakpoints.up(n)]={maxWidth:"".concat(i).concat(a.breakpoints.unit)}),e}),{})}),(e=>{let{theme:a,ownerState:t}=e;return(0,i.A)({},"xs"===t.maxWidth&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[a.breakpoints.up(t.maxWidth)]:{maxWidth:"".concat(a.breakpoints.values[t.maxWidth]).concat(a.breakpoints.unit)}})})),m=s.forwardRef((function(e,a){const s=t(e),{className:m,component:x="div",disableGutters:j=!1,fixed:g=!1,maxWidth:k="lg"}=s,b=(0,n.A)(s,h),f=(0,i.A)({},s,{component:x,disableGutters:j,fixed:g,maxWidth:k}),p=((e,a)=>{const{classes:t,fixed:n,disableGutters:i,maxWidth:s}=e,r={root:["root",s&&"maxWidth".concat((0,d.A)(String(s))),n&&"fixed",i&&"disableGutters"]};return(0,l.A)(r,(e=>(0,o.Ay)(a,e)),t)})(f,c);return(0,u.jsx)(A,(0,i.A)({as:x,ownerState:f,className:(0,r.A)(p.root,m),ref:a},b))}));return m}({createStyledComponent:(0,b.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a["maxWidth".concat((0,k.A)(String(t.maxWidth)))],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),useThemeProps:e=>(0,f.b)({props:e,name:"MuiContainer"})}),C=p}}]);
//# sourceMappingURL=3077.1fcdd82b.chunk.js.map
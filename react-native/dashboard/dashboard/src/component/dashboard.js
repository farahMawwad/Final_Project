import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Dashboard() {
   const [data,setdata] = useState('')
      useEffect(()=>{
       axios.get(`http://20.102.90.142:8080/dashboard/data`).then((res)=>{
          setdata(res.data)
         console.log(res.data.Latest_purchases)
      
      
      })},[data])
  return (
    <div className='row justify-content-between ' >   
       <div className='col-2  mt-2 '>
        <h3 className='mt-2'>dashboard</h3>
        <div className='  row  justify-content-between p-3 ' style={{height:630,textAlign:"right",background:"#FFB1E4"}}>
        <div style={{ borderRadius: '12px 0 0 12px', background: "#ffffff",height:35 ,marginLeft:100 ,width:150}}>
  <div className='mt-2'>All data</div>
</div>

            <div className='mt-2'>
            <Link style={{textDecoration: 'none' ,color:"black"}} to="/add">Add product</Link>
            </div>
            <div className='mt-2'>
                <Link style={{textDecoration: 'none' ,color:"black"}} to="/delete">Delete product</Link>
            </div>
        </div>
       </div>
       <div className='col-9  mt-3' style={{marginRight:50}}>
        <div className='row justify-content-between  '>
            <div className='col-3 d-flex flex-column align-items-center p-2 ' style={{width: 256,height:127 ,borderRadius: 14,background: "rgba(77, 254, 62, 0.47)"}}>
               <h5 style={{marginTop:30 ,marginBottom:30}}>${data.Profits}</h5>
               <h6  style={{marginLeft:120}}> Profits</h6>
                 </div>
            <div className='col-3  d-flex flex-column align-items-center  p-2 ' style={{width: 256,height:127,borderRadius: 14,background: "rgba(62, 81, 254, 0.47)"}}> 
            <h5 style={{marginTop:30,marginBottom:30}}>{data.Purchases}</h5>
               <h6  style={{marginLeft:120}}> Purchases</h6>
            </div>
            <div className='col-3  d-flex flex-column align-items-center  p-2 '  style={{width: 256,height:127,borderRadius: 14,background: "rgba(254, 62, 223, 0.47)"}}>
            <h5 style={{marginTop:30,marginBottom:30}}>{data.Visits}</h5>
               <h6  style={{marginLeft:120}} >Visits</h6>
            </div>
        </div>
        <div  className='m-3 border border-info p-4 rounded-4 mt-5'>
<h6>Latest purchases </h6>
<div className='row gap-4  mt-5'>
   {data.Latest_purchases?data.Latest_purchases.map((e,i)=>{
return(
    <div key={i} className='p-2 rounded-2' style={{background:"#B4FFFF"}}>{e}</div>)
   }):""}

</div>
        </div>
       </div>
    </div>
  );
}

export default Dashboard;

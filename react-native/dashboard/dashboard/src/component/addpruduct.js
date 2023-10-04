import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useState}  from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Addprouduct() {
const [data,setdata]= useState({
  "price":"",
  "category":"",
  "categoryType":"",
  "description":"",
  "name_product":"",
  "uri_img ":"",
})

const senddata =async()=>{
  await  axios.post(`http://20.102.90.142:8080/user/add/product`,{data})
}
  return (
    <div className='row justify-content-between ' >   
       <div className='col-2  mt-2 '>
        <h3 className='mt-2'>dashboard</h3>
        <div className='  row  justify-content-between p-3 ' style={{height:630,textAlign:"right",background:"#FFB1E4"}}>
       

        <div className='mt-2'>
            <Link style={{textDecoration: 'none' ,color:"black"}} to="/">All data</Link>
            </div>
          
  <div style={{ borderRadius: '12px 0 0 12px', background: "#ffffff",height:35 ,marginLeft:100 ,width:150}}>
            <div className='mt-2'>Add product</div>
            </div>
            <div className='mt-2'>
            <Link style={{textDecoration: 'none' ,color:"black"}} to="/delete">Delete product</Link>
            </div>
        </div>
       </div>
       <div className='col-9  mt-3' style={{marginRight:50}}>
        <div  className='m-3 border border-info p-4 rounded-4 mt-5'>
<h6>Add product </h6>
<div className='row gap-4  mt-5'>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'  style={{background:"#B4FFFF"}}>
    <select style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} onChange={(event) =>
    setdata((prevEdit) => ({
      ...prevEdit,
      category: event.target.value 
    }))
  }>
    <option value="">Select an category</option>
    <option value="Electronics">Electronics</option>
    <option value="Beauty/Fragrance">Beauty/Fragrance</option>
    <option value="Fashion">Fashion</option>
    <option value="Gifts">Gifts</option>
  </select>
    </div>
    <div className='col-4'  style={{background:"#B4FFFF"}}>
    <select style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} 
    onChange={(event) =>
      setdata((prevEdit) => ({
        ...prevEdit,
        categoryType: event.target.value 
      }))}
    >
    <option value="" > Select an categoryType</option>
    <option value="Velentain days">Velentain days</option>
    <option value="Birthday Gifts">Birthday Gifts</option>
    <option value="Wedding Gifts">Wedding Gifts</option>
    <option value="Father Days">Father Days</option>
  </select>
    </div></div>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'style={{background:"#B4FFFF"}} >  <input type="text" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='name product' onChange={(event) =>
    setdata((prevEdit) => ({
      ...prevEdit,
      name_product: event.target.value 
    }))}/></div>
    <div className='col-4'style={{background:"#B4FFFF"}} >   <input type="number" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='price '
    onChange={(event) =>
      setdata((prevEdit) => ({
        ...prevEdit,
        price: event.target.value 
      }))}
    /></div>
    </div>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'style={{background:"#B4FFFF"}} >  <textarea  style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='description'
    onChange={(event) =>
      setdata((prevEdit) => ({
        ...prevEdit,
       description: event.target.value 
      }))}
    /></div>
    <div className='col-4'style={{background:"#B4FFFF"}} >   <input type="text" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='uri img '
    onChange={(event) =>
      setdata((prevEdit) => ({
        ...prevEdit,
        uri_img: event.target.value 
      }))}
    /></div>
    </div>
    <div className='row d-flex justify-content-end'>
    <div className='col-3'style={{background:"#FFB1E4"}} >  <button  style={{background:"#FFB1E4" ,width:'100%',borderWidth:0 ,textAlign:"center"}} onClick={()=>{senddata()}}>Add</button></div>
 
    </div>
    

</div>
        </div>
       </div>
    </div>
  );
}

export default Addprouduct;

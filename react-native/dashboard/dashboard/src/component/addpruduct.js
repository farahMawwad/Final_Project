import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
function Addprouduct() {
  return (
    <div className='row justify-content-between ' >   
       <div className='col-2  mt-2 '>
        <h3 className='mt-2'>dashboard</h3>
        <div className='  row  justify-content-between p-3 ' style={{height:630,textAlign:"right",background:"#FFB1E4"}}>
       
  <div className='mt-2'>All data</div>

  <div style={{ borderRadius: '12px 0 0 12px', background: "#ffffff",height:35 ,marginLeft:100 ,width:150}}>
            <div className='mt-2'>Add product</div>
            </div>
            <div className='mt-2'>Delete product</div>
        </div>
       </div>
       <div className='col-9  mt-3' style={{marginRight:50}}>
        <div  className='m-3 border border-info p-4 rounded-4 mt-5'>
<h6>Add product </h6>
<div className='row gap-4  mt-5'>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'  style={{background:"#B4FFFF"}}>
    <select style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}}>
    <option value="">Select an option</option>
    <option value="Electronics">Electronics</option>
    <option value="Beauty/Fragrance">Beauty/Fragrance</option>
    <option value="Fashion">Fashion</option>
    <option value="Gifts">Gifts</option>
  </select>
    </div>
    <div className='col-4'  style={{background:"#B4FFFF"}}>
    <select style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}}>
    <option value="">Select an option</option>
    <option value="Electronics">Electronics</option>
    <option value="Beauty/Fragrance">Beauty/Fragrance</option>
    <option value="Fashion">Fashion</option>
    <option value="Gifts">Gifts</option>
  </select>
    </div></div>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'style={{background:"#B4FFFF"}} >  <input type="text" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='name product'/></div>
    <div className='col-4'style={{background:"#B4FFFF"}} >   <input type="number" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='price '/></div>
    </div>
    <div className='row d-flex justify-content-around'>
    <div className='col-4'style={{background:"#B4FFFF"}} >  <textarea  style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='description'/></div>
    <div className='col-4'style={{background:"#B4FFFF"}} >   <input type="text" style={{background:"#B4FFFF" ,width:'100%',borderWidth:0}} placeholder='uri img '/></div>
    </div>
    <div className='row d-flex justify-content-end'>
    <div className='col-3'style={{background:"#FFB1E4"}} >  <button  style={{background:"#FFB1E4" ,width:'100%',borderWidth:0 ,textAlign:"center"}}>Add</button></div>
 
    </div>
    

</div>
        </div>
       </div>
    </div>
  );
}

export default Addprouduct;
